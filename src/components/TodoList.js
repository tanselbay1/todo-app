import Item from "./Item";

const TodoList = ({ todoData }) => {
  return (
    <ul className="list">
      {todoData.map((todo) => {
        return <Item todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
