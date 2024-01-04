"use client";
import { Card } from "flowbite-react";
export default function PostDetail({ p }) {
    const tags = [];
    p.tags.map((i)=>{
        tags.push(i);
    })
  return (
    <>
      <div className="flex justify-center items-center p-2 w-2/3">
        <Card className="bg-yellow-400 p-4">
          <h1 className="text-3xl mb-3 text-blue-600 font-bold">#{p.id}</h1>
          <h5 className="text-3xl font-bold tracking-tight text-gray-900">
            {p.title}
          </h5>
          <p className="font-normal text-lg  text-gray-700">{p.body}</p>
          <ul className="flex mt-4">
            {tags.map((tag,index)=>{
                return( 
                <li className="bg-blue-600 text-white me-2 p-1.5 rounded-lg" key={index}>#{tag}</li>
                )
            })}
          </ul>
        </Card>
      </div>
    </>
  );
}
