import React from "react";
import LibraryComponents from "./LibraryComponents";
import sections from "../../sections/allSections";

import { LibraryFilters } from "./LibraryFilters";

const Library = ({ items, setFilteredItems }) => {
  const [showLibary, setShowLibary] = React.useState(false);

  // Selected Filter Tag. ie 'Gallary'
  const [filter, setFilter] = React.useState(
    () => localStorage.getItem("tag-filter") || "All"
  );

  // Filter Tags side effect which updates the component instance list
  React.useEffect(() => {
    if (filter === "All") {
      // reset
      setFilteredItems(sections);
    } else if (filter !== "All") {
      const filtered = sections.filter((i) => i.tag === filter);
      setFilteredItems(filtered);
    }
  }, [filter, setFilteredItems]);

  return (
    <div className=" h-screen flex">
      <LibraryFilters
        showLibary={showLibary}
        setShowLibary={setShowLibary}
        setFilter={setFilter}
        filter={filter}
      />
      <div
        className={`${
          showLibary ? "block" : "hidden"
        } h-screen overflow-y-scroll overflox-x-hidden`}
      >
        <LibraryComponents
          items={items}
          setShowLibary={setShowLibary}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default Library;
