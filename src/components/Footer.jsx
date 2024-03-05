import Image from 'next/image';
import logo from "../images/Logo.svg";
import { Button, TextField } from '@mui/material';


const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-40 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={logo} width={70} height={70} />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="px-4 flex justify-center">
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
                </li>
              </nav>
            </div>
            <div className="px-4 flex justify-center">
              <nav className="list-none mb-10">
                <li >
                  <a className="flex space-x-2 text-gray-600 hover:text-gray-800">
                  <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
                    <span>Facbook</span>
                    </a>
                </li>
                <li>
                  <a className=" flex space-x-2 text-gray-600 hover:text-gray-800">
                  <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg> 
                    <span>Twitter</span>
                    </a>
                </li>
                <li>
                  <a className="flex space-x-2 text-gray-600 hover:text-gray-800">
                    <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg> 
                <span>Instagram</span>
                 </a>
                </li>
              </nav>
            </div>
            <div className="px-4 flex justify-center">
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Subscribe to our newsletter</a>
                </li><br />
                <li classNameName='flex'>
                    <input className='border border-[#ED165F] p-2 w-[80%] outline-none' type="text" name="" id="" placeholder='Email address' />
                    <button className='bg-[#ed165f] border border-[#ed165f] hover:bg-[#c71953] text-white p-2'>OK</button>
                </li>
              </nav>
            </div>
            <div className="px-4 flex justify-center">
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-gray-800">497 Evergreen Rd. Roseville, CA 95673 <br />+998 94 056 65 07 <br />bunyodjonov@mail.com</p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container justify-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Boburmirzo Bunyodjonov —
              <a
                href="https://t.me/bunyodjonov"
                rel="Boburmirzo bunyodjonov"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @bunyodjonov
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
