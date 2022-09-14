import { Task } from "./Task";

export interface Story {
  id: number;
  name: string;
  columns: string[];
  tasks: Task[];
}
