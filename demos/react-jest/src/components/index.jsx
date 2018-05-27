import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  handleClick() {
    const count = this.state.count;
    this.setState({ count: count + 1 });

    this.props.onClick();
  }

  render() {
    return (
      <div className="plus-container">
        <span className="plus-count">{this.state.count}s</span>
        <button className="plus-button" onClick={() => this.handleClick()}> +1s</button>
      </div>
    );
  }
}

Button.defaultProps = {
  count: 0,
  onClick: () => false,
};

Button.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
};
