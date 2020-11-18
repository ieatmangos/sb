import React from "react";
import { tags } from "../../sections/allSections";

export const LibraryFilters = ({ filter, setFilter, setShowLibary, showLibary }) => {
  return (
   
    <div className="flex flex-col items-start text-sm text-gray-200  bg-sb-gray  ">
           <p className=" px-4 py-4 text-base font-sbHeading text-white">PAGE SECTIONS</p>

        {tags.map(tag => (
          <div
            role='button'
            key={tag}
            className={`
            w-full px-4 py-2 cursor-pointer 
            hover:bg-white 
            ${filter === tag ?" bg-white text-sb-black":""}
               `}
            onClick={() => {
            localStorage.setItem('tag-filter', tag)
             setFilter(tag)
             !showLibary && setShowLibary(true)
            }}
          >
            {tag}
          </div>
        ))}
 
    </div>

  );
};
