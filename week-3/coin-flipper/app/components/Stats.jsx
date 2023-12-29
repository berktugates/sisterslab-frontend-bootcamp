export default function Stats ({head,tail}) {
    return(
        <>
            <div className="bg-gray-200 mb-4 p-4 text-center rounded-lg">
                <h1 className="text-3xl font-semibold border-b-2 border-black">Stats</h1>
                <p className="text-xl mt-2 font-medium">Head : {head}</p>
                <p className="text-xl mt-2 font-medium">Tails : {tail}</p>
            </div>
        </>
    )
}