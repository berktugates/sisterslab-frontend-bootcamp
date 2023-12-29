export default function Button ({flipCoin}) {
    return (
        <>
        <button className="bg-blue-300 p-3 rounded-lg" onClick={flipCoin}>
            <p className="font-semibold text-xl text-white">Start!</p>
        </button>
        </>
    )
}