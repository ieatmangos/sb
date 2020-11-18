import React from "react";
import { CopySvg } from "./svg";
import { useEdit, EditMyData } from "../../edit";
import { v4 as uuid } from "uuid";
import { Global } from "../../global";
import { useFirebase } from "../../firebase/FirebaseContext";

const DuplicateSection = ({ id }) => {
  // used to changed the fill color of the SVG
  const [copyState, setCopyState] = React.useState(false);

  React.useEffect(()=>{
    if(!copyState){
      return
    }
    const unsub = setTimeout(()=>{
      copyState && setCopyState(false)
    },2000)
    return () => clearTimeout(unsub)
  },[copyState])

  // Duplicate work
  const firebase = useFirebase();
  const { items } = React.useContext(Global);
  const { editMyData } = React.useContext(EditMyData);
  const myData = editMyData.filter((i) => i.id === id)[0];
  const defaults = React.useMemo(() => (myData ? myData.defaults : {}), [
    myData
  ]);
  const editable = useEdit(defaults, id);
  const duplicate = () => {
    const toDuplicate = items.filter((i) => i.id === id);
    const duplicated = {
      id: uuid(),
      label: toDuplicate[0].label,
      tag: toDuplicate[0].tag,
      data: editable
    };
    let itemsReferance = items;

    console.log(itemsReferance)
    const locatePlacement = (element) => element.id === id;
    const index  = itemsReferance.findIndex(locatePlacement)
    let before = itemsReferance.slice(0,index)
    const after = itemsReferance.slice(index)

    before.push(duplicated);
    const newItemsReferance = [...before, ...after]
console.log(newItemsReferance)
    const saveName = JSON.parse(localStorage.getItem("selected"));
    if (saveName === "select to load") {
      return;
    }
    const itemsForFirebase = newItemsReferance.map((i) => {
      // This first check makes sure that the data is attributed to the
      // original component. Normally this happens in <EditLayer3/> but because 'duplicate'
      // needs to live here, and we are updating firebase... We need to make
      // sure we are sending all the right information to firebase
      if (toDuplicate[0].id === i.id) {
        return {
          id: i.id,
          label: i.label,
          tag: i.tag,
          data: editable
        };
      }
      // Else run through each and grab all but its components
      return {
        id: i.id,
        label: i.label,
        tag: i.tag,
        data: i.data || {}
      };
    });
    firebase.items().update({ [saveName]: itemsForFirebase });
  };

  return (
    <div
      className={`${copyState?'bg-sb-teal rounded-md':''} p-2 cursor-pointer transform animation duration-100 hover:-translate-y-1  hover:shadow-sm `}
      onClick={() => {
        duplicate();
        setCopyState(true);
      }}
    >
      <CopySvg copyState={copyState} />
    </div>
  );
};

export default DuplicateSection;
