import { useState } from "react";
import { ITodo } from "../types";

interface ICard {
  item: ITodo;
  handleSaveClick: (num: Number, t: string) => void;
}
const Card: React.FC<ICard> = ({ handleSaveClick, item }) => {
  const [updatedTitle, setUpdatedTitle] = useState(item.text);
  return (
    <form className="card">
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={() => handleSaveClick(item.id, updatedTitle)}>
        Save
      </button>
    </form>
  );
};

export default Card;