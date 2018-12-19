import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Editor.css';

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

  constructor(props: Props) {
    super(props);
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
