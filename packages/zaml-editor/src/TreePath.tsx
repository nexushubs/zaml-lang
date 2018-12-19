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

export default class TreePath extends React.Component<Props> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    selectedNode: undefined,
    onSelect: () => {},
  }

  state = {
    selectedPart: NodePart.Whole,
  };

  render() {
    const { selectedNode, onSelect } = this.props;
    if (!selectedNode) {
      return null;
    }
    const list: zaml.Node[] = [];
    let node: zaml.Node | undefined = selectedNode;
    while (node) {
      list.unshift(node);
      node = node.parent;
    }
    return (
      <div className="zaml-tree-path">
        {list.map(n => (
          <TreePathItem
            selected={n === selectedNode}
            node={n}
            onClick={() => onSelect(n)}
          />
        ))}
      </div>
    )
  }
}
