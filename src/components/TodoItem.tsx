import { ITodo } from "../Types/data";

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void; 
}


const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, completed, removeTodo, toggleTodo } = props;
     return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
            {title}
            <button onClick={() => removeTodo(id)}>delete</button>
        </div>
    )
};

export { TodoItem };