import React from "react";

const Navbar = ({ onSearch }) => {
  return (
    <div className="note-app__header">
      <h1>rdy Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan saya"
          onChange={(event) => onSearch(event)}
        />
      </div>
    </div>
  );
};

export default Navbar;
