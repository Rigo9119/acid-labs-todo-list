import PropTypes from 'prop-types'
import TodoItem from "../TodoItem/TodoItem";
//Styles
import './TodoList.css'

const Todolist = ({ todos, deleteItem }) => {

    return (
        <ul className="todoList">
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo}
                    deleteItem={deleteItem}
                    todoIndex={index} 
                    />
            ))}
        </ul>
    );
};

Todolist.prototypes = {
    todos: PropTypes.array,
    deleteItem: PropTypes.func
}

export default Todolist;
