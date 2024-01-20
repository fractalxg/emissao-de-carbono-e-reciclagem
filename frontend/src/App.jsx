import "./App.css";
import Header from "./components/header/Header";
import Home from "./routes/Home";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
