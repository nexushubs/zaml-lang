import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import SplitPane from 'react-split-pane';
import Pane from './Pane';
import SourceEditor from '../SourceEditor/SourceEditor';
import VisualEditor from '../VisualEditor/VisualEditor';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'normalize.css/normalize.css';
import './Editor.scss';
import { ReactComponent as Logo } from './logo.svg';
import TreeView from '../TreeView/TreeView';

const { Node, NodeType } = zaml;

interface Props {
  defaultSource: string;
  className: string;
  onChange: (value: string) => void;
}

interface State {
  source: string
  root: zaml.Node;
  sourcePaneHeight: number;
  selectedNode?: zaml.Node;
  hoveredNode?: zaml.Node;
}

const parse = (source: string) => {
  let node = Node.create(NodeType.ROOT);
  try {
    node = zaml.parse(source, { needMetadataMarker: true });
    (global as any).node = node;
    console.info('Root node exported as global variable "node"', node);
  } catch(err) {
    if (err instanceof zaml.ParseError) {
      const message = `
        [ParseError]{ERROR.TYPE}: {#MESSAGE ${err.message}}

        #SOURCE
        content

        from {#POS.START ${err.from.ln}:${err.from.col}} to {#POS.END ${err.to.ln}:${err.to.col}}
      `;
      node = zaml.parse(message);
      const sourceBlock = node.querySelector('#SOURCE');
      const { text } = err.from.line;
      if (!sourceBlock) return node;
      const sourceText = sourceBlock.findOneBy({type: NodeType.TEXT});
      if (!sourceText) return node;
      sourceText.content = `${text} `;
      sourceText.createEntitiesFromText([{
        type: 'ERROR',
        start: err.from.col - 1,
        end: err.to.col - 1,
      }]);
    } else {
      node = zaml.parse(`Error: [${err.message}]{MESSAGE}`);
      console.error(err);
    }
  }
  return node;
}

export default class Editor extends React.Component<Props, State> {

  static propTypes = {
    defaultSource: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps: Props = {
    defaultSource: '',
    className: '',
    onChange: () => {},
  }

  public preventSourceChange: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {
      source: props.defaultSource,
      root: parse(props.defaultSource),
      sourcePaneHeight: -1,
    };
    this.onResize = _.throttle(this.onResize.bind(this), 500);
    this.preventSourceChange = false;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, { passive: true });
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  componentWillReceiveProps(nextProps: Props) {
  }

  componentWillUpdate(nextProps: Props, nextState: State) {
    if (nextState.selectedNode !== this.state.selectedNode) {
      console.log('selected node:', nextState.selectedNode);
    }
    if (nextState.root !== this.state.root) {
      console.log('new node:', nextState.root);
    }
  }

  onResize() {
    const height = window.innerHeight - 60;
    this.setState({
      sourcePaneHeight: height,
    });
  }

  handleSourceChange(source: string) {
    if (this.preventSourceChange) return;
    this.setState({
      root: parse(source),
      selectedNode: undefined,
    });
  }

  handleNodeChange(root?: zaml.Node, selected?: zaml.Node) {
    if (!root) return;
    this.preventSourceChange = true;
    this.setState({
      source: root.toSource(),
      selectedNode: selected,
    }, () => {
      this.preventSourceChange = false;
    });
  }

  render() {
    const { source } = this.state;
    const { root, sourcePaneHeight, selectedNode, hoveredNode } = this.state;
    return (
      <div className="zaml-editor">
        <header>
          <a className="project-link" href="https://github.com/nexushubs/zaml-lang/tree/master/packages/zaml-editor"><Logo className="logo" /> Editor</a>
          <a className="github-link" href="https://github.com/nexushubs/zaml-lang">View on Github</a>
        </header>
        <section className="editor-panes">
          <SplitPane
            split="vertical"
            defaultSize="33.33%"
            minSize={200}
          >
            <Pane title="Source">
              <SourceEditor
                value={source}
                height={sourcePaneHeight - 40}
                onChange={(value: string) => this.handleSourceChange(value)}
              />
            </Pane>
            <SplitPane split="vertical" defaultSize="50%">
              <Pane title="Visual">
                <VisualEditor
                  root={root}
                  selectedNode={hoveredNode || selectedNode}
                  onSelect={n => this.setState({ selectedNode: n })}
                  onChange={(r?: zaml.Node, n?: zaml.Node) => this.handleNodeChange(r, n)}
                />
              </Pane>
              <Pane title="AST">
                <TreeView
                  root={root}
                  selectedNode={selectedNode}
                  onSelect={n => this.setState({ selectedNode: n })}
                  onHover={n => this.setState({ hoveredNode: n })}
                  onChange={n => this.handleNodeChange(root, n)}
                />
              </Pane>
            </SplitPane>
          </SplitPane>
        </section>
      </div>
    );
  }
}
