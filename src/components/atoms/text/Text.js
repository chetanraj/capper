import styled from 'styled-components';
import { compose, color, shadow, typography } from 'styled-system';

const Text = styled.div(
  compose(
    color,
    shadow,
    typography
  )
);

export default Text;
