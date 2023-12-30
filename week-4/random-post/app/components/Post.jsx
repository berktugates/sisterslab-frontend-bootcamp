export default function Post({ visibility, post }) {
  if (visibility === true) {
    return (
      <div className="bg-gray-800 border-gray-700 hover:bg-gray-700 p-6 rounded-lg w-1/2 mt-4">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {post.title}
          </h5>
          <p className="font-normal text-gray-400">{post.body}</p>
        </a>
      </div>
    );
  } else {
    return (
      <div className="bg-blue-400 p-4 rounded-lg mt-4">
        <h1 className="font-semibold text-xl">Let's Generate Your Post!</h1>
      </div>
    );
  }
  return;
  <></>;
}
