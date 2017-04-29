// @flow
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class Home extends Component {
  render() {
    return (
      <RaisedButton label="Default" />
    );
  }
}
