import React from "react";

function NotepadLandingPage({ createFile }) {
  return (
    <div
      className={` ${close ? "w-[95%]" : "w-[80%] "} flex
          flex-col justify-center items-center p-[50px]`}
    >
      <img src="/readingBook.jpg" alt="image" className="w-[300px]" />
      <span className="my-5">
        <button
          className=" border border-black px-1.5 py-3 rounded-2xl"
          onClick={createFile}
        >
          Create a Documents
        </button>
      </span>
    </div>
  );
}

export default NotepadLandingPage;
