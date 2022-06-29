import React from "react";

const Empty = ({ empty }) => {
  return (
    <p className="notes-list__empty-message">Tidak Ada Catatan Yang {empty}</p>
  );
};

export default Empty;
