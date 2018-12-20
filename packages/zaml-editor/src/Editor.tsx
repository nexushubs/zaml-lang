import _ from 'lodash';
import React from 'react';
import PropTypes, { node } from 'prop-types';
import * as zaml from '@zaml/parser';
import SplitPane from 'react-split-pane';
import Pane from './Pane';
import SourceEditor from './SourceEditor';
import VisualEditor from './VisualEditor';
import './Editor.css';
import { ReactComponent as Logo } from './logo.svg';
import TreeView from './TreeView';

const { Node, NodeType } = zaml;

interface Props {
  className: string;
  value: string;
  onChange: (value: string) => void;
}

interface State {
  node: zaml.Node;
  sourcePaneHeight: number;
  selectedNode?: zaml.Node;
  hoveredNode?: zaml.Node;
}

const parse = (source: string) => {
  let node = Node.create(NodeType.ROOT);
  try {
    node = zaml.parse(source);
  } catch(err) {
    node.createChild(NodeType.PARAGRAPH, undefined, { text: `Error: ${err.message}` });
  }
  return node;
}

export default class Editor extends React.Component<Props, State> {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps: Props = {
    value: '',
    className: '',
    onChange: () => {},
  }

  constructor(props: Props) {
    super(props);
    const node = parse(props.value);
    this.state = {
      node,
      sourcePaneHeight: -1,
    };
    this.onResize = _.throttle(this.onResize.bind(this), 500);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, { passive: true });
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        node: parse(nextProps.value),
      });
    }
  }

  onResize() {
    const height = window.innerHeight - 60;
    this.setState({
      sourcePaneHeight: height,
    });
  }

  render() {
    const { value, onChange } = this.props;
    const { node, sourcePaneHeight, selectedNode, hoveredNode } = this.state;
    return (
      <div className="zaml-editor">
        <header>
          <Logo className="logo" /> Editor
        </header>
        <section className="editor-panes">
          <SplitPane
            split="vertical"
            defaultSize="33.33%"
            minSize={200}
          >
            <Pane title="Source">
              <SourceEditor
                value={value}
                height={sourcePaneHeight - 40}
                onChange={onChange}
              />
            </Pane>
            <SplitPane split="vertical" defaultSize="50%">
              <Pane title="Visual">
                <VisualEditor
                  node={node}
                  selectedNode={hoveredNode || selectedNode}
                  onSelect={n => this.setState({ selectedNode: n })}
                />
              </Pane>
              <Pane title="AST">
                <TreeView
                  node={node}
                  selectedNode={selectedNode}
                  onSelect={n => this.setState({ selectedNode: n })}
                  onHover={n => this.setState({ hoveredNode: n })}
                />
              </Pane>
            </SplitPane>
          </SplitPane>
        </section>
      </div>
    );
  }
}
