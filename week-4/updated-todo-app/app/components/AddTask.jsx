import Input from "./Input";

export default function AddTask({ text, setInput, addTask }) {
  return (
    <>
      <Input text={text} setInput={setInput} />
      <button
        className="bg-green-600 h-16 ms-5 rounded-lg text-white w-1/3 max-w-16"
        onClick={addTask}
      >
        Add
      </button>
    </>
  );
}
