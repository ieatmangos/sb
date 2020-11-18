import React from "react";

const Button = ({ instance, selectedInstance, setSelectedInstance }) => {
  return (
    <div>
      <button
        onClick={() => {
          setSelectedInstance(selectedInstance && (instance.id === selectedInstance.id) ? null : instance);
        }}
        key={instance.id}
        className={`
        ${
          selectedInstance && selectedInstance.id === instance.id
            ? " bg-white text-sb-gray "
            : " bg-sb-gray text-white "
        }
        w-full text-left px-4 py-2 transition duration-400 flex items-center text-sm`}
      >
        {instance.label}
        {/* <span className={`-mt-1 ml-auto text-white animation duration-300 transform ${showInputs ? '-rotate-180': 'rotate-0'}`}>&#8744;</span> */}
      </button>

    </div>
  );
};
export default Button