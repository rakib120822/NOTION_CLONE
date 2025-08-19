import { useState } from "react";

function MenuCard({ title, id, setData }) {
  const handleDelete = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <div className="flex  justify-between items-center py-1 px-1.5 px-0.5 mb-4 border border-black-500">
      <div className="flex gap-2">
        <span>
          <i className="fa-solid fa-file"></i>
        </span>
        <h2>{title.length > 6 ? title.slice(0, 7) + "...." : title}</h2>
      </div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default MenuCard;
