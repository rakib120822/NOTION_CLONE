import React, { useEffect } from "react";
import { useState } from "react";
import Popup from "./Popup";
import MenuCard from "./MenuCard";
import NotepadLandingPage from "./NotepadLandingPage";
import TextEditor from "./TextEditor";

function NotePad() {
  let initialData = [
    {
      title: "LNG FUNDAMENTALS ",
      id: 123,
      topic: "Liquification",
      content:
        "the lean gas living the NGL recovery unit. Enter the liquification unit that chills and liquifies the gas in a refrigeration process",
    },
  ];

  let [data, setData] = useState(initialData || []);
  let [close, setClose] = useState(false);
  let [isCreate, setCreate] = useState(false);
  let [isOpen, setOpen] = useState(false);
  let [textEditorItem, setTextEditorItem] = useState("");

  const sideBarToggle = () => {
    setClose(!close);
  };

  const createFile = () => {
    setCreate(true);
  };

  const handleFileOpen = (item) => {
    setTextEditorItem(item);
    setOpen(true);
  };

  return (
    <>
      {isCreate ? (
        <Popup setCreate={setCreate} setData={setData} />
      ) : (
        <div className="flex">
          <button
            className={`${
              close ? "block" : "hidden"
            } absolute left-4 text-[1.875rem]`}
            onClick={sideBarToggle}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <aside
            className={`flex flex-col bg-gray-100 w-[20%] py-2.5 px-1.5  min-h-[100vh] ${
              close ? "hidden" : "block"
            }`}
          >
            <div className=" flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/person.jpg"
                  alt="image"
                  className="w-[50px] rounded-[50%]"
                />

                <h2 className="font-semibold text-[1.25rem]">Rakib</h2>
              </div>

              <button className="text-[1.5rem]" onClick={sideBarToggle}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className=" mt-[40px]">
              {data?.map((item) => {
                const name = item.title;
                return (
                  <div key={item.id} onClick={() => handleFileOpen(item)}>
                    <MenuCard title={name} id={item.id} setData={setData} />
                  </div>
                );
              })}
            </div>
          </aside>
          {isOpen ? (
            <TextEditor
              textEditorItem={textEditorItem}
              setData={setData}
              data={data}
              setOpen={setOpen}
            />
          ) : (
            <NotepadLandingPage
              createFile={createFile}
              className="h-full resize-none "
            />
          )}
        </div>
      )}
    </>
  );
}

export default NotePad;
