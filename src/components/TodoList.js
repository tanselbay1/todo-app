import Item from "./Item";

const TodoList = ({ todoData, onDelete, onCheckedToggle }) => {
  const handleDelete = (item) => {
    onDelete(item);
  };
  const handleCheckToggle = (item) => {
    onCheckedToggle(item);
  };

  if (todoData.length === 0) {
    return <h2 className="no-items"> Found no items on the list!</h2>;
  }

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
