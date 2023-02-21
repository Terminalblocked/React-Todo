import { useState } from "react";
import "./TodoForm.scss";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <form onSubmit={event => {
      event.preventDefault();
      onAdd(text);
      setText("");
    }} className="todo-form">
      <input value={text} onChange={event => {
        setText(event.target.value);
      }}/>
      <button>Add TODO</button>
    </form>
  );
}

export default TodoForm;
