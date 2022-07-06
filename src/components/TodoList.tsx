import React from "react";
import classes from "./InputField.module.css";
import { Todo } from "./model/model";
import TodoItem from "./TodoItem";
type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className={classes.todos}>
      {todos.map((todoItem) => (
        <TodoItem
          todo={todoItem}
          key={todoItem.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
