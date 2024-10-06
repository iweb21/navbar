import Link from "next/link"
import Button from './button';


export default function About () {
    return (
      <div className="flex justify-center items-center h-screen bg-green-200 px-20">
     
     
     <div className="space-y-5 bg-green-400 p-5 rounded-lg font-serif">
        <h1 className="text-4xl text-center font-bold ">  About us Page </h1>
        
        
        <p className="text-2xl text-justify">Software Developer with Graduate Degree from University of Karachi along with
           the experience of around 15 years in website designing and development currently known as Web Designer with diverse skills.</p>
      <div>
        <Link href = {"/"}>
        
        <button/>
        </Link>
        
        <Link href="/">
          <Button props="Home" />
        </Link>

        
      </div>
      </div>
      </div>
      
    )
  }