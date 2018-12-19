import React from 'react';
import PropTypes, { number } from 'prop-types';
import classNames from 'classnames';
import codemirror from 'codemirror';
import { Controlled as CodeMirror } from 'react-codemirror2'
import './codemirror-mode';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

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
    if (this.props.height !== nextProps.height && this.editor) {
      this.editor.setSize(null, nextProps.height);
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
