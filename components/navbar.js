"use client"
import React from 'react'

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
// import { useUser } from '@clerk/nextjs';

export default function Navbar() {
//   const user = useUser();
// console.log(user);

return (

<nav className="bg-gray-800 p-4">

<div className="container mx-auto flex justify-between items-center">

<Link href="/" className="text-white font-bold text-xl">

COMMNEXT

</Link>

<div className="flex space-x-4">

<Link href="/" className="text-gray-300 hover:text-white">

Home

</Link>

<Link href="/forums" className="text-gray-300 hover:text-white">

Forums

</Link>



<Link href="/chat" className="text-gray-300 hover:text-white">

userchat

</Link>
<li>
  <UserButton />
</li>

</div>

</div>

</nav>

);

}