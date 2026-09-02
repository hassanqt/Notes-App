import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

const App = () => {
  const [task, setTask] = useState([]);

  return (
    <div className="w-full min-h-screen p-10 flex flex-col lg:flex-row gap-4 bg-black/90">
      <Left setTask={setTask} />
      <hr className="lg:hidden text-white font-extrabold" />
      <Right task={task} />
    </div>
  );
};

export default App;
