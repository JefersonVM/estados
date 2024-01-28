import { useState } from "react";
import "./style.css";

function Main() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    const content = e.target.value;
    if (e.key !== "Enter" || content === "") {
      return;
    }

    const localTasks = [...tasks];

    const newTask = {
      id: Math.random(),
      name: content,
      done: false,
    };

    localTasks.push(newTask);

    setTasks(localTasks);

    e.target.value = "";
  };

  const handleDeleteTask = (id) => {
    const localTasks = [...tasks];

    const index = localTasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return;
    }

    localTasks.splice(index, 1);

    setTasks(localTasks);
  };

  const handleChangeStatus = (id) => {
    const localTasks = [...tasks];

    const findTask = localTasks.find((task) => task.id === id);

    if (!findTask) {
      return;
    }

    findTask.done = !findTask.done;

    setTasks(localTasks);
  };
  return (
    <div className="container">
      <div>
        <input
          onKeyDown={(e) => {
            handleAddTask(e);
          }}
          type="text"
          placeholder="Nova Tarefa"
        />
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                className={`${task.done && "task-done"}`}
                onClick={() => {
                  handleChangeStatus(task.id);
                }}
              >
                {task.name}
              </span>
              <button
                className="btn-del"
                onClick={() => {
                  handleDeleteTask(task.id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
