import React from "react";
import Empty from "./Empty";
import NotesItem from "./NotesItem";

const ActiveNotes = ({ notes, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => note.archived === false);

  return (
    <>
      <h2>Catatan Aktif</h2>
      {activeNotes.length === 0 ? (
        <Empty empty={"Aktif"} />
      ) : (
        <div className="notes-list">
          {activeNotes.map((note, idx) => {
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

export default ActiveNotes;
