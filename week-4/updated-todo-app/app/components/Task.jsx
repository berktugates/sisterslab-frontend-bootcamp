import { useState } from "react";

export default function Task({ tasks, setTasks, index, task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedText, setUpdatedText] = useState("");
  const deleteTask = () => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const updateTask = () => {
    const newTasks = [...tasks];
    newTasks[index] = updatedText;
    setTasks(newTasks);
    setIsEdit(false);
  };
  return (
    <>
      <li key={index} className="bg-pink-700 mb-2 p-3 rounded-lg text-white">
        {isEdit ? (
          <div className="flex">
            <input
              type="text"
              className="text-black p-1 rounded-lg"
              placeholder={task}
              onChange={(e) => {
                setUpdatedText(e.target.value);
              }}
            ></input>
            <button
              className="bg-orange-600 h-16 ms-5 rounded-lg text-white w-1/3 max-w-16"
              onClick={updateTask}
            >
              Edit
            </button>
            <button
              className="bg-red-600 h-16 ms-5 rounded-lg text-white w-1/3 max-w-16"
              onClick={() => {
                setIsEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex ">
            <p className="me-2 w-2/3 flex items-center">{task}</p>
            <button
              className="bg-orange-600 h-16 ms-5 rounded-lg text-white  p-2"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </button>
            <button
              className="bg-red-600 h-16 ms-5 rounded-lg text-white p-2 "
              onClick={deleteTask}
            >
              Delete
            </button>
          </div>
        )}
      </li>
    </>
  );
}
