import React from "react";
import Rte from './rte'
import { useFirebase } from "../firebase/FirebaseContext";
import { useBouncer } from "./utils/useBouncer";
import { getAutoHeight } from "./utils/getAutoHeight";
import UploadImage from './upload_image'
// import { saveToFirebase } from "./utils/saveToFirebase";

const EditLayer3 = ({ i, inputVals, setInputVals, sectionLabel, id, layout }) => {
  const saveName = JSON.parse(localStorage.getItem("selected")) || null;
  const firebase = useFirebase();
  // const layout = useSelectedLayout();
  const key = i[0];
  const key2 = `0-${key}-${id}`;
  const label = i[1].label;
  const isRte = i[1].rte ? true : false;
  const isImage = i[1].image ? true : false;
  const value = inputVals[sectionLabel].data[key]
    ? inputVals[sectionLabel].data[key].value
    : "";
  const InputElement = i[1].input ? "input" : "textarea";

  // 
  const autoHeight = getAutoHeight(i, value);


  const saveToFirebase = (layout, firebase, saveName, id, inputVals) => {
    if (!layout) {
      return;
    }
    const withData = layout.map((comp, index) => {
      if (
        comp.id === id
        // JSON.stringify(inputVals) !== JSON.stringify(myData.defaults)
      ) {
        comp.data = inputVals;
      }
      return comp;
    });
    saveName && firebase.items().child(saveName).set(withData);
  };
  
  

  // TODO refactor / exctract this function so we dont need to call in every input
  const _save = () => {
    saveToFirebase(layout, firebase, saveName, id, inputVals);
  };
  const save = useBouncer(_save, 150);

  // Update the local copy and Save
  const setValues = (args) =>{
    setInputVals({
      ...inputVals,
      [sectionLabel]: {
        ...inputVals[sectionLabel],
        data: {
          ...inputVals[sectionLabel].data,
          [key]: {
            ...inputVals[sectionLabel].data[key],
            value:  args
          }
        }
      }
    });
    save();
  }

  // Update from Rich Text Editor
  const richUpdateInputVals = (arg) => {
    if(!arg ){
      return
    }
    setValues(arg.toString('html'))
  }


  // Adds the class 'find' to style elements
  // Proabably rework this later
  // const findInput = (remove) => {
  //   if(!label.toLowerCase().includes('style')){
  //     return 
  //   }
  //   if(remove){
  //     setValues(value.replace('find',''))
  //   } else{
  //     // Add classname find
  //     setValues(value + ' find ')
  // }};
  


  return (
    <div key={key} className={` py-2  border-gray-300 bg-white my-1 `}>

      {/* Input Label */}
      <div
        className="capitalize flex items-center cursor-pointer w-full text-sm animation-dropdown"
      >
        {label}
      </div>

      {/* Rich Text Editor or Input */}
      {isImage ? (
        <UploadImage value={value} onChange={setValues} />
      ) : (
        <>
          {isRte ? (
            <Rte value={value} onChange={richUpdateInputVals} />
          ) : (
            <label
              className={`animation-dropdown-child relative block w-full h-full z-50  text-black text-sm  `}
            >
              <InputElement
                className="w-full h-full text-sb-black p-2 border border-sb-lightGray "
                spellCheck="false"
                style={{ reszie: "vertical", height: autoHeight }}
                type="text"
                id={key2}
                value={value}
                // Update
                onChange={(e) => {
                  setValues(e.target.value);
                }}
              />
            </label>
          )}
        </>
      )}
    </div>
  );
};

export default EditLayer3