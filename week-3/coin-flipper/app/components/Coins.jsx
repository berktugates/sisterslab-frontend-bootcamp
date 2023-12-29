import Image from "next/image";
import Head from "../../public/head.png";
import Tail from "../../public/tail.png";

export default function Coins({ headState, tailState }) {
  if (headState === false && tailState === false) {
    return (
      <div className="flex">
        <Image src={Head} alt="head.png" className="me-2" />
        <Image src={Tail} alt="tail.png" />
      </div>
    );
  } else if (headState === true) {
    return <Image src={Head} alt="head.png" className="me-2 animate-bounce " />;
  } else if (tailState === true) {
    return <Image src={Tail} alt="tail.png" className="animate-bounce" />;
  }
  return <></>;
}
