import { Column } from "./Column";
import { Task } from "./Task";

export interface Board {
  id: number;
  name: string;
  columns: Column[];
  tasks: Task[];
}
