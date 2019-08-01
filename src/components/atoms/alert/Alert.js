import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { color } from 'styled-system';
import { Colors } from '../../../tokens/colors';

const StyledAlert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  ${color};
  background: ${props => props.theme[props.type.toUpperCase()]};
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0.75;
  color: #fff;
  text-shadow: 0 1px 0 #fff;
  border: 0;
  background: transparent;
`;

const StyledAlertDismiss = styled(StyledAlert)`
  padding-right: 3em;
`;

export default class Alert extends Component {
  render() {
    const { type, color, children, dismiss } = this.props;

    const classes = classNames('alert', `alert-${type}`, {
      'alert-dismiss': dismiss
    });

    const Alert = dismiss ? StyledAlertDismiss : StyledAlert;

    return (
      <ThemeProvider theme={Colors}>
        <Alert color={color} type={type} className={classes}>
          {children}
          {dismiss ? (
            <Button onClick={dismiss}>
              <span>&times;</span>
            </Button>
          ) : null}
        </Alert>
      </ThemeProvider>
    );
  }
}

Alert.defaultProps = {
  type: 'default'
};

Alert.propTypes = {
  type: PropTypes.string
};
