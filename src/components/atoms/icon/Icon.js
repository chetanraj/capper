import React, { Component } from 'react';
import PropTypes from 'prop-types';
import feather from 'feather-icons';

export default class Icon extends Component {
  getIcon(icon, color) {
    if (icon) {
      let element = React.createElement(
        'span',
        [],
        feather.icons[icon].toSvg({ color })
      );
      return element.props.children;
    }
  }

  render() {
    const { icon, color } = this.props;
    return (
      <i
        className="icon"
        dangerouslySetInnerHTML={{ __html: this.getIcon(icon, color) }}
      />
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
};

Icon.defaultProps = {
  color: '#000'
};
