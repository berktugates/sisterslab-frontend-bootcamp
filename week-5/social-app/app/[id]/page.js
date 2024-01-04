"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PostDetail from "../components/Detail Components/PostDetail";
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
        <Navbar/>
        <div className="flex justify-center">
          {post.map((p, index) => {
            return <PostDetail key={index} p={p} />;
          })}
        </div>
    </>
  );
}
