import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from 'styled-system';

import { HeadingFontSizes as Sizes } from '../../../utils/Everything';

const color = style({
  prop: 'color',
  cssProperty: 'color',
  key: 'color'
});

const getFontSize = ({ size }) => {
  return Sizes[size];
};

const StyledHeading = styled.h1`
  ${color};
  font-size: ${getFontSize};
`;

export default class Heading extends Component {
  render() {
    const { size, label, color } = this.props;
    return (
      <StyledHeading as={`h${size}`} color={color} size={size}>
        {label}
      </StyledHeading>
    );
  }
}

Heading.defaultProps = {
  size: 1,
  color: '#222'
};

Heading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};
