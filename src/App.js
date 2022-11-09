import { useState, useReducer } from "react";
import "./assets/style.css";
import data from "./data/todos.json";
import { ReactComponent as IconMoon } from "./assets/images/icon-moon.svg";
import NewItem from "./components/NewItem";
import TodoList from "./components/TodoList";

function App() {
  // const [todoData, setData] = useState(data);
  const [todoData, setData] = useReducer(
    (todoData, newItem) => [...todoData, newItem],
    data
  );

  const addItem = (item) => {
    setData(item);
  };

  return (
    <div className="app">
      <header>
        <h1 className="logo">TODO</h1>
        <IconMoon />
      </header>
      <NewItem onAddItem={addItem} />

      <TodoList todoData={todoData} />
    </div>
  );
}

export default App;
