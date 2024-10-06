"use client"
import Link from "next/link"
import Typewriter from 'typewriter-effect';
import Button from "./button";

export default function Nav () {
    return (
        <div>

            <header>

            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row bg-zinc-500 ">
           <a className="flex titlefont font-medium items-center text-white-900 md:4 md:mb-0">
            <img
              src={("../images/my pic.jpg")}
              alt="my logo"
              width={100}
              height={100}
              className="w-[50px]"
             />
            
            <span className="ml-3 text-md font-serif text-white"> Sumera Imran</span></a>

           <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-white justify-center">
              
            <Link className="ml-2 mr-5 hover:text-red-500"href={"http://localhost:3000/"}>Home</Link>
            <Link className="ml-2 mr-5 hover:text-blue-500"href={"http://localhost:3000/aboutus"}> About us</Link>
            <Link className="ml-2 mr-5 hover:text-green-500"href={"http://localhost:3000/contactus"}> Contact us</Link>
            <Link className="ml-2 mr-5 hover:text-pink-500"href={"http://localhost:3000/privacypolicy"}>Privacy Policy</Link>
        
            </nav>


            {/*Buttons*/}

            <div className="flex space-x-4 mt-3 md:mt-1 ">
              <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
                Login
              </button>

              <button className="inline-flex items-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
                Sign up
              </button>
              
            </div>
            </div>
            </header>


            {/**Hero Section */}



            <section className="bg-pink-300 text-gray-600 body-font"/>
  <div className ="flex justify-center bg-slate-500">
  <img src="images/avator.jpg" alt="avatar" className ="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
</div>

    <div className="text-center lg:w-2/3 w-full">
    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-blue-900 font-serif">Sumera Imran</h1>
     </div>
     {/**typewriter Effect */}

     
     
     <h1 className="text-center title-font sm:text-2xl text-xl mb-4 font-medium text-blue-900 font-serif">
     <Typewriter
  options={{
    strings: ['i m Web Developer','Governor It course ','2nd Quarter','Thursday 9 to 5 '],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
     
     
     <p className="text-center mb-8 leading-relaxed">
        Enhance your skills,Create stunning websites,
        and excel in the World Of Web Development.Enroll now !
      </p>

{/**Button */}


<button className="ml-8 inline-flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start now</button>
<button className="ml-8 inline-flex text-white bg-slate-600 border-0 py-3 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg">Take tour</button>
      


    
          {/**Blogs */} 
 
          <section className="text-gray-600 body-font">
          <div className="bg-black text-stone-50 container px-6 py-20 mx-30">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Sumera Imran</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Software Engineer Professional</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">A Software Engineering Specialist is a professional with advanced knowledge and expertise in specific areas of software development. They often focus on particular technologies, methodologies, or aspects of software engineering.</p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-2xl text-white font-serif title-font mb-2">Software Engineer</h2>
                <p className="leading-relaxed text-base mb-4">Programming Languages: Proficiency in languages like Python, Java, C++, JavaScript, or Ruby.</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-2xl text-white font-serif title-font mb-2">HTML & CSS</h2>
                <p className="leading-relaxed text-base mb-4">Developing proficiency in these areas will help you create well-structured, visually appealing, and responsive web pages.</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-2xl text-white font-serif title-font mb-2">TypeScript</h2>
                <p className="leading-relaxed text-base mb-4">Building expertise in these areas will enhance your ability to write robust, maintainable, and scalable applications using TypeScript.</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-2xl text-white font-serif title-font mb-2">Interpersonal Skills</h2>
                <p className="leading-relaxed text-base mb-4">Strong interpersonal skills are vital for building relationships, fostering teamwork, enhancing collaboration, and creating a positive work environment. They contribute to personal and professional success, leading to better communication, increased productivity, and improved workplace morale. Developing these skills can significantly enhance your interactions with colleagues, clients, and stakeholders.</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          </div>
        </section>

                               {/** Footer */}


                               <footer className="text-gray-600 body-font">

                                
                                
  
          
        
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Newsletter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Subscribe Now</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
          <br className="lg:block hidden"/>
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-sky-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Sumera imran —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@youtube.com</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Copyright@ All Rights Reserved</span>
    </div>
  </div>
</footer>


 </div>
        )}