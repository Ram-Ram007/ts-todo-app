import { useState } from "react";

interface IAddTodo {
  onTodoAdd: (str: string) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onTodoAdd(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="add">
      <button type="submit" >Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
