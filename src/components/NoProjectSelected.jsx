import React from "react";
import Button from "./Button";

function NoProjectSelected(props) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src="no-projects.png"
        className="w-16 h-16 object-contain mx-auto"
      ></img>
      <h2 className="text-xl font-bold text-stone-50 mt-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={props.onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
