import React from "react";
import NewTask from "./NewTask";

function Tasks({ tasks, onAdd, onClear }) {
  console.log(tasks);
  return (
    <div className="w-2/3 mt-8">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd}></NewTask>
      {tasks.length === 0 && <p className="text-stone-800 my-4">No tasks</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li className="flex justify-between my-4" key={task.id}>
                {task.title}
                <button
                  onClick={() => onClear(task.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
