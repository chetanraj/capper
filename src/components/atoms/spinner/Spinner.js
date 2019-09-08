import React from 'react';
import styled from 'styled-components';
import { layout } from 'styled-system';

import { Colors } from '../../../tokens/colors';

const sizes = {
  tiny: '0.75rem',
  medium: '1.5rem',
  large: '2rem'
};

const StyledSpinner = styled.svg`
  ${layout}
  animation: rotate 2s linear infinite;
  width: 2rem;
  height: 2rem;

  & .path {
    stroke: ${props => (props.color ? props.color : Colors.DEFAULT)};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Spinner = props => (
  <StyledSpinner {...props} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth={props.thickness}
    />
  </StyledSpinner>
);

Spinner.defaultProps = {
  thickness: 2
};

export default Spinner;
