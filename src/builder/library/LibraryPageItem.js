import React from 'react'

// Child
const LibraryPageItem = ({ label, Component }) => {
  return (
    <div>
      <p className="text-black text-xs py-2 ">{label}</p>
      <div className={`relative library-zoom border border-gray-300 `}>
        <Component />
      </div>
    </div>
  );
};
export default LibraryPageItem