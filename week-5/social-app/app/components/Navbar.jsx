import Link from "next/link";
export default function Navbar () {
    return(
        <>
        <div className="flex items-center justify-around bg-yellow-400 p-2 mb-3">
            <span className="font-bold text-3xl">Social-App</span>
            <ul className="flex gap-3 font-medium">
                <li>Home</li>
                <li><Link href={{
                    pathname:"https://www.linkedin.com/in/berktugates/"
                }} target="_blank">LinkedIn</Link></li>
                <li><Link href={{
                    pathname:"https://github.com/berktugates"
                }} target="_blank">GitHub</Link></li>
            </ul>
        </div>
        </>
    )
}
