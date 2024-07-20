import React, { useRef } from "react";
import "./NewTodo.css"

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const SubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={SubmitForm}>
      <div>
        <label htmlFor="item-text">New task</label>
        <input type="text" id="item-text" ref={textInputRef} />
      </div>
      <button type="submit" className="submit">Add task</button>
    </form>
  );
};

export default NewTodo;
