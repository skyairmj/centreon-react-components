/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import classnames from 'classnames';
import IconEdit from '../MaterialComponents/Icons/IconEdit';
import styles from './multi-select-holder.scss';

class InputFieldMultiSelectEmpty extends React.Component {
  state = {
    isHovered: false,
  };

  toggleHover = () => {
    const { isHovered } = this.state;
    this.setState({
      isHovered: !isHovered,
    });
  };

  render() {
    const {
      isEmpty,
      multiSelectCount,
      multiSelectLabel,
      children,
      error,
    } = this.props;
    const { isHovered } = this.state;
    return (
      <div
        className={classnames(
          styles['multi-select-holder'],
          isEmpty ? styles['multi-select-holder-empty'] : '',
          error ? styles['has-danger'] : '',
        )}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
      >
        {multiSelectLabel && multiSelectCount && (
          <span className={classnames(styles['multi-select-holder-label'])}>
            {`${multiSelectLabel} (${multiSelectCount})`}
          </span>
        )}
        <div className={classnames(styles['multi-select-holder-inner'])}>
          {isEmpty && (
            <React.Fragment>
              <span className={classnames(styles['multi-select-holder-add'])}>
                + Click to link an extra indicators time periods
              </span>
            </React.Fragment>
          )}
          {children}
          {isHovered ? <IconEdit /> : null}
        </div>
        {error ? (
          <div className={classnames(styles['form-error'])}>{error}</div>
        ) : null}
      </div>
    );
  }
}

export default InputFieldMultiSelectEmpty;
