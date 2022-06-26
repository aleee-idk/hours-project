import "./global.css";
import { Information } from "./sections/information/Information";
import { Navbar } from "./sections/navbar/Navbar";
import { SubtaskList } from "./sections/Subtasks/List";
import { Summary } from "./sections/summary/Summary";

import { SubtasksContext, useSubtasksReducer } from "./Context/useSubtask";

function App() {
  const [data, dispatch] = useSubtasksReducer();

  return (
    <SubtasksContext.Provider value={{ data, dispatch }}>
      <div className="container">
        <Navbar />

        <Information />
        <Summary />
        <SubtaskList />
      </div>
    </SubtasksContext.Provider>
  );
}

export default App;
