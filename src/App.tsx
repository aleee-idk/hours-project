import "./global.css";
import { Information } from "./sections/information/Information";
import { Navbar } from "./sections/navbar/Navbar";
import { SubtaskList } from "./sections/Subtasks/List";
import { Summary } from "./sections/summary/Summary";

function App() {
  return (
    <div className="container">
      <Navbar />

      <Information />
      <Summary />
      <SubtaskList />
    </div>
  );
}

export default App;
