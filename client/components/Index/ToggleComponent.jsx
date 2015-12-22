import React from 'react';

export default class ToggleComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      on: false
    };
  }

  userHasClicked() {
    this.setState({on: !this.state.on})
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.on) {
      this.props.onToggleOn();
    } else {
      this.props.onToggleOff();
    }
  }

  render() {
    return (
      <button
        onClick={this.userHasClicked.bind(this)}>{this.props.children}</button>
    );
  }
}