import Item from "./Item";

const TodoList = ({ todoData, onDelete, onCheckedToggle }) => {
  const handleDelete = (item) => {
    onDelete({ ...item, action: "deleting" });
  };
  const handleCheckToggle = (item) => {
    onCheckedToggle({ ...item, action: "toggleCheck" });
  };

  return (
    <ul className="list">
      {todoData.map((todo) => {
        return (
          <Item
            key={todo.id}
            todoItem={todo}
            onDelete={handleDelete}
            checked={todo.checked}
            onCheckedToggle={handleCheckToggle}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
