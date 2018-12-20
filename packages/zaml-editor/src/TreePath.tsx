import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import TreeNode, { NodePart } from './TreeNode';
import './TreeView.css';
import TreePathItem from './TreePathItem';

interface Props {
  selectedNode?: zaml.Node;
  onSelect: (node: zaml.Node) => void;
}

interface State {
  nodeList: zaml.Node[];
}

export default class TreePath extends React.Component<Props, State> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    selectedNode: undefined,
    onSelect: () => {},
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      nodeList: this.buildNodeList(props.selectedNode),
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    const { nodeList } = this.state;
    const node = nextProps.selectedNode;
    if (!node) {
      this.setState({
        nodeList: [],
      });
    } else if (!_.includes(nodeList, node)) {
      this.setState({
        nodeList: this.buildNodeList(node),
      });
    }
  }

  buildNodeList(node: zaml.Node | undefined) {
    let list: zaml.Node[] = [];
    while (node) {
      list.unshift(node);
      node = node.parent;
    }
    return list;
  }

  render() {
    const { selectedNode, onSelect } = this.props;
    const { nodeList } = this.state;
    return (
      <div className="zaml-tree-path">
        {nodeList.map(n => (
          <TreePathItem
            key={n.id}
            selected={n === selectedNode}
            node={n}
            onClick={() => onSelect(n)}
          />
        ))}
      </div>
    )
  }
}
