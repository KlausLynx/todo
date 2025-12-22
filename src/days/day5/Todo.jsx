import { Circle, CircleCheck } from 'lucide-react';

const Todo = ({ todo }) => {
    return (
        <div
            style={{
                maxWidth: '100px',
                backgroundColor: 'purple',
                padding: '10px',
                margin: '5px'
            }}
        >
            {todo.done ? <CircleCheck size={20} color="green" /> : <Circle size={20} color="gray" />}
            <p style={{ 
                textDecoration: todo.done ? 'line-through' : 'none' 
            }}>
                {todo.text}
            </p>
        </div>
    )
}

const TodoList = ({ todos }) => {
    return ( 
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList  // ← CHANGE THIS