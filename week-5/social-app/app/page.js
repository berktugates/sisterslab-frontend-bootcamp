"use client";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import axios from "axios";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

export default function Home() {
  const baseUrl = "https://dummyjson.com/posts";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="grid grid-rows-5 grid-cols-6 gap-3 p-10">
            <Posts posts={posts} />
          </div>
        </div>
      )}
    </>
  );
}
