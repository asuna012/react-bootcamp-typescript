import React, { useRef } from "react";
import classes from "./InputField.module.css";
type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (event: React.FormEvent) => void;
};
const InputField: React.FC<Props> = ({ todo, setTodo, addHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    addHandler(event);
    inputRef.current?.blur();
  };
  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  return (
    <form action="" className={classes.input} onSubmit={submitHandler}>
      <input
        type="text"
        ref={inputRef}
        name=""
        id=""
        value={todo}
        onChange={textChangeHandler}
        placeholder="Enter a task"
        className={classes.input__box}
      />
      <button className={classes.input_submit} type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
