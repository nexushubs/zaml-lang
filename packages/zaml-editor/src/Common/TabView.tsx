import React from 'react';
import classNames from 'classnames';
import './TabView.scss';

interface Props {
  tabs: string[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export default class TabView extends React.Component<Props> {

  render() {
    const { tabs, selectedTab, onTabChange, children } = this.props
    return (
      <div className="tab-view">
        <ul className="tabs">
          {tabs.map(tab => (
            <li
              key={tab}
              className={classNames('tab', { selected: tab === selectedTab })}
              onClick={() => onTabChange(tab)}
            >
              <span className="label">{tab}</span>
            </li>
          ))}
        </ul>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}
