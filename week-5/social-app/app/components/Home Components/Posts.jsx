import Post from "./Post"
export default function Posts ({posts}) {
    return (
        <>
            {posts.map((post,index)=>{
                return <Post
                key={index}
                    post={post}
                    index={index}
                />
            })}
        </>
    )
}