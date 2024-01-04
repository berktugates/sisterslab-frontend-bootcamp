"use client";
import { useEffect, useState } from "react";
import Posts from "./components/Home Components/Posts";
import axios from "axios";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const baseUrl = "https://dummyjson.com/posts";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="grid grid-rows-5 grid-cols-6 gap-3 p-10">
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
}
