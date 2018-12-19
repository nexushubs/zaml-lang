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

interface Props {
  node?: zaml.Node;
  defaultExpended: boolean;
  selectedNode?: zaml.Node;
  selectedPart?: NodePart;
  onSelect: (node: zaml.Node) => void;
  onSelectPart: (selectedPart: NodePart) => void;
}

interface State {
  expanded: boolean;
}

export default class TreeNode extends React.Component<Props, State> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    node: undefined,
    defaultExpended: false,
    selectedNode: undefined,
    selectedPart: NodePart.Whole,
    onSelect: () => {},
    onSelectPart: () => {},
  }

  constructor(props: Props) {
    super(props);
    const { node } = props;
    this.state = {
      expanded: node ? node.type === NodeType.ROOT : props.defaultExpended,
    }
  }

  render() {
    const { node, selectedNode, selectedPart: _selectedPart, onSelect, onSelectPart } = this.props;
    const { expanded } = this.state;
    if (!node) return null;
    let selectedPart = _selectedPart;
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
      onMouseEnter: () => this.setState({}),
      onMouseOut: () => this.setState({}),
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
      const isTag = [NodeType.TAG, NodeType.ENTITY].indexOf(node.type) > -1;
      let onlyText: string | undefined;
      if (node.children.length === 1 && (node.firstChild as zaml.Node).type === NodeType.TEXT) {
        onlyText = (node.firstChild as zaml.Node).content;
      }
      const nameStart = isTag ? '{' : '<';
      const nameEnd = isTag ? '}' : '>';
      let name = isTag ? node.name : node.type;
      if (node.type === NodeType.ENTITY) {
        name = `@${name}`;
      }
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
                const state = !expanded;
                this.setState({ expanded: state }, () => {
                  if (selected) {
                    onSelectPart(state ? NodePart.Header : NodePart.Whole);
                  }
                });
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
          <span className="ellipsis">{_.truncate(onlyText, { length: 10 }) || '...'}</span>
          {children}
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
