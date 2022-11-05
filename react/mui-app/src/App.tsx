import { Provider } from "react-redux";
import "./App.css";
import store from "./Redux/Store";
import Layout from "./Component/AgeCal/Layout";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout/>
      </div>
    </Provider>
  );
}

export default App;
