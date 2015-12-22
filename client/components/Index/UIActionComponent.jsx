import React from 'react';

export default class UIActionComponent extends React.Component {

  shouldPerformAction(param) {
    console.log('performing action');
  }

  shouldPerformOtherAction(param) {
    console.log('performing other action');
  }
}