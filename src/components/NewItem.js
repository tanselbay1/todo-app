import { v4 as uuid } from "uuid";

const NewItem = ({ onAddItem }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddItem({
        id: uuid(),
        todo: event.target.value,
        action: "adding",
      });
      event.target.value = "";
    }
  };

  return (
    <div className="new-todo">
      <input type="checkbox" />
      <input
        type="text"
        placeholder="Create a new todo..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default NewItem;
