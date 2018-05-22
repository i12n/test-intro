import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count }) => <span className="plus-count">{count}s</span>;

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
        { /* <Counter count={this.state.count} /> */ }
        <span className="plus-count">{this.state.count}s</span>
        <button className="plus-button" onClick={() => this.handleClick()}> +1s</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

Counter.propTypes = {
  count: PropTypes.number,
};

Button.defaultProps = {
  count: 0,
  onClick: () => false,
};

Button.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
};
