import Button from "./Button.jsx";  
export default function Post ({post,index}) {
    return (
        <>
            <div className="bg-gray-100 mb-2 p-3 rounded-lg shadow-lg">
                <h1 className="text-blue-700 text-2xl font-medium mb-2">#{index+1}</h1>
                <h1 className="text-xl font-semibold p-2">{post.title}</h1>
                <hr />
                <p className="p-2">{post.body}</p>
                <Button
                    name={"Read More"}
                />
            </div>
        </>
    )
}