import React from "react";
import "./TodoList.css"

interface TodoListProps {
  tasksList: { id: string; text: string }[];
  delete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.tasksList.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => props.delete(task.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
