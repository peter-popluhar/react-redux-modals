import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {toggleELement} from './actions/actionCreator';


class App extends Component {



  render() {
    return (
      <div className="App">
       <button onClick={() => this.props.toggle()}>click</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleELement())
  }
};

export default connect(
    null,
    mapDispatchToProps
)(App);
