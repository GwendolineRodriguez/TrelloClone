import { Column } from "../../models/Column";
import { Task } from "../../models/Task";
import TaskCard from "../TaskCard/TaskCard";
import "./ColumnCard.css";
import { DragEvent } from "react";
import { Status } from "../../models/Status";

interface IProps {
  column: Column;
  tasks: Task[];
  onTaskMoved: (taskId: number, status: Status) => void;
}

function ColumnCard({ column, tasks, onTaskMoved }: IProps) {
  const onDropTask = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const taskId = Number(data);
    onTaskMoved(taskId, column.status);
  };
  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div
      id={column.id.toString()}
      className='columnCard'
      onDrop={onDropTask}
      onDragOver={onDragOver}
    >
      <h2>{column.name}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ColumnCard;
