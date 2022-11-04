import { Provider } from "react-redux";
import "./App.css";
import store from "./Redux/Store";
import Another from "./Redux/Another";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Another />
      </div>
    </Provider>
  );
}

export default App;
