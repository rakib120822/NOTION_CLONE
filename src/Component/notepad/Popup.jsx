import React, { useState } from "react";

export default function Popup({ setCreate, setData }) {
  let [title, setTitle] = useState("");
  let [topic, setTopic] = useState("");
  let [id, setId] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleTopicInput = (e) => {
    setTopic(e.target.value);
  };
  const handleIdInput = (e) => {
    setId(e.target.value);
  };
  const createFile = () => {
    const newData = { title: title, topic: topic, id: id };
    setData((data) => [...data, newData]);
    setCreate(false);
  };
  return (
    <div className="border border-green-500 w-[350px]  p-10 absolute top-[35%] left-[35%] text-center">
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-blue-800 col-span-3 pl-2"
          value={title}
          onChange={handleTitleInput}
        />
        <input
          type="text"
          placeholder="Topic"
          className="border border-blue-800 col-span-2 pl-2"
          value={topic}
          onChange={handleTopicInput}
        />
        <input
          type="number"
          placeholder="Id"
          className="border border-blue-800 col-span-1 pl-2"
          value={id}
          onChange={handleIdInput}
        />
      </div>
      <span>
        <button
          className="border border-black px-4 py-2 mt-5 rounded-xl text-center"
          onClick={createFile}
        >
          Done
        </button>
      </span>
    </div>
  );
}
