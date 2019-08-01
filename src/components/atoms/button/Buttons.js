import styled from 'styled-components';
import {
  compose,
  border,
  color,
  shadow,
  space,
  typography
} from 'styled-system';

const Buttons = styled.div(
  compose(
    border,
    color,
    shadow,
    space,
    typography
  )
);

export default Buttons;
