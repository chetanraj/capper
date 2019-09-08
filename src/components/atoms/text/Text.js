import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Dracula } from 'theme-packer';
import { color } from 'styled-system';

const TextS = styled.div`
  font-size: 1em;
  ${color}
`;
export default class Text extends Component {
  render() {
    return (
      <ThemeProvider theme={Dracula}>
        <TextS bg="background" color="text">
          Text component here
        </TextS>
      </ThemeProvider>
    );
  }
}
