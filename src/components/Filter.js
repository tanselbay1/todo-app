import { useState, useEffect } from "react";
import _debounce from "lodash.debounce";

const Filter = ({ onFilter, todoLength, onClear }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const filterList = ({ target }) => {
    onFilter(target.innerText.toLowerCase());
  };

  const clearList = () => {
    onClear();
  };

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filterActions = (
    <div className="filter-actions">
      <input className="actions-btn" type="radio" name="actions" id="all" />
      <label htmlFor="all" className="radio-label" onClick={filterList}>
        All
      </label>
      <input className="actions-btn" type="radio" name="actions" id="active" />
      <label htmlFor="active" className="radio-label" onClick={filterList}>
        Active
      </label>
      <input
        className="actions-btn"
        type="radio"
        name="actions"
        id="completed"
      />
      <label htmlFor="completed" className="radio-label" onClick={filterList}>
        Completed
      </label>
    </div>
  );

  const smallScreen = (
    <div className="filter-container">
      <div className="items-left">
        <span>
          {todoLength} {todoLength <= 1 ? "item" : "items"} left
        </span>
      </div>
      <div className="clear-completed">
        <span onClick={clearList}>Clear Completed</span>
      </div>
      {filterActions}
    </div>
  );

  if (width < 768) {
    return smallScreen;
  }
  return (
    <div className="filter-container">
      <div className="items-left">
        <span className="small-span">
          {todoLength} {todoLength <= 1 ? "item" : "items"} left
        </span>
      </div>
      {filterActions}
      <div className="clear-completed">
        <span onClick={clearList} className="small-span">
          Clear Completed
        </span>
      </div>
    </div>
  );
};

export default Filter;
