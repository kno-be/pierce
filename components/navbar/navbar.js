import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

const Nav = () => {
  const [session, loading] = useSession();

  // const [open, setOpen] = React.useState(false);
  // const [flyer, setFlyer] = React.useState(false);
  // const [flyerTwo, setFlyerTwo] = React.useState(false);
  
  if (!session) {
    return (
      <div>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div class="relative flex flex-col md:flex-row">
            <a
              href="#_"
              class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                Pierce<span class="text-indigo-600">.</span>
              </span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link href="/">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              </Link>
              <Link href="/products">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Products
              </a>
              </Link>
              <Link href="/profile">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Profile
              </a>
              </Link>
              <Link href="/about">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                About
              </a>
              </Link>
            </nav>
          </div>

          <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <button onClick={() => signIn('auth0')}>  
            <a class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            > Sign in </a>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div>
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div class="relative flex flex-col md:flex-row">
          <div class="relative flex flex-col md:flex-row">
            <a
              href="#_"
              class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                Pierce<span class="text-indigo-600">.</span>
              </span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link href="/">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              </Link>
              <Link href="/products">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Products
              </a>
              </Link>
              <Link href="/profile">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Profile
              </a>
              </Link>
              <Link href="/about">
              <a
                
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                About
              </a>
              </Link>
            </nav>
          </div>
          </div>
          <div class="inline-flex items-center ml-5 space-x-6 :justify-end">
            <a
              class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
             {session.user.name}
            </a>
            <button onClick={() => signOut()} type="button" className="bg-red-700 px-2 py-1">
                  Log Out
                </button>
           
          </div>
        </div>
      </div>
      
    )
  }
};

export default Nav;
