import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as zaml from '@zaml/parser';
import { NodePart } from './TreeNode';
import './TreeView.css';

const { NodeType } = zaml;

interface Props {
  selected: boolean;
  node?: zaml.Node;
  onClick: () => void;
}

export default class TreePathItem extends React.Component<Props> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    selected: false,
    node: undefined,
    onClick: () => {},
  }

  render() {
    const { selected, node, onClick } = this.props;
    if (!node) {
      return null;
    }
    let name: string = '';
    if (node.type === NodeType.TEXT) {
      name = '(text)'
    } else if (node.type === NodeType.TAG) {
      name = `{${node.name}}`;
    } else if (node.type === NodeType.ENTITY) {
      name = `[${node.name}]`;
    } else {
      name = node.type;
    }
    return (
      <span
        className={classNames('zaml-tree-path-item', node.type, { selected })}
        onClick={onClick}
      >
        {name}
      </span>
    )
  }
}
