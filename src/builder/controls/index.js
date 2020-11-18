import React, { useEffect } from "react";
import { Exporter } from "./Exporter";
import { Global } from "../../global";
import { useFirebaseData } from "../assets/utils";
import Selecter from "./Selecter";
import FileButton from "./FileButton";
import Clear from "./Clear";
import FrameSizeOptions  from "../../edit/utils/FrameSizeOptions";

const Controls = ({ dynamicWidth, frameSizeData, setTrigger }) => {
  const fromEditorView = dynamicWidth ? true : false;
  const viewMobileFrame = frameSizeData
    ? frameSizeData.frameWidth[0] === "375px"
    : false;
  const firebaseData = useFirebaseData();
  const { items, setItems } = React.useContext(Global);

  // Selected Layout is shared betweent the file button and selector
  const [selected, setSelected] = React.useState(() => {
    // Check if there already a layout selected on mount
    const localStore = JSON.parse(localStorage.getItem("selected"));
    if (localStore === null) {
      return "select to load";
    } else return localStore;
  });

  useEffect(() => {
    // Effect triggers when the 'selected' layout changes
    // find the selected layout and grab its component list
    // and set our global items (aka 'the compilted list') to match it
    let local = firebaseData.filter((el) => {
      let b = "";
      if (el[0] === selected) return (b = el[1]);
      return b;
    });
    local[0] !== undefined ? setItems(local[0][1]) : setItems([]);
  }, [firebaseData, setItems, selected]);

  return (
    <div
      style={{ width: dynamicWidth }}
      className={`animation duration-500 ease mx-auto font-sbBody text-sm  ${
        fromEditorView ? "" : "max-w-4xl px-4"
      }`}
    >
      <div
        style={{ backgroundColor: "#f0f2f4" }}
        className={`
          ${fromEditorView ? "" : "mt-6 "}
          ${viewMobileFrame ? " grid-cols-2 gap-2" : "grid-cols-3 "}
          grid  rounded-t-md px-5 py-2 border border-sb-gray border-b-0`}
          >
        {fromEditorView ? (
          <FrameSizeOptions frameSizeData={frameSizeData} />
        ) : (
          <FileButton
            data={firebaseData}
            items={items}
            selected={selected}
            setSelected={setSelected}
          />
        )}

        <Selecter
          className={viewMobileFrame ? "col-span-2 row-start-1 py-3" : " "}
          firebaseData={firebaseData}
          setSelected={setSelected}
          selected={selected}
          setTrigger={setTrigger}
        />

        <div className="flex justify-end items-center">
          {!fromEditorView && <Clear />}
          <Exporter />
        </div>
      </div>
    </div>
  );
};

export default Controls;
