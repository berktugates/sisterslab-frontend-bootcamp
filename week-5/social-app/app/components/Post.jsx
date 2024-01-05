"use client";
import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import Skeleton from "./Skeleton.jsx";
export default function Post({
  post,
  index,
  title,
  description,
  isHome,
  isButton,
  className,
}) {
  const [skeleton, setSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className={className}>
        {skeleton ? (
          <Skeleton />
        ) : (
          <div>
            <h1 className="text-blue-700 text-2xl font-medium mb-2">
              {isHome ? <span>#{index}</span> : <span>#{index + 1}</span>}
            </h1>
            <h1 className="text-xl font-semibold p-2">{title}</h1>
            <hr />
            <p className="p-2">{description}</p>
            {isButton ? (
              <Button name={"Read More"} index={index} post={post} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
