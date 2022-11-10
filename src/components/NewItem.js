import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewItem = ({ onAddItem }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prevState) => !prevState);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddItem({
        id: uuid(),
        todo: event.target.value,
        action: "adding",
        checked: checked,
      });
      event.target.value = "";
      setChecked(false);
    }
  };

  return (
    <div className="new-todo">
      <input type="checkbox" onChange={handleCheck} checked={checked} />
      <input
        type="text"
        placeholder="Create a new todo..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default NewItem;
