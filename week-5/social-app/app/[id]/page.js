"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

export default function Details({ params }) {
  const id = params.id;
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((response) => {
        setPost([response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        {post.map((p, index) => {
          console.log(index);
          const tags = [];
          p.tags.map((i) => {
            tags.push(i);
          });
          const id = p.id;
          const title = p.title;
          const description = p.body;
          console.log(p);
          return (
            <Post
              key={index}
              index={id - 1}
              title={title}
              description={description}
              isButton={false}
              className={"bg-gray-100 mb-2 p-3 rounded-lg shadow-lg w-2/3"}
            />
          );
        })}
      </div>
    </>
  );
}
