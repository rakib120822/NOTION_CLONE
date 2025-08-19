import React, { useEffect, useState } from "react";

function TextEditor({ textEditorItem, setData, data, setOpen }) {
  let [text, setText] = useState();

  useEffect(() => {
    if (textEditorItem?.content) {
      setText(textEditorItem.content);
    }
  }, [textEditorItem]);
  const handleTextEditor = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (data) => {
    textEditorItem.content = text;
    setData(() => [...data]);
    setOpen(false);
  };
  return (
    <div className="h-screen w-[95%] ml-auto relative">
      <textarea
        name="content"
        className="w-full h-full border-2 resize-none border-amber-800 p-10"
        value={text}
        placeholder="Write Here...."
        onChange={handleTextEditor}
      ></textarea>
      <button
        className="border-2 border-black-800 rounded-2xl px-5 py-4 absolute bottom-10 right-15"
        onClick={() => handleSubmit(data)}
      >
        Submit
      </button>
    </div>
  );
}

export default TextEditor;
