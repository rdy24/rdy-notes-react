import React from "react";
import { getInitialData } from "../utils";
import ActiveNotes from "./ActiveNotes";
import NotesInput from "./NotesInput";
import NotesArchive from "./NotesArchive";
import Navbar from "./Navbar";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: getInitialData(),
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
        searchNotes: prevState.searchNotes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const searchNotes = this.state.searchNotes.filter((note) => note.id !== id);
    this.setState({
      notes: notes,
      searchNotes: searchNotes,
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
        searchNotes: [
          ...prevState.searchNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState((prevState) => {
      return {
        searchNotes: prevState.notes.filter((note) =>
          note.title.toLowerCase().includes(event.target.value.toLowerCase())
        ),
      };
    });
  }

  render() {
    return (
      <>
        <Navbar onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NotesInput addNote={this.onAddNoteHandler} />
          <ActiveNotes
            notes={this.state.searchNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <NotesArchive
            notes={this.state.searchNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
