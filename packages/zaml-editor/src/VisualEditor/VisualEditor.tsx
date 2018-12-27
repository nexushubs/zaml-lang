import _ from 'lodash';
import React from 'react';
import PropTypes, { node } from 'prop-types';
import * as zaml from '@zaml/parser';
import { ContextMenuTarget, Menu, MenuItem, MenuDivider } from "@blueprintjs/core"
import VisualNode from './VisualNode';
import './VisualEditor.scss';
import 'react-contexify/dist/ReactContexify.min.css';

const { NodeType } = zaml;

interface Props {
  commonEntityNames?: string[];
  root?: zaml.Node;
  selectedNode?: zaml.Node;
  onSelect: (node?: zaml.Node) => void;
  onChange: (node?: zaml.Node, selected?: zaml.Node) => void;
}

interface State {
}

@ContextMenuTarget
export default class VisualEditor extends React.Component<Props, State> {

  static propTypes = {
    commonEntityNames: PropTypes.arrayOf(PropTypes.string),
    root: PropTypes.shape({}),
    selectedNode: PropTypes.shape({}),
    onSelect: PropTypes.func,
  }

  static defaultProps: Props = {
    commonEntityNames: ['PER', 'ORG', 'LOC', 'DATE'],
    onSelect: () => {},
    onChange: () => {},
  }

  public currentNode?: zaml.Node;

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  handleContextMenu = (event: React.MouseEvent, node?: zaml.Node) => {
    this.currentNode = node;
    this.setState({ node });
  }

  handleDoubleClick(event: React.MouseEvent) {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const domNode = range.startContainer;
    const text = domNode.textContent;
    if (!text) return;
    event.preventDefault();
    event.stopPropagation();
    const punctuationPattern = /[!?:;。！？：；]/g;
    let startPos = 0;
    let endPos = text.length;
    let pos = 0;
    while (punctuationPattern.exec(text)) {
      startPos = pos;
      pos = punctuationPattern.lastIndex;
      punctuationPattern.lastIndex++;
      if (pos > range.startOffset) {
        endPos = pos;
        break;
      }
    }
    range.setStart(domNode, startPos);
    range.setEnd(domNode, endPos);
  }

  handleCreateBlock() {
    const { root, onChange } = this.props;
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const commonNode = this.getNodeByElement(range.commonAncestorContainer as HTMLElement);
    let startNode = this.getNodeByElement(range.startContainer as HTMLElement);
    let endNode = this.getNodeByElement(range.endContainer as HTMLElement);
    if (!commonNode || !startNode || !endNode) {
      return;
    }
    const block = zaml.Node.createBlockByRange({
      startNode,
      startOffset: range.startOffset,
      endNode,
      endOffset: range.endOffset,
    });
    selection.removeAllRanges();
    onChange(root, block);
  }

  handleRemoveBlock(node?: zaml.Node) {
    if (!node) return;
    const { root, onChange } = this.props;
    const parent = node.flatten();
    onChange(root, parent);
  }

  handleCreateEntity(target: zaml.Node, name: string | null) {
    if (!name) return;
    const { root, onChange } = this.props;
    const selection = window.getSelection();
    if (selection.anchorNode !== selection.focusNode) {
      alert('Entity is only allowed in pure text!');
      return;
    }
    if (selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const entityNodes = target.createEntities([{
      type: name,
      start: range.startOffset,
      end: range.endOffset,
    }]);
    onChange(root, entityNodes[0]);
  }

  handleRemoveEntity(node?: zaml.Node) {
    if (!node) return;
    const { root, onChange } = this.props;
    const textNode = node.removeEntity();
    onChange(root, textNode);
  }

  handleInspect(node: zaml.Node) {
    const { onSelect } = this.props;
    onSelect(node);
  }

  handleSplitSentences(node?: zaml.Node) {
    if (!node) return;
    const { root, onChange } = this.props;
    node.splitText('：。！？', 'SENTENCE');
    onChange(root);
  }

  getNodeByElement(element: HTMLElement) {
    const { root: root } = this.props;
    if (!root) return undefined;
    if (element.nodeType === element.TEXT_NODE || element.classList.contains('children')) {
      if (!element.parentElement) {
        return undefined;
      }
      element = element.parentElement;
    }
    const id = element.getAttribute('node-id');
    if (!id) return undefined;
    return root.getNodeById(id);
  }

  render() {
    const { root: node, selectedNode } = this.props;
    return (
      <div
        className="zaml-visual-editor"
        onDoubleClick={(event: React.MouseEvent) => this.handleDoubleClick(event)}
      >
        <VisualNode
          node={node}
          selectedNode={selectedNode}
        />
      </div>
    )
  }

  renderContextMenu(e: React.MouseEvent<HTMLElement>) {
    const { commonEntityNames } = this.props;
    const target = this.getNodeByElement(e.target as HTMLElement);
    let node = target;
    if (!target) return;
    if (target.type === NodeType.TEXT) {
      node = target.parent;
    }
    if (!node) return;
    const wrapperNode = node;
    return (
      <Menu id="menu">
        <MenuItem disabled text={node.descriptor} />
        <MenuDivider />
        <MenuItem
          text="Create Block"
          onClick={() => this.handleCreateBlock()}
        />
        {node.isWrappingTag &&
          <MenuItem
            text="Remove Block"
            onClick={() => this.handleRemoveBlock(node)}
          />
        }
        {node.isBlock &&
          <MenuItem
            text="Split Sentences"
            onClick={() => this.handleSplitSentences(node)}
          />
        }
        {target.type === NodeType.TEXT && target.parent && target.parent.type !== NodeType.ENTITY &&
          <MenuItem text="Create Entity">
            {commonEntityNames && commonEntityNames.map(name => (
              <MenuItem
                key={name}
                text={name}
                onClick={() => this.handleCreateEntity(target, name)}
              />
            ))}
            <MenuItem
              text="other..."
              onClick={() => this.handleCreateEntity(target, prompt('Please input entity type', 'PER'))}
            />
          </MenuItem>
        }
        {node.type === NodeType.ENTITY &&
          <MenuItem
            text="Remove Entity"
            onClick={() => this.handleRemoveEntity(node)}
          />
        }
        <MenuDivider />
        <MenuItem
          text="Inspect"
          onClick={() => this.handleInspect(wrapperNode)}
        />
      </Menu>
    );
  }
}
