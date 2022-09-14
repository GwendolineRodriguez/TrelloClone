import { Board } from "../../models/Board";
import ColumnCard from "../ColumnCard/ColumnCard";

interface IProps {
  board: Board;
}

function BoardCard({ board }: IProps) {
  const tasks = board.tasks;
  return (
    <>
      <h1>board.name</h1>
      {board.columns.map((column) => (
        <ColumnCard key={column.id} column={column} tasks={tasks} />
      ))}
    </>
  );
}

export default BoardCard;
