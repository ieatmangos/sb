import React from "react";
import EditLayer3 from './EditLayer3'
import { useEdit, EditMyData } from "../edit";

const EditLayer2 = ({setSelectedInstance, instance, layout }) => {

  // Configured data which loads from the builder page
  const { editMyData } = React.useContext(EditMyData);

  const id = instance.id;
  const myData = editMyData.filter((i) => i.id === id)[0];
  const defaults = React.useMemo(() => (myData ? myData.defaults : {}), [
    myData
  ]);

  // The shared data between the component instance and its respective EditInputs
  const editable = useEdit(defaults, id);

  // Local copy to make updates
  const [inputVals, setInputVals] = React.useState(() => editable);

  React.useEffect(() => {
    // REORDER the inputs based off default ordering
    // This effect runs each time a firebase object's data changes.
    // Which is a lot so this could be optimized 

    if (Object.keys(defaults).length === 0) {
      return;
    }

    // use the passed in Defaults to create arrays which hold the original order for both LevelOne and LevelTwo
    const orderOne = Object.keys(defaults);
    const orderTwo = Object.values(defaults)
      .map((i) => i.data)
      .map((i) => Object.keys(i));

    // Sort Level One
    const levelOneResult = Object.entries(editable).sort(function (a, b) {
      return orderOne.indexOf(a[0]) - orderOne.indexOf(b[0]);
    });

    // Sort level Two
    const levelTwoResult = levelOneResult.map((i, index) => {
      const obj = Object.entries(i[1].data).sort(function (a, b) {
        return orderTwo[index].indexOf(a[0]) - orderTwo[index].indexOf(b[0]);
      });
      return Object.fromEntries(obj);
    });

    // Combine both levels
    const combinedSorted = Object.fromEntries(
      levelOneResult.map((i, index) => {
        const objRef = i;
        objRef[1].data = levelTwoResult[index];
        return objRef;
      })
    );

    setInputVals(combinedSorted);

  }, [editable, defaults]);

  // Show Hide DropDown Inputs
  const [showTheseInputs, setShowTheseInputs] = React.useState([]);
  React.useEffect(() => {
    // reset show inputs on mount
    setShowTheseInputs([]);
  }, []);



  const toggleShow = (sectionLabel) => {
    showTheseInputs.includes(sectionLabel)
      ? setShowTheseInputs(showTheseInputs.filter((i) => i !== sectionLabel))
      : setShowTheseInputs([...showTheseInputs, sectionLabel]);
  };

  // RETURNS
  // Warning message to display if section needs to be 'Configured'
  if (!myData) {
    return (
      <div className="py-2 mb-2 px-4 text-orange-400">
        Component is not configured to be edited
      </div>
    );
  }

  // Normal Return
  return (
    <div className="relative ">

      {/* Title */}
      <div className="flex items-center uppercase justify-between font-sbHeading  text-lg">
        <p className="py-4 text-base">Edit Page Content</p>
        <button
          onClick={() => {
            setSelectedInstance(null)
          }}
          className="text-lg"
        >
          &#10005;
        </button>
      </div>

      {/* Level Two */}
      {/* Section Labels */}
      {inputVals &&
        Object.entries(inputVals).map((section) => {
          const sectionLabel = section[0];
          const displaySectionLabel = sectionLabel.replace("_", " ");
          const sectionData = section[1].data;
          const showThisLabel = showTheseInputs.includes(sectionLabel)

          return (
            <div key={sectionLabel}>
              {/* Section Label Toggle Button */}
              <button
                className="font-sbHeading uppercase pt-2 mt-2 border-t border-gray-300  font-black flex justify-between items-center w-full text-left"
                onClick={() => toggleShow(sectionLabel)}
              >
                {displaySectionLabel}
                <span style={{transformOrigin: '50% 50%'}} className={`transform animation duration-300 ${showThisLabel ? " mt-1 ":" mb-1 rotate-y-180 rotate-180 "}`}>&#94;</span>
              </button>

              {/* Level Three */}
              {/* Editable Inputs */}
              <div
                className={`${
                  showTheseInputs.includes(sectionLabel) ? "block " : "hidden "
                }`}
              >
                {Object.entries(sectionData).map((i) => (
                  <EditLayer3
                  layout={layout}
                    key={i[0]}
                    id={id}
                    i={i}
                    inputVals={inputVals}
                    setInputVals={setInputVals}
                    sectionLabel={sectionLabel}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default EditLayer2;
