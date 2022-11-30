import { useReducer } from "react";
import "./assets/style.css";
import data from "./data/todos.json";
import { ReactComponent as IconMoon } from "./assets/images/icon-moon.svg";
import NewItem from "./components/NewItem";
import Todos from "./components/Todos";

function App() {
  const [todoData, setData] = useReducer(reducer, data);

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

  return (
    <div className="app dark">
      <header>
        <h1 className="logo">TODO</h1>
        <IconMoon />
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
