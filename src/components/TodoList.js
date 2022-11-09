import Item from "./Item";

const TodoList = ({ todoData, onDelete }) => {
  const handleDelete = (item) => {
    console.log(item);
    onDelete({ ...item, action: "deleting" });
  };

  return (
    <ul className="list">
      {todoData.map((todo) => {
        return <Item key={todo.id} todoItem={todo} onDelete={handleDelete} />;
      })}
    </ul>
  );
};

export default TodoList;
