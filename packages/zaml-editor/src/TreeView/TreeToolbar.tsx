import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';

interface Props {
}

export default class TreeToolbar extends React.Component<Props> {

  static propTypes = {
  }

  static defaultProps: Props = {
  }

  state = {
  };

  render() {
    return (
      <div className="zaml-tree-toolbar">
        toolbar
      </div>
    )
  }
}
