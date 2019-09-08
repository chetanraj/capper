import React from 'react';
import styled, { css } from 'styled-components';

const Flex = props => {
  const { children, wrap } = props;

  const StyledFlex = styled.div`
    display: flex;
    align-items: ${props.align};
    justify-content: ${props.justify};
    ${props =>
      props.wrap &&
      css`
        flex-wrap: wrap;
      `};
  `;

  const StyledFlexChild = styled.div`
    margin-right: 0.3em;
  `;

  return (
    <StyledFlex {...props}>
      {React.Children.map(children, child => {
        return <StyledFlexChild>{child}</StyledFlexChild>;
      })}
    </StyledFlex>
  );
};

export default Flex;
