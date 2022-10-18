import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Component/Homepage";
import Context from "./Class/Context";
import CompoA from "./Class/CompoA";

function App() {
  return (
    <Context>
      <div className="App">
        <CompoA/>
      </div>
    </Context>
  );
}

export default App;
