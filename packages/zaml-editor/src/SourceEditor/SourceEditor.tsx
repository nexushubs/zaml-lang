import React from 'react';
import PropTypes from 'prop-types';
import codemirror from 'codemirror';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './SourceEditor.scss';
import './codemirror-mode';

interface Props {
  value: string;
  height: number;
  onChange: (value: string) => void;
}

interface State {
  value: string;
}

const codeMirrorOptions: codemirror.EditorConfiguration = {
  mode: 'zaml',
  lineNumbers: true,
  lineWrapping: true,
};

export default class SourceEditor extends React.Component<Props, State> {

  static propTypes = {
    value: PropTypes.string,
    height: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps: Props = {
    value: '',
    height: -1,
    onChange: () => {},
  }

  public editor?: CodeMirror.Editor;

  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.editor) {
      if (nextProps.height !== this.props.height && this.editor) {
        this.editor.setSize(null, nextProps.height);
      }
      if (nextProps.value !== this.props.value) {
        this.editor.setValue(nextProps.value);
      }
    }
  }

  render() {
    const { onChange } = this.props;
    const { value } = this.state;
    return (
      <div className="zaml-source">
        <CodeMirror
          value={value}
          options={codeMirrorOptions}
          onBeforeChange={(editor, data, value) => this.setState({ value })}
          onChange={(editor, data, value) => onChange(value)}
          editorDidMount={editor => this.editor = editor}
        />
      </div>
    );
  }
}
