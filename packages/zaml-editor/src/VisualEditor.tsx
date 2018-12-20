import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import { contextMenu, Menu, Item } from 'react-contexify';
import VisualNode from './VisualNode';
import './VisualEditor.css';
import 'react-contexify/dist/ReactContexify.min.css';

interface Props {
  node?: zaml.Node;
  selectedNode?: zaml.Node;
  onSelect: (node?: zaml.Node) => void;
}

interface State {
  node?: zaml.Node;
}

export default class VisualEditor extends React.Component<Props, State> {

  static propTypes = {
    node: PropTypes.shape({}),
    selectedNode: PropTypes.shape({}),
    onSelect: PropTypes.func,
  }

  static defaultProps: Props = {
    onSelect: () => {},
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
    contextMenu.show({ id: 'menu', event });
  }

  render() {
    const { node, selectedNode, onSelect } = this.props;
    const { node: n } = this.state;
    return (
      <div className="zaml-visual-editor">
        <VisualNode
          node={node}
          selectedNode={selectedNode}
          onContextMenu={this.handleContextMenu}
        />
        <Menu id="menu">
          <Item disabled>{n ? (`${n.type}${n.name ? `:${n.name}` : ''}`) : '???'}</Item>
          <Item onClick={() => onSelect(n)}>Inspect</Item>
        </Menu>
      </div>
    )
  }
}
