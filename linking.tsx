import Link from "next/link";

export default function Home () {
    return (
        <div>

<link className="ml-2 mr-5 hover:text-red-500"href={"http://localhost:3000/"}>Home</link>
            <link className="ml-2 mr-5 hover:text-blue-500"href={"http://localhost:3000/aboutus"}> About us</link>
            <link className="ml-2 mr-5 hover:text-green-500"href={"http://localhost:3000/contactus"}> Contact us</link>
            <link className="ml-2 mr-5 hover:text-pink-500"href={"http://localhost:3000/privacypolicy"}>Privacy Policy</link>
        </div>
    )
}