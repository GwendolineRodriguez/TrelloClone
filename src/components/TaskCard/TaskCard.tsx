import { Task } from "../../models/Task";

interface IProps {
  task: Task;
}

function TaskCard({ task }: IProps) {
  return (
    <>
      <h3>{task.title}</h3>
    </>
  );
}

export default TaskCard;
