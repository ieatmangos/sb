import React from "react";
import { Link } from "react-router-dom";
import { EyeSvg, DeleteSvg,  } from "./svg";
import DuplicateSection from "./DuplicateSection";
import { useFirebase } from "../../firebase/FirebaseContext";
import { Global } from "../../global";

export const HoverLinks = ({ label, id, children }) => {
  const { items, setItems } = React.useContext(Global);
  const firebase = useFirebase();
  // Delete component instance
  const deleteMe = (e, id) => {
    const filteredList = items.filter((el) => el.id !== id);
    setItems(filteredList);

    const saveName = JSON.parse(localStorage.getItem("selected"));
    const itemsWithoutComponents = filteredList.map((i) => {
      return {
        id: i.id,
        label: i.label,
        tag: i.tag,
        data: i.data || {}
      };
    });
    firebase.items().update({ [saveName]: itemsWithoutComponents });
    return;
  };

  return (
    <div className="flex flex-col items-start absolute   z-20 bg-white rounded-sm overflow-hidden  text-black shadow-xl cursor-pointer">
      <p className="pb-2 pt-4 px-4 w-full h-full bg-sb-black text-white  text-2xl rounded-sm text-center">
        {label}
      </p>
      <div className="flex justify-center w-full pt-2">
        <Link
          to={`sections/${label}`}
          className={` p-2 cursor-pointer transform animation duration-100 hover:-translate-y-1 hover:shadow-sm`}
        >
          <EyeSvg />
        </Link>

        <div
          className={`p-2 cursor-pointer transform animation duration-100 hover:-translate-y-1 hover:shadow-sm`}
          onClick={(e) => deleteMe(e, id)}
        >
          <DeleteSvg />
        </div>
        <DuplicateSection id={id}/>
      </div>
      {children}
    </div>
  );
};
