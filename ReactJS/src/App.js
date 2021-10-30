import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Event from "./event";
import Lifecycle from "./lifecycle";
import StyledComponent from "./StyledComponent";

function App() {
  return (
    <div className="App">
      <Home />
      <Event />
      <Lifecycle />
      <StyledComponent />
    </div>
  );
}

export default App;
