"use client";
import { useState } from "react";
import Link from "next/link";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const setInput = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    if (text != "") {
      setTasks([text, ...tasks]);
    }
    setText("");
  };
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex mb-3">
          <Link
            href={{
              pathname: "https://github.com/berktugates",
            }}
            target="_blank"
            className="bg-gray-700 text-white p-2 rounded-lg me-2"
          >
            GitHub
          </Link>
          <Link
            href={{
              pathname: "https://www.linkedin.com/in/berktugates",
            }}
            target="_blank"
            className="bg-blue-600 text-white p-2 rounded-lg"
          >
            LinkedIn
          </Link>
        </div>
        <h1 className="mb-4 text-xl text-gray-400">Add new tasks now!</h1>
        <div className="border border-pink-600 w-1/3 p-4 rounded-lg">
          <h1 className="mb-3 font-semibold text-4xl text-pink-800 text-center">
            To-Do App
          </h1>
          <div id="input-groups" className="flex items-center justify-center">
            <AddTask
              text={text}
              setInput={setInput}
              name={"Add"}
              addTask={addTask}
            />
          </div>
          <div id="tasks" className="mt-4">
            <Tasks tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </div>
    </>
  );
}
