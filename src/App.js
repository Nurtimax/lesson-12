import "./App.css";
import Header from "./components/layout/header/Header";
import Meal from "./components/meals/meal/Meal";

function App() {
  return (
    <div className="App">
      <Header />
      <Meal/>
    </div>
  );
}

export default App;
