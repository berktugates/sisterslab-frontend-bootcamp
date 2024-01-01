import Task from "./Task";
export default function Tasks({ tasks, setTasks }) {
  return (
    <>
      <ul>
        {tasks.map((task, index) => {
          return (
            <Task tasks={tasks} setTasks={setTasks} task={task} index={index} />
          );
        })}
      </ul>
    </>
  );
}
