import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  function deleteTask(id) {
    //TODO delete stuff
    console.log(`I will delete task ${id}`);
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
    // const nextState = tasks.filter(task=>task.id !==)
  }
  function addTask(task) {
    console.log(`I will add task ${task}`);
    const newTask = {
      id: Date.now(),
      task: task,
    };
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  return (
    <main>
      <section className="form">
        <Form addTask={addTask} />
      </section>
      <section className="list">
        <List deleteTask={deleteTask} tasks={tasks} />
      </section>
    </main>
  );
}

export default App;
