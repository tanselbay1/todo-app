import { ReactComponent as Cross } from "../assets/images/icon-cross.svg";

export default function Item({ todo }) {
  return (
    <div className="todo-item">
      <input type="checkbox" name="" id="" />
      <li key={todo.id}>{todo.todo}</li>
      <Cross />
    </div>
  );
}
