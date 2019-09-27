import React, { Component } from "react";
import Note from "./Note";
import "../css/Board.css";
import { userService } from "../Backend/Backend";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    console.log(userService.FetchNotes(localStorage.getItem("username")));
    //this.setState({userService.FetchNotes(localStorage.getItem("username"))});

    // var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
    // var result = Object.keys(notes).map(function(key) {
    //   return [Number(key), notes[key]];
    //  });

    // console.log(result);
    //this.setState({
    // notes:
    //});
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map(note => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  deleteHandler={this.deleteNote.bind(this)}
                  title={note.title}
                  body={note.body}
                />
              );
            })}
          </div>
        </div>
        <div>
          <button
            className="btn btn-success add-button"
            onClick={this.addNote.bind(this)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }

  addNote({}) {
    this.state.notes.push({
      id: Date.now()
    });
    this.setState({
      notes: this.state.notes
    });
  }

  deleteNote(id) {
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index, 1);
      }
    });
    this.setState({
      notes: newNoteArr
    });
  }
}

export default Board;
