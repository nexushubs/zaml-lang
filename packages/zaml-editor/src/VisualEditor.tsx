import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import VisualNode from './VisualNode';
import './VisualEditor.css';

interface Props {
  node?: zaml.Node;
}

export default class VisualEditor extends React.Component<Props> {

  static propTypes = {
    node: PropTypes.shape({})
  }

  static defaultProps: Props = {
    node: undefined,
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { node } = this.props;
    return (
      <div className="zaml-visual-editor">
        <VisualNode node={node} />
      </div>
    )
  }
}
