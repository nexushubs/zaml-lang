import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import SplitPane from 'react-split-pane';
import TreeNode, { NodePart } from './TreeNode';
import TreePath from './TreePath';
import TreeToolbar from './TreeToolbar';
import TreePropEditor from './TreePropEditor';
import './TreeView.scss';

interface Props {
  root?: zaml.Node;
  selectedNode?: zaml.Node;
  onSelect: (node: zaml.Node) => void;
  onHover: (node?: zaml.Node) => void;
}

interface State {
  selectedPart: NodePart,
  expandedNodes: string[];
}

const nil = () => {}

export default class TreeView extends React.Component<Props, State> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    onSelect: nil,
    onHover: nil,
  }

  state = {
    selectedPart: NodePart.Header,
    expandedNodes: [],
  };

  handleExpansionChange(node: zaml.Node, expanded: boolean) {
    const { selectedNode } = this.props;
    const { expandedNodes } = this.state;
    if (selectedNode === node) {
      this.setState({
        selectedPart: expanded ? NodePart.Header : NodePart.Whole,
      });
    }
    if (expanded && !_.includes(expandedNodes, node.id)) {
      this.setState({
        expandedNodes: [...expandedNodes, node.id],
      });
    } else if (!expanded && _.includes(expandedNodes, node.id)) {
      this.setState({
        expandedNodes: _.without(expandedNodes, node.id),
      });
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { selectedNode } = nextProps;
    if (selectedNode && selectedNode !== this.props.selectedNode) {
      const { expandedNodes } = this.state;
      const nodeIds = selectedNode.path.map(n => n.id);
      this.setState({
        expandedNodes: _.union(expandedNodes, nodeIds),
      });
    }
  }

  render() {
    const { root: node, selectedNode, onSelect, onHover } = this.props;
    const { expandedNodes, selectedPart } = this.state;
    return (
      <div className="zaml-tree-view">
        <SplitPane
          split="horizontal"
          defaultSize="60%"
          minSize={200}
        >
          <div className="tree-container">
            <TreeToolbar />
            <div className="tree">
              <TreeNode
                node={node}
                selectedNode={selectedNode}
                selectedPart={selectedPart}
                expandedNodes={expandedNodes}
                onSelect={onSelect}
                onSelectPart={p => this.setState({ selectedPart: p })}
                onMouseEnter={onHover}
                onMouseOut={() => onHover()}
                onExpansionChange={(n: zaml.Node, expanded: boolean) => this.handleExpansionChange(n, expanded)}
              />
            </div>
            <TreePath
              selectedNode={selectedNode}
              onSelect={onSelect}
            />
          </div>
          <TreePropEditor
            node={selectedNode}
          />
        </SplitPane>
      </div>
    )
  }
}
