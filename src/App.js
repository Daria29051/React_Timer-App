import "./App.css";
import Timer from "./components/Timer/Timer";
import Timernew from "./components/Timernew/Timernew";
import Timertwo from "./components/Timertwo/Timertwo";

const timerStartData = {
  minutes: 20,
  seconds: 20,
};

const minutes = 10;
const seconds = 10;

function App() {
  return (
    <div className="App">
      <Timer></Timer>
      <Timernew timerStartData={timerStartData}></Timernew>
      <Timertwo minutes={minutes} seconds={seconds} ></Timertwo>
    </div>
  );
}

export default App;
