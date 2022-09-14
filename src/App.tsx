import "./App.css";
import Sprintboard from "./components/Sprintboard/Sprintboard";
import seed from "./seed.json";

function App() {
  return (
    <div className='App'>
      <Sprintboard sprint={seed} />
    </div>
  );
}

export default App;
