import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model/model";
import classes from "./InputField.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editHandler = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const submitHandler = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={classes.todos__single}
      onSubmit={(event) => submitHandler(event, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className={`${classes["todos__single--text"]} `}
        />
      ) : todo.isDone ? (
        <s className={`${classes["todos__single--text"]} `}>{todo.todo}</s>
      ) : (
        <span className={`${classes["todos__single--text"]} `}>
          {todo.todo}
        </span>
      )}

      <div>
        <span className={classes.icon} onClick={editHandler}>
          <AiFillEdit />
        </span>
        <span className={classes.icon} onClick={() => deleteHandler(todo.id)}>
          <AiFillDelete />
        </span>
        <span className={classes.icon} onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
