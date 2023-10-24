import { useState } from "react";

interface IAddTodo {
  onTodoAdd: (str: string) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");
  

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (text.length < 1) {
      alert("Input must be at least 1 character long.");
      return;
    }

    if (text.length > 10) {
      alert("Input cannot be longer than 10 characters.");
      return;
    }

    onTodoAdd(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        maxLength={10}
        minLength={1}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="add">
      <button type="submit" >Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
