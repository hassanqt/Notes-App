import { useState } from "react";

const Left = ({ setTask }) => {
  const [heading, setHeading] = useState("");
  const [dets, setDets] = useState("");

  const submitButton = (e) => {
    e.preventDefault();

    if (heading.trim() && dets.trim()) {
      const newTask = {
        heading,
        dets,
      };

      setTask((prevTask) => {
        const updatedTasks = [...prevTask, newTask];

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        return updatedTasks;
      });

      setHeading("");
      setDets("");
    }
  };

  return (
    <div className="basis-[50%] text-white">
      <form
        onSubmit={(e) => {
          submitButton(e);
        }}
        className="h-full w-full p-10 flex flex-col gap-10"
      >
        <h1 className="text-2xl px-1 font-semibold">Add a Note</h1>

        <input
          type="text"
          value={heading}
          placeholder="Note Title..."
          className="px-6 py-2 border-2 border-white font-medium rounded-lg outline-0"
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />

        <textarea
          name=""
          id=""
          className="resize-none h-full px-6 py-6 border-2 border-white font-medium rounded-lg outline-0 overflow-auto scrollbar-none"
          placeholder="Note Details..."
          value={dets}
          onChange={(e) => {
            setDets(e.target.value);
          }}
        ></textarea>

        <input
          type="submit"
          value="Add Note"
          className="bg-black/50 border border-white rounded-lg active:translate-y-0.5 text-white font-medium py-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Left;