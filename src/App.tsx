import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./interfaces/Todo";

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<Todo[]>([]);

  const taskAddHandler = (text: string) => {
    setTaskList(prevList=> [...prevList, { id: Math.random().toString(), text: text }]);
  };

  const taskDeleteHandler = (deleteTaskId: string) => {
    setTaskList(prevList => {
      return prevList.filter(task => task.id !== deleteTaskId)
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={taskAddHandler} />
      <TodoList tasksList={taskList} delete={taskDeleteHandler}/>
    </div>
  );
};
export default App;
