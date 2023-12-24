export default function Button({ name }) {
  return (
    <>
      <button className="bg-orange-500 mb-2 p-2 text-white rounded-lg ms-2">
        {name}
      </button>
    </>
  );
}
