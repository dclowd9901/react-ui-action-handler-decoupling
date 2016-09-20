import React from 'react';
import { shouldPerformAction, shouldPerformOtherAction } from './UIActionComponent.jsx';
import ToggleComponent from './ToggleComponent.jsx';

export default class IndexComponent extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    var uiActionComponent = new UIActionComponent();

    return (
      <section>
        <h2>react-webpack-boilerplate</h2>
        <ul ref="indexList" className="index-list">
          {this.props.items.map((item, index) => {
            return (<li key={index}>item {item}</li>);
          })}
        </ul>
        <ToggleComponent
          onToggleOn={shouldPerformAction}
          onToggleOff={shouldPerformOtherAction}
          >Click me</ToggleComponent>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};
