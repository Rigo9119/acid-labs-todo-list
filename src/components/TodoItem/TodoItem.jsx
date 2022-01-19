import { useState } from "react";
import PropTypes from 'prop-types';
// Styles
import "./TodoItem.css";

const Todoitem = ({ todo, todoIndex, deleteItem }) => {
    const [checked, setChecked] = useState(false);

    const onHandleChecked = () => setChecked(!checked);

    return (
        <li className="todo">
            <label className={checked ? "todo__label--done" : "todo__label"}>
                {checked ? `${todo} is done :)` : todo}
            </label>
            <input
                className={"todo__check"}
                type="checkbox"
                value={todo}
                checked={checked}
                onChange={onHandleChecked}
            />
            {checked ? null : (
                <button className="delete button" onClick={() => deleteItem(todoIndex)}>
                    Delete
                </button>
            )}
        </li>
    );
};

Todoitem.prototypes = {
    name: PropTypes.string,
    todoIndex: PropTypes.number,
    deleteItem: PropTypes.func,
}

export default Todoitem;
