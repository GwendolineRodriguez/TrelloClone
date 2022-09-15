import { Column } from "../../models/Column";
import { Task } from "../../models/Task";
import TaskCard from "../TaskCard/TaskCard";
import "./ColumnCard.css";
import { DragEvent } from "react";
import { Status } from "../../models/Status";

interface IProps {
  column: Column;
  tasks: Task[];
  onTaskMoved: (task: Task) => void;
}

function ColumnCard({ column, tasks, onTaskMoved }: IProps) {
  const status =
    Object.values(Status)[Object.keys(Status).indexOf(column.name)];

  const onDropTask = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // onTaskMoved();
    console.log("onDropTask");
  };
  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // TODO: Effect while draging over
    console.log("onDragOver");
  };
  return (
    <div
      id={column.id.toString()}
      className='columnCard'
      onDrop={onDropTask}
      onDragOver={onDragOver}
    >
      <h2>{status}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onTaskMoved={onTaskMoved} />
      ))}
    </div>
  );
}

export default ColumnCard;
