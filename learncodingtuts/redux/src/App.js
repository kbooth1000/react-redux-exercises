import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {updateUser, apiRequest } from './actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    this.props.onApiRequest();
  }

onUpdateUser(event) {
  this.props.onUpdateUser(event.target.value);
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
};
let mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp:  `${state.user} ${props.aRandomProp}`
  }
};

let mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};



export default connect(mapStateToProps, mapActionsToProps)(App);
