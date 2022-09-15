import { DragEvent } from "react";
import { Task } from "../../models/Task";
import "./TaskCard.css";

interface IProps {
  task: Task;
}

function TaskCard({ task }: IProps) {
  const dragTask = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
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
