const LocationCard = ({name,type,dimension,url}) => {
  return (
    <>
        <div className="rounded-lg bg-cardColor border-2 border-border shadow-2xl mt-4 ">
            <div className="p-5 flex flex-col">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Type : {type}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Dimension : {dimension}</p>
            </div>
        </div>

    </>
  )
}

export default LocationCard