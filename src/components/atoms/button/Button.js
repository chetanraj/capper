import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import {
  Types as ButtonTypes,
  Sizes as ButtonSizes
} from '../../../utils/Everything';
import './Button.scss';

export default class Button extends Component {
  getButtonClasses() {
    const { icon, label, size, type } = this.props;
    const buttonClasses = ['button', `button-${size}`, `button-${type}`];
    if (icon && label) {
      buttonClasses.push('button-icon');
    } else if (icon && !label) {
      buttonClasses.push('button-only-icon');
    }

    return buttonClasses.join(' ');
  }

  render() {
    const { disabled, icon, label, color, onClick } = this.props;

    return (
      <button
        className={this.getButtonClasses()}
        onClick={event => onClick(event.target)}
        disabled={disabled}>
        {icon && <Icon color={color} icon={icon} />}
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  label: '',
  onClick: () => console.log('No click handler specified'),
  type: ButtonTypes.DEFAULT,
  size: ButtonSizes.MEDIUM,
  icon: '',
  disabled: false
};
