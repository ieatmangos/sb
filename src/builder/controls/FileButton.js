import React, { useEffect, useState } from "react";
import { useFirebase } from "../../firebase/FirebaseContext";
import { renderConfirm } from "../assets";

const FileButton = ({ items, selected, setSelected }) => {
  const firebase = useFirebase();
  const [saveName, setSaveName] = useState("");

  // Toggle Value
  const [showOptions, setShowOptions] = React.useState(false);
  // State Machine
  const [stateMachine, setStateMachine] = useState("");

  const saveOrDelete = (i, e) => {
    switch (i) {
      case "DELETE":
        setStateMachine("DELETE");
        deleteFromFirebase(e);
        break;
      case "SAVE":
        saveToFirebase(e);
        break;
      default:
        return;
    }
  };

  // make saveName match the Selected name
  useEffect(() => {
    if (selected !== undefined) {
      localStorage.setItem("savename", JSON.stringify(selected));
      setSaveName(selected);
    }
  }, [selected]);

  function saveNewToFirebase() {
    if (saveName === "select to load") {
      alert("You need to enter a name first");
    } else {
      let confirm = renderConfirm(saveName, "override");
      if (confirm) {
        const itemsWithoutComponents = [
          { id: "2000", label: "MenuV1", tag: "Menu" },
          { id: "2001", label: "FooterV1", tag: "Footer" }
        ];
        firebase.items().update({ [saveName]: itemsWithoutComponents });
        localStorage.setItem("selected", JSON.stringify(saveName));
        setSelected(saveName);
        setShowOptions(false);
      }
    }
    setStateMachine("");
  }

  function saveToFirebase() {
    if (saveName === "select to load") {
      alert("You need to enter a name first");
    } else {
      // firebase cant take the functions so we remove them
      const itemsWithoutComponents = items.map((i) => {
        return {
          id: i.id,
          label: i.label,
          tag: i.tag,
          data: i.data || {}
        };
      });
      stateMachine === "RENAME" && firebase.items().update({ [selected]: {} });
      firebase.items().update({ [saveName]: itemsWithoutComponents });
      localStorage.setItem("selected", JSON.stringify(saveName));
      setSelected(saveName);
      setShowOptions(false);
    }
    setStateMachine("");
  }

  function deleteFromFirebase(e) {
    e.preventDefault();
    if (!saveName.length) {
      alert("Nothing to delete");
    } else {
      let confirmed = renderConfirm(selected, "delete");
      if (confirmed) {
        firebase.items().update({ [selected]: {} });
        setSelected([]);
      }
    }
  }

  const takeInputValues = (e) => {
    localStorage.setItem("savename", JSON.stringify(e));
    setSaveName(e);
  };

  // Effect to handle hide/show of editable name space
  const focusRef = React.useRef();
  React.useEffect(() => {
    if (
      stateMachine === "SAVENEW" ||
      stateMachine === "CREATENEW" ||
      stateMachine === "RENAME"
    ) {
      focusRef.current.focus();
      focusRef.current.select();
    }
  }, [focusRef, stateMachine]);

  // Bool
  const showInputs =
    stateMachine === "SAVENEW" ||
    stateMachine === "CREATENEW" ||
    stateMachine === "RENAME";

  return (
    <div
      id="file-button"
      tabIndex="0"
      // onBlur={() => setShowOptions(false)}
      className="z-50 relative w-full flex items-center text-gray-600  "
    >
      <div className="flex"
      
      >
        <div
          className="cursor-pointer flex items-center text-sb-teal "
          onClick={() => setShowOptions(!showOptions)}
        >
          <p>{`FILE`}</p>
          <p className="ml-2 mb-2">&#8964;</p>
        </div>
        {showInputs && (
          <input
            ref={focusRef}
            type="text"
            name="name"
            onBlur={() => setStateMachine("")}
            className="w-full px-3 outline-none bg-transparent text-gray-600 border-b border-black"
            placeholder={`${stateMachine === "RENAME" ? selected : ""} ${
              stateMachine === "SAVENEW" ? selected + " (copy)" : ""
            } `}
            onChange={(e) => takeInputValues(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                if (stateMachine === "CREATENEW") {
                  saveNewToFirebase(event);
                } else saveToFirebase(event);
              }
            }}
          />
        )}
      </div>
      {showOptions && (
        <div       
        className="absolute top-0 left-0  mt-12 shadow-lg ">
          <div className="cursor-pointer flex flex-col">
            <button
              className="py-3 px-6 bg-white hover:text-sb-teal text-left cursor-pointer"
              onClick={(e) => setStateMachine("CREATENEW")}
            >
              Create New Layout
            </button>
            {items.length > 0 && (
              <div className='flex flex-col '>
                <button
                  className="py-3 px-6 bg-white hover:text-sb-teal text-left cursor-pointer"
                  onClick={() => saveOrDelete("SAVE")}
                >
                  Save Current Layout
                </button>
                <button
                  className="py-3 px-6 bg-white hover:text-sb-teal text-left cursor-pointer"
                  onClick={() => setStateMachine("SAVENEW")}
                >
                  Save Current Layout As New Layout
                </button>
                <button
                  className="py-3 px-6 bg-white hover:text-sb-teal text-left cursor-pointer"
                  onClick={() => setStateMachine("RENAME")}
                >
                  Rename Current Layout
                </button>
                <button
                  className="py-3 px-6 bg-white hover:text-sb-teal text-left cursor-pointer"
                  onClick={(e) => saveOrDelete("DELETE", e)}
                >
                  Delete Current Layout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileButton;
