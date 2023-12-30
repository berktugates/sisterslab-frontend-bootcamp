"use client";
import { useState } from "react";
import axios from "axios";
import Post from "./components/Post";
import Button from "./components/Button";

export default function Home() {
  const [post, setPost] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const baseURL = `https://dummyjson.com/posts`;

  const generatePost = () => {
    if (visibility === false) {
      const generate = Math.floor(Math.random() * 10) + 1;
      axios
        .get(`${baseURL}/${generate}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  return (
    <>
      <div
        id="body"
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-semibold my-4">Random Post App</h1>
        <Button name="Generate Post" generatePost={generatePost} />
        <Post post={post} visibility={visibility} />
      </div>
    </>
  );
}
