import Button from './button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-purple-300 h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-bold">Home Page</h1>

      <div className='space-x-5'>
        <Link href="/aboutus">
          <Button props="About Us" />
        </Link>

        <Link href="/contactus">
          <Button props="Contact us" />
        </Link>

        <Link href="/privacypolicy">
          <Button props="Privacy Policy" />
        </Link>
      </div>
    </div>




         



  );
}