import { useState, useEffect } from "react";
import _debounce from "lodash.debounce";

const Filter = ({ onFilter, todoLength }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const filterList = ({ target }) => {
    onFilter(target.innerText.toLowerCase());
  };

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="filter-container">
      <div className="items-left">
        <span>
          {todoLength} {todoLength <= 1 ? "item" : "items"} left
        </span>
      </div>
      <div className="actions">
        <span onClick={filterList}>All {width}</span>
        <span onClick={filterList}>Active</span>
        <span onClick={filterList}>Completed</span>
      </div>
      <div className="clear-completed">
        <span>Clear Completed</span>
      </div>
    </div>
  );
};

export default Filter;
