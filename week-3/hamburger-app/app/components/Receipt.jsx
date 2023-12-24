export default function Receipt({totalCost}) {
  return (
    <>
      <div className="bg-gray-400 mt-3 rounded-lg">
        <h1 className="text-2xl font-semibold p-3">
          Total Cost : {totalCost}£
        </h1>
      </div>
    </>
  );
}
