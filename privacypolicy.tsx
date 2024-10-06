import Button from './button';
import Link from 'next/link';


export default function Privacypolicy () {
    return (

      
      <div className="flex justify-center items-center h-screen bg-green-400 px-20">
      
      <div>
      <div className="space-y-5 bg-green-300 p-5 rounded-lg font-serif">
        <h1 className="text-3xl text-center font-bold font-serif"> Your Protection is Critical to us</h1>
       
        <p className="text-2xl text-justify items-center">  we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [website URL], or use our services. Please read this Privacy Policy carefully.
      </p>
      </div>
      
      
      
</div>

      <div className='space-y-12 flex justify-center items-center'>
  
  <Link href="/">
    <Button props="Home" />
  </Link>

   
      </div>
      </div>
      
      
    )
}

  
