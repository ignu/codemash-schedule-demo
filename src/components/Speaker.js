import React, { Component } from 'react';

export default class Speaker extends Component {
  render () {
    const name = `${this.props.FirstName} ${this.props.LastName}`;

    return (
      <div>
        <img alt="speaker" src={ this.props.GravatarUrl } />
        <div>{ name }</div>
      </div>
    );
  }
}
