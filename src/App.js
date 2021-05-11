import "./App.css";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="todo-app">
      <Clock />
      <TodoList />
    </div>
  );
}

export default App;
