import "./App.css";

import Counter from "./components/Counter";

function App() {
  return <Counter initialValue={0} handlerCounterIncrement={1}></Counter>;
}

export default App;
