import { ITodo } from "../types";
import EditForm from "./EditForm";
interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleDelete: (num: Number) => void;
  handleUpdate: (num: Number) => void;
  handleSaveClick: (num: Number, t: string) => void;
  setTodos: (updatedItems: ITodo[]) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  handleDelete,
  handleUpdate,
  handleSaveClick,
  setTodos,
}) => {
  const handleCheckboxChange = (id: Number) => {
    const updatedItems = todos.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          isCompleted: !t.isCompleted,
        };
      }
      return t;
    });
    setTodos(updatedItems);
  };

  return (
    <div className={extraCss}>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          {t.isEdit ? (
            <>
              <EditForm item={t} handleSaveClick={handleSaveClick} />
            </>
          ) : (
            <div className="total">
            <p className={t.isCompleted ? 'strikethrough' : ''}>
              <input
                type="checkbox"
                checked={t.isCompleted}
                onChange={() => handleCheckboxChange(t.id)}
              />
              {t.text}
              <button onClick={() => handleDelete(t.id)}>delete</button>
              <button onClick={() => handleUpdate(t.id)}>Edit</button>
            </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
