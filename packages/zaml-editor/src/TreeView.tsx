import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import TreeNode, { NodePart } from './TreeNode';
import './TreeView.css';
import TreePath from './TreePath';

interface Props {
  node?: zaml.Node;
  selectedNode?: zaml.Node;
  onSelect: (node: zaml.Node) => void;
}

interface State {
  selectedPart: NodePart,
}

export default class TreeView extends React.Component<Props, State> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    node: undefined,
    selectedNode: undefined,
    onSelect: () => {},
  }

  state = {
    selectedPart: NodePart.Header,
  };

  render() {
    const { node, selectedNode, onSelect } = this.props;
    const { selectedPart } = this.state;
    return (
      <div className="zaml-tree-view">
        <div className="tree">
          <TreeNode
            node={node}
            selectedNode={selectedNode}
            selectedPart={selectedPart}
            onSelect={onSelect}
            onSelectPart={p => this.setState({ selectedPart: p })}
          />
        </div>
        <TreePath
          selectedNode={selectedNode}
          onSelect={onSelect}
        />
      </div>
    )
  }
}
