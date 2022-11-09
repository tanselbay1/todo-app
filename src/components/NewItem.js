const NewItem = ({ onAddItem }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddItem({
        id: Math.random(),
        todo: event.target.value,
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
