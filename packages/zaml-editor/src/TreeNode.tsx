import _ from 'lodash';
import * as React from 'react';
import PropTypes, { node } from 'prop-types';
import * as zaml from '@zaml/parser';
import classNames from 'classnames';
import './TreeNode.css';

const { NodeType } = zaml;

export enum NodePart {
  Header = 'header',
  Footer = 'footer',
  Whole = 'whole',
}

const nil = () => {};

interface Props {
  node?: zaml.Node;
  expandedNodes: string[];
  selectedNode?: zaml.Node;
  selectedPart?: NodePart;
  onSelect: (node: zaml.Node) => void;
  onSelectPart: (selectedPart: NodePart) => void;
  onExpansionChange: (node: zaml.Node, expanded: boolean) => void;
  onMouseEnter: (node:zaml.Node) => void;
  onMouseOut: (node:zaml.Node) => void;
}

interface State {
}

export default class TreeNode extends React.Component<Props, State> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    node: undefined,
    expandedNodes: [],
    selectedNode: undefined,
    selectedPart: NodePart.Whole,
    onSelect: nil,
    onSelectPart: nil,
    onExpansionChange: nil,
    onMouseEnter: nil,
    onMouseOut: nil,
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      node,
      selectedNode,
      selectedPart: _selectedPart,
      expandedNodes,
      onSelect,
      onSelectPart,
      onExpansionChange,
      onMouseEnter,
      onMouseOut,
    } = this.props;
    if (!node) return null;
    let selectedPart = _selectedPart;
    const expanded = expandedNodes.indexOf(node.id) > -1 || node.isRoot;
    if (expanded && selectedPart === NodePart.Whole) {
      selectedPart = NodePart.Header;
    }
    const selected = selectedNode === node;
    const onClick = (selectedPart: NodePart) => (event: React.MouseEvent) => {
      event.stopPropagation();
      onSelect(node);
      onSelectPart(selectedPart);
    };
    const commonProps = {
      onMouseEnter: (event: React.MouseEvent) => {
        event.stopPropagation();
        onMouseEnter(node);
      },
      onMouseOut: (event: React.MouseEvent) => {
        event.stopPropagation();
        onMouseOut(node);
      },
    }
    let children: any = null;
    if (!_.isEmpty(node.children)) {
      children = (
        <div key="children" className="children">
          {_.map(node.children, (child, i) => <TreeNode {...this.props} key={i} node={child} />)}
        </div>
      );
    } else if (node.type === 'text') {
      children = node.content;
    }
    if (node.type === NodeType.TEXT) {
      return (
        <div
          className={classNames('text', { selected })}
          onClick={onClick(NodePart.Whole)}
          {...commonProps}
        >
          "{node.content}"
        </div>
      )
    } else if (node.type === NodeType.ENTITY || node.isBlock || node.isWrappingTag) {
      const isEntity = node.type === NodeType.ENTITY;
      const isTag = node.type === NodeType.TAG;
      let onlyText: string | undefined;
      if (node.children.length === 1 && (node.firstChild as zaml.Node).type === NodeType.TEXT) {
        onlyText = (node.firstChild as zaml.Node).content;
      }
      const nameStart = isEntity ? '[' : isTag ? '{' : '<';
      const nameEnd = isEntity ? ']' : isTag ? '}' : '>';
      let name = (isTag || isEntity) ? node.name : node.type;
      return (
        <div
          className={classNames('block', {
            expanded,
            selected: selected && selectedPart === NodePart.Whole,
            'node-selected': selected,
          })}
          onClick={expanded ? undefined : onClick(NodePart.Whole)}
          {...commonProps}
        >
          {node.type !== NodeType.ROOT && (
            <span
              className="indicator"
              onClick={(event) => {
                event.stopPropagation();
                onExpansionChange(node, !expanded);
              }}
            >▾</span>
          )}
          <span
            className={classNames('header', { selected: selected && selectedPart === NodePart.Header })}
            onClick={expanded ? onClick(NodePart.Header) : undefined}
          >
            {nameStart}
            {name}
            {node.labels.map(label => (
              <span key={label} className="prop label">#{label}</span>
            ))}
            {_.keys(node.attributes).map(key => {
              const value = node.attributes[key];
              return (
                <span key={key} className="prop attribute">
                  <span className="key">{key}</span>
                  <span className="assignment">=</span>
                  <span className="value">{JSON.stringify(value)}</span>
                </span>
              );
            })}
            {nameEnd}
          </span>
          {expanded ? children : (
            <span className="ellipsis">{_.truncate(onlyText, { length: 10 }) || '...'}</span>
          )}
          <span
            className={classNames('footer', { selected: selected && selectedPart === NodePart.Footer })}
            onClick={expanded ? onClick(NodePart.Footer) : undefined}
          >
            {nameStart}
            /
            {name}
            {nameEnd}
          </span>
        </div>
      );
    } else {
      return null;
    }
  }
}
