import { Column } from "../../models/Column";
import { Task } from "../../models/Task";
import TaskCard from "../TaskCard/TaskCard";
import "./ColumnCard.css";

interface IProps {
  column: Column;
  tasks: Task[];
  onTaskMoved: (task: Task) => void;
}

function ColumnCard({ column, tasks, onTaskMoved }: IProps) {
  return (
    <div
      id={column.id.toString()}
      className='columnCard'
      onDrop={() => {}}
      onDragOver={() => {}}
    >
      <h2>{column.name}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onTaskMoved={onTaskMoved} />
      ))}
    </div>
  );
}

export default ColumnCard;
