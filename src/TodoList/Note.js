import React, { Component } from "react";
import { userService } from "../Backend/Backend";
//import { createStore } from 'redux';
//import noteReducer from '../reducers/NoteReducer';
//import {updateNoteBody,updateNoteTitle} from '../actions/NoteActions';
import "../css/Note.css";

class Note extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      id: null,
      title: this.props.title,
      body: this.props.body,
      editMode: false,
      finishedMode: true
    });
  }

  render() {
    let titleElement, bodyElement, buttonArea, finishCheck;
    if (this.state.editMode) {
      titleElement = (
        <textarea
          ref="titleContent"
          className="title-textarea"
          defaultValue={this.state.title}
        />
      );
      bodyElement = (
        <textarea
          ref="bodyContent"
          className="body-textarea"
          defaultValue={this.state.body}
        />
      );
      buttonArea = (
        <div>
          <button
            className="btn btn-primary"
            onClick={this.handleSave.bind(this)}
          >
            Save
          </button>
        </div>
      );
    } else {
      titleElement = <h5>{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>;
      if (this.state.finishedMode) {
        buttonArea = (
          <div>
            <button
              className="btn btn-info"
              onClick={this.handleEdit.bind(this)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={this.handleDelete.bind(this)}
            >
              Delete
            </button>
            <button onClick={this.handleFinish.bind(this)}>unfinish</button>
          </div>
        );
      } else {
        buttonArea = (
          <div>
            <button
              className="btn btn-info"
              onClick={this.handleEdit.bind(this)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={this.handleDelete.bind(this)}
            >
              Delete
            </button>
            <button onClick={this.handleFinish.bind(this)}>finish</button>
          </div>
        );
      }
    }
    if (this.state.finishedMode) {
      finishCheck = <div>done:✔</div>;
    } else {
      finishCheck = <div>done:</div>;
    }

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {titleElement}
            {bodyElement}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }

  handleFinish() {
    this.setState({
      finishedMode: !this.state.finishedMode
    });
  }

  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleDelete() {
    var titleVal = this.refs.titleContent.value;
    var user = localStorage.getItem("username");
    userService.DeleteNote(user, titleVal);
    //  userService.DeleteNote();
    this.props.deleteHandler(this.props.id);
  }

  handleSave() {
    var user = localStorage.getItem("username");
    console.log(user);
    //var idVal = this.state.id;
    var titleVal = this.refs.titleContent.value;
    var bodyVal = this.refs.bodyContent.value;
    userService.PostNote(user, titleVal, bodyVal);
    this.setState({
      title: titleVal,
      body: bodyVal,
      editMode: false
    });
  }
}

export default Note;
