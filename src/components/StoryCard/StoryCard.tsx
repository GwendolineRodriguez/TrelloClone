import { Story } from "../../models/Story";
import TaskCard from "../TaskCard/TaskCard";

interface IProps {
  story: Story;
}

function StoryCard({ story }: IProps) {
  return (
    <>
      <h2>{story.name}</h2>
      {story.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}

export default StoryCard;
