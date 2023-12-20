import "./App.css";
import Header from "./components/Header/Header";
import Indicator from "./components/Indicator";
import Transactions from "./components/Transactions";
import InputBar from "./components/InputBar";

function App() {
  return (
    <div className="app">
      <Header />
      <Indicator />
      <Transactions />
      <InputBar />
    </div>
  );
}

export default App;
