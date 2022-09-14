import { Status } from "./Status";

export interface Task {
  id: number;
  status: Status;
  title: string;
}
