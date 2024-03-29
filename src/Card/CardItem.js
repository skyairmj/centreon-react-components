/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './card.scss';

class CardItem extends Component {
  render() {
    const {
      children,
      itemBorderColor,
      itemFooterColor,
      itemFooterLabel,
      customClass,
      style,
    } = this.props;
    const cnCardItem = classnames(
      styles['card-item'],
      {
        [styles[`card-item-bordered-${itemBorderColor || ''}`]]: true,
      },
      styles[customClass || ''],
    );
    const cnCardItemFooter = classnames(styles['card-item-footer'], {
      [styles[`card-item-footer-${itemFooterColor || ''}`]]: true,
    });

    return (
      <div className={cnCardItem} style={style}>
        {children}
        <span className={cnCardItemFooter}>{itemFooterLabel}</span>
      </div>
    );
  }
}

export default CardItem;
