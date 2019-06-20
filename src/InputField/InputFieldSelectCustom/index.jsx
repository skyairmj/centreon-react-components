/* eslint-disable react/prop-types */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import styles from './input-field.scss';
import CustomIconWithText from '../../Custom/CustomIconWithText';
import IconToggleSubmenu from '../../Icon/IconToggleSubmenu';

class InputFieldSelectCustom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      allOptions: [],
      options: [],
      selected: {},
    };
  }

  componentWillMount() {
    const { value, options } = this.props;
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].id === value) {
        this.setState({
          selected: options[i],
        });
      }
    }
    if (options) {
      this.setState({
        options,
        allOptions: options,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value, options } = nextProps;
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].id === value) {
        this.setState({
          selected: options[i],
        });
      }
    }
    if (options) {
      this.setState({
        options,
        allOptions: options,
      });
    }
  }

  // eslint-disable-next-line
  UNSAFE_componentWillMount() {
    window.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  toggleSelect() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  searchTextChanged(e) {
    const searchString = e.target.value;
    const { allOptions } = this.state;
    this.setState({
      options: allOptions.filter((option) => {
        return (
          String(option.name)
            .toLowerCase()
            .indexOf(String(searchString).toLowerCase()) > -1
        );
      }),
    });
  }

  optionChecked(option) {
    const { onChange } = this.props;
    this.setState(
      {
        selected: option,
        active: false,
      },
      () => {
        if (onChange) {
          onChange(option.id);
        }
      },
    );
  }

  handleClickOutside(e) {
    if (!this.select || this.select.contains(e.target)) {
      return;
    }
    this.setState({
      active: false,
    });
  }

  focusInput(component) {
    const { allOptions } = this.state;
    if (component) {
      this.setState({
        options: allOptions,
      });
      findDOMNode(component).focus();
    }
  }

  render() {
    const { active, selected, options } = this.state;
    const { size, error, icons, domainPath } = this.props;
    return (
      <div
        className={classnames(
          styles['input-select'],
          styles[size || ''],
          styles[active ? 'active' : ''],
          error ? styles['has-danger'] : '',
        )}
        ref={(select) => {
          this.select = select;
        }}
      >
        <div className={classnames(styles['input-select-wrap'])}>
          {active ? (
            <input
              ref={this.focusInput}
              onChange={this.searchTextChanged}
              className={classnames(styles['input-select-input'])}
              type="text"
              placeholder="Search"
            />
          ) : (
            <span
              className={classnames(styles['input-select-field'])}
              onClick={this.toggleSelect.bind(this)}
            >
              {selected.name}
            </span>
          )}
          <IconToggleSubmenu
            iconPosition="icons-toggle-position-multiselect"
            iconType="arrow"
            onClick={this.toggleSelect.bind(this)}
          />
        </div>
        {active ? (
          <div className={classnames(styles['input-select-dropdown'])}>
            {options
              ? options.map((option) => {
                  return (
                    <React.Fragment>
                      {icons ? (
                        <CustomIconWithText
                          label={option.name}
                          onClick={this.optionChecked.bind(this, option)}
                          image={`${domainPath}/${option.preview}`}
                        />
                      ) : (
                        <span
                          onClick={this.optionChecked.bind(this, option)}
                          className={classnames(styles['input-select-label'])}
                        >
                          {option.name}
                        </span>
                      )}
                    </React.Fragment>
                  );
                })
              : null}
          </div>
        ) : null}
        {error ? (
          <div className={classnames(styles['form-error'])}>{error}</div>
        ) : null}
      </div>
    );
  }
}

export default InputFieldSelectCustom;
