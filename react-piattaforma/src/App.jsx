import "./App.css";
import AlertClock from "./components/AlertClock";

function App() {
  const showAlertWithCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`The current time is: ${currentTime}`);
  };

  return (
    <div>
      <AlertClock onClick={showAlertWithCurrentTime} />
    </div>
  );
}

export default App;
