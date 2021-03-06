import _ from 'lodash';
import React from 'react';
import * as zaml from '@zaml/parser';
import classNames from 'classnames';
import './VisualNode.scss';

const { NodeType } = zaml;

interface Props {
  node?: zaml.Node;
  selectedNode?: zaml.Node;
}

export default class VisualNode extends React.Component<Props> {

  static propTypes = {
  }

  render() {
    const { node, selectedNode } = this.props;
    let element: string | null;
    if (!node) return null;
    const selected = node === selectedNode;
    let children: any = [];
    if (node.type === NodeType.ROOT) {
      element = 'div';
    } else if (node.type === NodeType.PARAGRAPH) {
      element = 'p';
    } else if (node.type === NodeType.TEXT) {
      element = 'span';
    } else if (node.type === NodeType.ENTITY) {
      if (node.name === 'LINK') {
        return (
          <a
            className="zaml-entity"
            node-name="link"
            node-id={node.id}
            href={node.attributes.url}
          >
            <VisualNode
              node-id={node.children[0].id}
              {...this.props}
              node={node.children[0]}
            />
          </a>
        );
      } else {
        element = 'span';
      }
    } else if (node.type === NodeType.TAG) {
      // children.push(
      //   <span key="attributes" className="attributes">{node.name}</span>
      // );
      if (node.isBlock) {
        element = 'div';
      } else {
        element = 'span';
      }
    } else {
      element = null;
    }
    if (!element) {
      return null;
    }
    if (!_.isEmpty(node.children)) {
      children.push(
        <span key="children" className="children">
          {_.map(node.children, (child, i) => (
            <VisualNode {...this.props} key={i} node={child} />
          ))}
        </span>
      );
    } else if (node.type === 'text') {
      children.push(
        node.content
      );
    }
    return React.createElement(element, {
      className: classNames('zaml-node', `${node.type}`, { block: node.isBlock, selected }),
      'node-name': node.name && node.name.toLowerCase(),
      'node-id': node.id,
    }, children);
  }
}
