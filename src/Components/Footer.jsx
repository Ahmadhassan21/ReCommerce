import React from 'react'
import { FaAmazon } from "react-icons/fa";
const Footer = () => {
  return (
    <>
  <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <FaAmazon className='text-4xl text-indigo-700'/>
        <span className="ml-3 text-xl">ReCommerce</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Shop smarter with ReCommerce – your one-stop shop for premium electronics and gadgets.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SHOP</h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-400 hover:text-white" href="#">Laptops</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Smartphones</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Accessories</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Deals</a></li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-400 hover:text-white" href="#">About Us</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Careers</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Blog</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">HELP</h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-400 hover:text-white" href="#">Shipping</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Returns</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">FAQs</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Support</a></li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">LEGAL</h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-400 hover:text-white" href="#">Privacy Policy</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Terms of Use</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Cookies</a></li>
          <li><a className="text-gray-400 hover:text-white" href="#">Security</a></li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© {new Date().getFullYear()} ReCommerce —
        <a href="https://github.com/ahmadhassan21" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@ahmadhassan21</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-400" href="#"><svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
        <a className="ml-3 text-gray-400" href="#"><svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg></a>
        <a className="ml-3 text-gray-400" href="#"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /></svg></a>
        <a className="ml-3 text-gray-400" href="#"><svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx={4} cy={4} r={2} stroke="none" /></svg></a>
      </span>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
