/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: 400,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 13,
    padding: '6px 24px 6px 16px',
  },
};

export default withStyles(styles)(TableCell);
