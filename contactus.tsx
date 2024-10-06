import Link from "next/link"
import Button from './button';

export default function Contact () {
    return (
      <div className="bg-green-300 flex justify-center items-center h-screen">
       
        <div className="space-y-7 bg-blue-500 p-4 rounded-lg">
        <h1 className="text-center text-3xl text-white font-bold font-serif"> Contact us </h1>
        
        <form className="flex flex-col gape-5 text-xl">
          <input type="text" 
          className="p-2 outline-none rounded-md"
          placeholder="Your Name"
          />

          <input type="email" 
          className="p-2 outline-none rounded-md"
          placeholder="Your Email Address" 
          />

          <textarea
          className="p-2 outline-none rounded-md resize-none"
          placeholder="Your Message"
          ></textarea>

          <input type="submit"value = "Submit"
          className="bg-orange-400 text-white cursor-pointer transition-all duration-100 hover:bg-orange-500 py-2 rounded-md"
          />


        </form>
      
        <Link href="/">
          <Button props="Home" />
        </Link>

        <div>
        <Link href = {"/"}>
        <button/>
        </Link>
        </div>
      </div>
      </div>
    )
  }