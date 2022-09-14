import { Task } from "../../models/Task";
import "./TaskCard.css";

interface IProps {
  task: Task;
  onTaskMoved: (task: Task) => void;
}

function TaskCard({ task, onTaskMoved }: IProps) {
  return (
    <div
      id={task.id.toString()}
      draggable='true'
      className='taskCard'
      onDragStart={() => {}}
    >
      <h3>{task.title}</h3>
    </div>
  );
}

export default TaskCard;
