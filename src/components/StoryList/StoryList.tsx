import { Story } from "../../models/Story";
import StoryCard from "../StoryCard/StoryCard";

interface IProps {
  stories: Story[];
}

function StoryList({ stories }: IProps) {
  return (
    <>
      {stories.map((story) => (
        <StoryCard story={story} />
      ))}
    </>
  );
}

export default StoryList;
