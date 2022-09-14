import { Sprint } from "../../models/Sprint";
import StoryCard from "../StoryCard/StoryCard";

interface IProps {
  sprint: Sprint;
}

function Sprintboard({ sprint }: IProps) {
  return (
    <>
      <h1>sprint.name</h1>
      {sprint.stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </>
  );
}

export default Sprintboard;
