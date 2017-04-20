import React, { Component } from 'react';
import Input from '../src';
import '../assets/index.scss';


export default class Simple extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <div><Input onChange={this.onChange} type="textarea" defaultValue={'hello world'} disabled /></div>
        <br />
        <div><Input className="hello" autoFocus onChange={this.onChange} type="textarea" defaultValue={'hello world'} /></div>
        <div>{this.state.value}</div>
      </div>
    );
  }
}
