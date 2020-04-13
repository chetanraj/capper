import React, { Component } from 'react';
import styled from 'styled-components';
import { typography, color } from 'styled-system';

const StyledHeading = styled.h1(typography, color);
export default class Heading extends Component {
  render() {
    const { children, size } = this.props;
    return (
      <StyledHeading {...this.props} as={`h${size}`}>
        {children}
      </StyledHeading>
    );
  }
}
