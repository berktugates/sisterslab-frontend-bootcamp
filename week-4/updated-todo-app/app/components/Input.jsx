export default function Input({ text, setInput }) {
  return (
    <>
      <input
        className="border border-pink-500 w-2/3 p-2 rounded-lg me-2"
        type="text"
        value={text}
        onChange={setInput}
      ></input>
    </>
  );
}
