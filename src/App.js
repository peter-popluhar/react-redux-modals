import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './App.css';
import {connect} from "react-redux";
import {toggleELement, toggleModal} from './actions/actionCreator';


ReactModal.setAppElement('#root');
class App extends Component {

  toggleModal = () => {
    this.props.togglemodal()
  }

  render() {

    return (
      <div className="App">
         <button onClick={this.toggleModal}>click modal</button>
         <button onClick={this.toggleModal}>click modal</button>

        <ReactModal
            isOpen={this.props.showModal}
            contentLabel="Minimal Modal Example"
        >
          <button onClick={() => this.props.togglemodal()}>Close Modal</button>
          test
        </ReactModal>

        <test />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleELement()),
    togglemodal: () => dispatch(toggleModal())
  }
};

const mapStateToProps = (state) => ({
  showModal: state.ToggleModal.showModal,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
