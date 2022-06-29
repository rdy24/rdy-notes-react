import React from "react";
import Empty from "./Empty";
import NotesItem from "./NotesItem";

const NotesArchive = ({ notes, onDelete, onArchive }) => {
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <>
      <h2>Arsip</h2>
      {archivedNotes.length === 0 ? (
        <Empty empty={"Diarsipkan"} />
      ) : (
        <div className="notes-list">
          {archivedNotes.map((note, idx) => {
            return (
              <NotesItem
                key={idx}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default NotesArchive;
