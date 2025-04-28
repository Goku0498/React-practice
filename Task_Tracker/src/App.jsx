import { useState } from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import TaskList from "./components/Tasklist"
import AddTask from "./components/AddTask"
import "./app.css"

function App() {

  const [tasks, setTasks]=useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;