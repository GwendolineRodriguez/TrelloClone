import { useState } from "react";
import { Board } from "../../models/Board";
import { Status } from "../../models/Status";
import { Task } from "../../models/Task";
import ColumnCard from "../ColumnCard/ColumnCard";
import "./BoardCard.css";

interface IProps {
  board: Board;
}

function BoardCard({ board }: IProps) {
  const [currentBoard, setBoard] = useState<Board>(board);
  const tasks = board.tasks;
  const updateTaskStatus = (taskId: number, status: Status) => {
    const id = currentBoard.tasks.findIndex((task) => task.id === taskId);
    const newBoard = { ...currentBoard };
    newBoard.tasks[id].status = status;
    setBoard(newBoard);
    recordBoard(currentBoard);
  };
  const recordBoard = (board: Board) => {
    localStorage.setItem("board", JSON.stringify(board));
  };

  const getTaskList = (tasks: Task[], status: Status): Task[] => {
    return tasks.filter((task) => task.status === status);
  };
  return (
    <div className='boardCard'>
      <h1>{currentBoard.name}</h1>

      <div className='columns'>
        {currentBoard.columns.map((column) => {
          const filteredTasks = getTaskList(tasks, column.status);
          return (
            <ColumnCard
              key={column.id}
              column={column}
              tasks={filteredTasks}
              onTaskMoved={updateTaskStatus}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BoardCard;
