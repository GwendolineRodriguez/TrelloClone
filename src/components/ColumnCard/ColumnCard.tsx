import { Column } from "../../models/Column";
import { Task } from "../../models/Task";
import TaskCard from "../TaskCard/TaskCard";

interface IProps {
  column: Column;
  tasks: Task[];
}

function ColumnCard({ column, tasks }: IProps) {
  return (
    <>
      <h2>{column.name}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}

export default ColumnCard;
