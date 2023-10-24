import { useState } from "react";

import { ITodo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
      isEdit: false,
      isCompleted:false,//strike
    };
    setTodos((prev) => [...prev, obj]);
  }
  function handleDelete(id: Number) {
    const filtered = todos.filter((t) => t.id != id);
   
    setTodos(filtered);
  }

  function handleUpdate(id: Number) {
    const findindex = todos.findIndex((t) => t.id === id);
    const updatedItems = [...todos];
    updatedItems[findindex] = {
      ...updatedItems[findindex],
      isEdit: true,
    };
    setTodos(updatedItems);
  }
  function handleSaveClick(id: Number, text: string) {
    const findindex = todos.findIndex((t) => t.id === id);
    const updatedItems = [...todos];
    updatedItems[findindex] = {
      ...updatedItems[findindex],
      text: text,
      isEdit: false,
    };
    setTodos(updatedItems);
  }
  return (
    <div className="app">
      <h1>My Todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        
        todos={todos}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleSaveClick={handleSaveClick}
        setTodos={setTodos}//strike
        extraCss="text-bold"
      />
    </div>
  );
}

export default App;
