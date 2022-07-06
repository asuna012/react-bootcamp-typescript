import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { Todo } from "./components/model/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Math.random(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} addHandler={addHandler} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
