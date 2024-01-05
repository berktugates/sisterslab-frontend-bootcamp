import Post from "./Post";
export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post, index) => {
        const title = post.title;
        const description = post.body;
        return (
          <Post
            key={index}
            post={post}
            title={title}
            description={`${description.substring(0, 200)}...`}
            index={index + 1}
            isHome={true}
            isButton={true}
            className={"bg-gray-100 mb-2 p-3 rounded-lg shadow-lg"}
          />
        );
      })}
    </>
  );
}
