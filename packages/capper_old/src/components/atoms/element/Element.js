import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, color, opacity } from 'styled-system';

const Component = styled('div')(compose(color, opacity));

const Element = props => {
  const { as, children } = props;

  return (
    <Component {...props} as={as}>
      {children}
    </Component>
  );
};

Element.defaultProps = {
  as: 'div'
};

Element.propTypes = {
  as: PropTypes.string.isRequired
};

export default Element;
