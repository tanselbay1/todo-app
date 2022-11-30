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
      <label className="checkbox-container">
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={checked}
          onChange={handleCheckToggle}
        />
        <span className="checkmark"></span>
        <li className={checked ? "checked" : null}>{todoItem.todo}</li>
      </label>
      <Cross onClick={handleClick} />
    </div>
  );
}
