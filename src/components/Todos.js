import { useState } from "react";
import Filter from "./Filter";
import TodoList from "./TodoList";

const Todos = ({ todoData, onDelete, onCheckedToggle }) => {
  const [state, setState] = useState("all");

  const handleDelete = (item) => {
    onDelete({ ...item, action: "deleting" });
  };
  const handleCheckToggle = (item) => {
    onCheckedToggle({ ...item, action: "toggleCheck" });
  };

  const allTodos = todoData.map((todo) => todo);
  const activeTodos = todoData.filter((todo) => !todo.checked);
  const completedTodos = todoData.filter((todo) => todo.checked);

  if (state === "all") {
    todoData = allTodos;
  } else if (state === "active") {
    todoData = activeTodos;
  } else if (state === "completed") {
    todoData = completedTodos;
  }

  return (
    <div className="todos-container">
      <TodoList
        todoData={todoData}
        onDelete={handleDelete}
        onCheckedToggle={handleCheckToggle}
      />
      <Filter
        onFilter={(filterText) => {
          setState(filterText);
        }}
        todoLength={todoData.length}
      />
    </div>
  );
};

export default Todos;
