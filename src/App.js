import "./assets/style.css";
import data from "./data/todos.json";

function App() {
  return (
    <div className="App">
      <h1>Hello TODO</h1>
      <ul className="list">
        {data.map((todo) => {
          return <li>{todo.todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
