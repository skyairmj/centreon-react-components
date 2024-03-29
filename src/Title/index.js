/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react';
import classnames from 'classnames';
import styles from './custom-title.scss';

const Title = ({
  icon,
  label,
  title,
  titleColor,
  customTitleStyles,
  onClick,
  style,
  labelStyle,
  children,
}) => (
  <div
    className={classnames(
      styles['custom-title'],
      customTitleStyles ? styles['custom-title-styles'] : '',
    )}
    onClick={onClick}
    style={style}
  >
    {icon ? (
      <span
        className={classnames(styles['custom-title-icon'], {
          [styles[`custom-title-icon-${icon}`]]: true,
        })}
      />
    ) : null}
    <div className={styles['custom-title-label-container']}>
      <span
        className={classnames(
          styles['custom-title-label'],
          styles[titleColor || ''],
        )}
        style={labelStyle}
        title={title || label}
      >
        {label}
      </span>
      {children}
    </div>
  </div>
);

export default Title;
