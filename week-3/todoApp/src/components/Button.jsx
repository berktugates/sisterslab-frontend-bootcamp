const Button = ({name, onClick}) => {
    return (
        <>
            <button className="bg-pink-600 p-2 rounded-lg text-white" onClick={onClick}>{name}</button>
        </>
    )
}

export default Button