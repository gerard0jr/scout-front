import React, { Component } from 'react'
import Login from './sections/Login';
import Roles from './sections/Roles';

export default class Landing extends Component {
    handleSubmit = () => {

    }

    handleChange = e => {

    }

  render() {
    return (
      <div>
        <Login/>
        <Roles/>
      </div>
    )
  }
}
