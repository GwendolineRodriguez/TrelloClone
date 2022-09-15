import "./App.css";
import BoardCard from "./components/BoardCard/BoardCard";
import { Board } from "./models/Board";
import seed from "./seed.json";

function App() {
  // localStorage.clear();
  const localData = localStorage.getItem("board");
  const board = localData ? JSON.parse(localData) : seed;

  return (
    <div className='App'>
      <BoardCard board={board} />
    </div>
  );
}

export default App;
