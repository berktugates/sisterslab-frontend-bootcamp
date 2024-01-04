import { useRouter } from "next/navigation";

export default function Button({name,index}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${index}`)
  }
  return (
    <>
        <button className="float-right mt-2 p-2 bg-yellow-400 rounded-lg" onClick={handleClick}>
          <h1 className="font-medium">{name}</h1>
        </button>
    </>
  )
}
