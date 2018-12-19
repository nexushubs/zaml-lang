import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import classNames from 'classnames';
import './VisualNode.css';

const { NodeType } = zaml;

interface Props {
  node: zaml.Node | null;
}

export default class VisualNode extends React.Component<Props> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    node: null,
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { node } = this.props;
    let element: string | null;
    if (!node) return null;
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
            href={node.attributes.url}
          >
            <VisualNode node={node.children[0]} />
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
          {_.map(node.children, (child, i) => <VisualNode key={i} node={child} />)}
        </span>
      );
    } else if (node.type === 'text') {
      children.push(
        node.content
      );
    }
    return React.createElement(element, {
      className: classNames(`zaml-${node.type}`, { block: node.isBlock }),
      'node-name': node.name && node.name.toLowerCase(),
    }, children);
  }
}
