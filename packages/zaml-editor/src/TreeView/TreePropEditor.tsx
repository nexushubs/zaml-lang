import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as zaml from '@zaml/parser';
import './TreePropEditor.scss';
import TabView from '../Common/TabView';
import { KeyValueMap } from '@zaml/parser/typings/Node';

interface Props {
  node?: zaml.Node;
  onChange: (node: zaml.Node) => void;
}

interface State {
  selectedTab?: string;
  editingIndex: number;
  inlineError: string;
}

enum Tab {
  Labels = 'Labels',
  Attributes = 'Attributes',
  Metadata = 'Metadata',
}

const tabs = _.values(Tab);
const defaultTab = tabs[0];
const defaultEditingIndex = -1;

export default class TreePropEditor extends React.Component<Props, State> {

  static propTypes = {
    node: PropTypes.instanceOf(zaml.Node),
  };

  static defaultProps: Props = {
    onChange: () => {},
  };

  state = {
    selectedTab: defaultTab,
    editingIndex: defaultEditingIndex,
    inlineError: '',
  };

  editingElement: HTMLInputElement | null = null;

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.node !== this.props.node) {
      this.setState({
        selectedTab: defaultTab,
        editingIndex: defaultEditingIndex,
      });
    }
  }

  renderValue(value: any) {
    if (value instanceof zaml.Node) {
      return value.toSource();
    } else {
      return JSON.stringify(value);
    }
  }

  renderEmptyTip() {
    return (
      <div className="select-tip">Please select a node</div>
    )
  }

  renderTabContent() {
    const { node } = this.props;
    const { selectedTab } = this.state;
    if (!node) {
      return this.renderEmptyTip();
    }
    switch(selectedTab) {
      case Tab.Labels:
        return this.renderLabelEditor(node);
      case Tab.Attributes:
        return this.renderAttributeEditor(node, node.attributes);
      case Tab.Metadata:
        return this.renderAttributeEditor(node, node.metadata);
    }
  }

  focusEditingElement() {
    if (this.editingElement) {
      this.editingElement.focus();
      this.editingElement.select();
    }
  }

  handleLabelEdit(index: number) {
    this.setState({ editingIndex: index }, () => {
      this.focusEditingElement();
    });
  }

  handleLabelUpdate(label: string) {
    const { node, onChange } = this.props;
    const { editingIndex } = this.state;
    if (!node) return;
    const originalLabel = node.labels[editingIndex] || '';
    if (label !== originalLabel) {
      try {
        zaml.parse(`{INLINE #${label}}TESTING{/INLINE}`);
      } catch (e) {
        this.setState({ inlineError: 'Invalid label'});
        return;
      }
      if (editingIndex === node.labels.length) {
        node.addLabel(label);
      } else {
        if (label === '' || node.labels.indexOf(label) >= 0) {
          node.removeLabel(originalLabel);
        } else {
          node.labels[editingIndex] = label;
        }
      }
    }
    this.cancelLabelEditing();
    onChange(node);
  }

  cancelLabelEditing() {
    this.setState({
      editingIndex: defaultEditingIndex,
      inlineError: '',
    });
  }
  
  renderLabelEditor(node: zaml.Node) {
    const { editingIndex, inlineError } = this.state;
    const labels = [...node.labels, ''];
    return (
      <div className="label-editor">
        <table>
          <tbody>
          {labels.map((label, i) => (
            <tr
              key={label}
              className={classNames({ error: i === editingIndex && inlineError })}
            >
              <td className="marker">{label || i === editingIndex ? '#': ''}</td>
              {i === editingIndex ?
                <td>
                  <input
                    ref={ref => this.editingElement = ref}
                    defaultValue={label}
                    onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                      this.handleLabelUpdate(event.currentTarget.value);
                    }}
                    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                      if (event.key === 'Enter') {
                        this.handleLabelUpdate(event.currentTarget.value);
                      } else if (event.key === 'Escape') {
                        this.cancelLabelEditing();
                      }
                    }}
                  />
                </td>
              :
                <td
                  className="editable"
                  onClick={() => this.handleLabelEdit(i)}
                >
                  {label}
                </td>
              }
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderAttributeEditor(node: zaml.Node, props: KeyValueMap) {
    const keys = Object.keys(props);
    return (
      <div className="attribute-editor">
        <table>
          <tbody>
            {keys.map(key => (
              <tr key={key}>
                <th>{key}</th>
                <td>{this.renderValue(props[key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <div className="zaml-prop-editor">
        <TabView
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={(tab: string) => this.setState({ selectedTab: tab })}
        >
          {this.renderTabContent()}
        </TabView>
      </div>
    )
  }
}
