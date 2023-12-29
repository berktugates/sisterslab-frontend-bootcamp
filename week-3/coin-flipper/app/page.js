"use client";
import { useState } from "react";
import Coins from "./components/Coins";
import Button from "./components/Button";
import Stats from "./components/Stats";
export default function Home() {
  const [head, setHead] = useState(0);
  const [tail, setTail] = useState(0);
  const luck = Math.floor(Math.random() * 10) + 1;
  const [headState, setHeadState] = useState(false);
  const [tailState, setTailState] = useState(false);

  const flipCoin = () => {
    if (luck % 2 == 0) {
      setHead(head + 1);
      setHeadState(true);
      setTailState(false);
    } else {
      setTail(tail + 1);
      setTailState(true);
      setHeadState(false);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
          <div id="coin-img" className="flex mb-4">
            <Coins headState={headState} tailState={tailState} />
          </div>
          <div
            id="button-and-stats"
            className="flex flex-col items-center justify-center"
          >
            <Stats head={head} tail={tail} />
            <Button flipCoin={flipCoin} />
          </div>
      </div>
    </>
  );
}
