import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Component/Homepage";
import Context from "./Class/Context";
import CompoA from "./Class/CompoA";
import Parent from "./Component/Parent";
import Class from "./Component/Class";
import Bike from "./Component/Bike";
import Car from "./Component/Car";
import Cart from "./Component/Cart";

function App() {
  return (
    <Class>
      <div className="App">
        <div>
          <Car />
          <Bike />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </Class>
  );
}

export default App;
