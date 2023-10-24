import { ITodo } from "../types";
import EditForm from "./EditForm";
interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleDelete: (num: Number) => void;
  handleUpdate: (num: Number) => void;
  handleSaveClick: (num: Number, t: string) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  handleDelete,
  handleUpdate,
  handleSaveClick,
}) => {
  return (
    <div className={extraCss}>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          {t.isEdit ? (
            <>
              <EditForm item={t} handleSaveClick={handleSaveClick} />
            </>
          ) : (
            <p>
              <input type="checkbox" />
              {t.text}
              <button onClick={() => handleDelete(t.id)}>delete</button>
              <button onClick={() => handleUpdate(t.id)}>Update</button>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
