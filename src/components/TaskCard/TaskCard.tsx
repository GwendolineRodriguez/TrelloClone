import { DragEvent } from "react";
import { Task } from "../../models/Task";
import "./TaskCard.css";

interface IProps {
  task: Task;
  onTaskMoved: (task: Task) => void;
}

function TaskCard({ task, onTaskMoved }: IProps) {
  const dragTask = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("??", event.currentTarget.id);
    console.log(event.currentTarget.id);
  };
  return (
    <div
      id={task.id.toString()}
      draggable='true'
      className='taskCard'
      onDragStart={dragTask}
    >
      <h3>{task.title}</h3>
    </div>
  );
}

export default TaskCard;
