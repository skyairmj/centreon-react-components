/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';

class DynamicComponentPosition extends Component {
  state = {
    comp: false,
    componentLoaded: false,
  };

  componentWillReceiveProps = (nextProps) => {
    const { componentName } = nextProps;
    if (componentName !== this.props.componentName) {
      document.removeEventListener(
        `component${this.props.componentName}Loaded`,
        this.setComponentLoaded,
      );
      document.addEventListener(
        `component${componentName}Loaded`,
        this.setComponentLoaded,
      );
    }
  };

  componentWillMount = () => {
    if (this.props.componentName) {
      document.addEventListener(
        `component${this.props.componentName}Loaded`,
        this.setComponentLoaded,
      );
    }
  };

  setComponentLoaded = () => {
    const { componentName } = this.props;
    this.setState({
      comp: window[componentName],
      componentLoaded: true,
    });
  };

  componentWillUnmount = () => {
    const { componentName } = this.props;
    document.removeEventListener(
      `component${componentName}Loaded`,
      this.setComponentLoaded,
    );
  };

  render() {
    const { comp } = this.state;
    const Comp = comp || React.Fragment;
    return <Comp />;
  }
}

export default DynamicComponentPosition;
