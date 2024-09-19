import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, editTask, deleteTask }) {
  // Sort tasks by due date
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default TaskList;
