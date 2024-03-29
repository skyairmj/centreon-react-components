/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../global-sass-files/_containers.scss';

class ExtensionsWrapper extends Component {
  render() {
    const { children, style } = this.props;
    return (
      <div style={style} className={classnames(styles['content-wrapper'])}>
        {children}
      </div>
    );
  }
}

export default ExtensionsWrapper;
