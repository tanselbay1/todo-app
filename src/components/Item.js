import { ReactComponent as Cross } from "../assets/images/icon-cross.svg";

export default function Item({ todoItem, onDelete }) {
  const handleClick = () => {
    onDelete(todoItem);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" name="" id="" />
      <li>{todoItem.todo}</li>
      <Cross onClick={handleClick} />
    </div>
  );
}
