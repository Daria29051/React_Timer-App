import "./App.css";
import Timer from "./components/Timer/Timer";
import Timernew from "./components/Timernew/Timernew";

const timerStartData = {
  minutes: 20,
  seconds: 20,
};

function App() {
  return (
    <div className="App">
      <Timer></Timer>
      <Timernew timerStartData={timerStartData}></Timernew>
    </div>
  );
}

export default App;
