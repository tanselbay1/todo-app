import { ReactComponent as Cross } from "../assets/images/icon-cross.svg";

export default function Item({ todoItem, onDelete, checked, onCheckedToggle }) {
  const handleClick = () => {
    onDelete(todoItem);
  };
  const handleCheckToggle = () => {
    onCheckedToggle(todoItem);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={handleCheckToggle}
      />
      <li>{todoItem.todo}</li>
      <Cross onClick={handleClick} />
    </div>
  );
}
