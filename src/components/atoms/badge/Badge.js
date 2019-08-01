import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Types } from '../../../utils/Everything';
import { Colors } from '../../../tokens/colors';

const getBGColor = ({ type }) => {
  return Colors[type.toUpperCase()];
};

const getColor = ({ type }) => {
  return type === Types.DEFAULT ? Colors.DARK : Colors.WHITE;
};

const StyledBadge = styled.span`
  font-size: 13px;
  border-radius: 20px;
  padding: 4px 8px;
  color: ${getColor}
  background-color: ${getBGColor};
`;

const Badge = props => {
  const { type, children } = props;

  const getButtonClasses = type => {
    const badgeClasses = ['badge', `badge-${type}`];
    return badgeClasses.join(' ');
  };

  return (
    <StyledBadge type={type} className={getButtonClasses(type)}>
      {children}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  type: Types.DEFAULT
};

Badge.propTypes = {
  type: PropTypes.string.isRequired
};

export default Badge;
