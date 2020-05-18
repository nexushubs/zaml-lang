import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface Props {
  title: string;
  className: string;
}

export default class Pane extends React.Component<Props> {

  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps: Props = {
    title: 'pane',
    className: '',
  }

  render() {
    const { title, className, children } = this.props;
    return (
      <div className={classNames('pane', className)}>
        <div className="pane-title"><h2>{title}</h2></div>
        <div className="pane-content">
          {children}
        </div>
      </div>
    );
  }
}
