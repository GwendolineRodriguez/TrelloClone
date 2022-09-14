import { Story } from "./Story";

export interface Sprint {
  id: number;
  name: string;
  stories: Story[];
}
