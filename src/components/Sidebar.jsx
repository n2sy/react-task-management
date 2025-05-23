import React from "react";
import Button from "./Button";

function Sidebar(props) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
      <div>
        <Button onClick={props.onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {props.projects.map((project) => {
          let classesCSS =
            "w-full text-left mt-4 px-2 py-1 rounded-sm  hover:bg-stone-700 hover:text-stone-50";
          if (props.selectedProjectId === project.id) {
            classesCSS += " bg-stone-700 text-stone-50";
          } else {
            classesCSS += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => props.onSelectProject(project.id)}
                className={classesCSS}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
