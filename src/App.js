import { useReducer, useState, useLayoutEffect, useRef } from "react";
import "./assets/style.css";
import data from "./data/todos.json";
import NewItem from "./components/NewItem";
import Todos from "./components/Todos";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [todoData, setData] = useReducer(reducer, data);
  const [darkTheme, setTheme] = useState(false);
  const app = useRef(null);

  function reducer(state, item) {
    switch (item.action) {
      case "adding":
        return [...state, item];
      case "deleting":
        return state.filter((stateItem) => stateItem.id !== item.id);
      case "clear":
        return state.filter((stateItem) => !stateItem.checked);
      case "toggleCheck":
        let { id, checked } = item;
        return state.map((todoItem) => {
          if (todoItem.id === id) {
            return { ...todoItem, checked: !checked };
          } else {
            return todoItem;
          }
        });
      default:
        alert(new Error());
    }
  }

  const handleToggle = () => {
    setTheme((prevValue) => !prevValue);
  };

  useLayoutEffect(() => {
    if (darkTheme) {
      app.current.classList.add("dark");
      app.current.classList.remove("light");
    } else {
      app.current.classList.add("light");
      app.current.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div className="app" ref={app}>
      <header>
        <h1 className="logo">TODO</h1>
        <ThemeToggle isDark={darkTheme} setIsDark={handleToggle} />
      </header>
      <NewItem onAddItem={setData} />

      <Todos
        todoData={todoData}
        onDelete={setData}
        onCheckedToggle={setData}
        onClear={setData}
      />
    </div>
  );
}

export default App;
