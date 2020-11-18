import React from "react";

// Child
// const AddSvg = () => {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 14 14"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M7.19678 12.5C10.3724 12.5 12.9468 9.92564 12.9468 6.75C12.9468 3.57436 10.3724 1 7.19678 1C4.02114 1 1.44678 3.57436 1.44678 6.75C1.44678 9.92564 4.02114 12.5 7.19678 12.5ZM7.19678 13.5C10.9247 13.5 13.9468 10.4779 13.9468 6.75C13.9468 3.02208 10.9247 0 7.19678 0C3.46886 0 0.446777 3.02208 0.446777 6.75C0.446777 10.4779 3.46886 13.5 7.19678 13.5ZM7.01493 6.5677V3.64867H8.01493V6.5677H10.6627V7.5677H8.01493V10.2162H7.01493V7.5677H4.09513V6.5677H7.01493Z"
//         fill="#00818A"
//       />
//     </svg>
//   );
// };

// Parent
const Selecter = ({ selected, setSelected, firebaseData, className, setTrigger }) => {
  if (firebaseData.length === 0) {
    return null;
  }
  
  const changeHandler = (e) => {
    localStorage.setItem("selected", JSON.stringify(e));
    // localStorage.setItem("savename", JSON.stringify(e));
    setTrigger && setTrigger(c=>!c)
    setSelected(e);
  };

  return (
    <div
      className={`rounded-sm  border border-gray-400 text-gray-600 px-2 bg-white flex items-center ${className}`}
    >
      {/* <AddSvg /> */}
      <select
        className=" pl-4 w-full text-center"
        onChange={(e) => changeHandler(e.target.value)}
        value={selected}
      >
        <option>select to load</option>
        {firebaseData.map((el, index) => {
          return <option key={index * 200}>{el[0]}</option>;
        })}
      </select>
    </div>
  );
};

export default Selecter;
