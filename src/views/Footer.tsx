import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.webp";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className=" md:flex justify-between px-20 gap-20 bg-black py-10">
        <div className=" md:w-1/4 md:py-10 py-5">
          <h2 className=" text-white font-semibold text-2xl border-l-8 border-blue-600 pl-2">
            About Us
          </h2>
          <div className="pt-10">
            <Link href={"/"}>
              <Image src={logo} alt="panaverse-logo"></Image>
            </Link>
          </div>
          <p className=" text-gray-600 text-justify">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread
          </p>
        </div>
        <div className=" md:w-1/4 md:py-10 py-5">
          <h2 className=" text-white font-semibold text-2xl border-l-8 border-blue-600 pl-2">
            Useful Links
          </h2>
          <ul className=" pt-10 text-gray-600">
            <Link href={"/"} className="hover:text-white">
              <li>Home</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>Syllabus</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>Explore</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>About</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className=" md:w-1/4 md:py-10 py-5">
          <h2 className=" text-white font-semibold text-2xl border-l-8 border-blue-600 pl-2">
            Follow Us
          </h2>
          <ul className=" pt-10 text-gray-600">
            <Link href={"/"} className="hover:text-white">
              <li>Facebook</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>LinkedIn</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>Twitter</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>Github</li>
            </Link>
            <Link href={"/"} className="hover:text-white">
              <li>Youtube</li>
            </Link>
          </ul>
        </div>
        <div className=" md:w-1/4 md:py-10 py-5">
          <h2 className=" text-white font-semibold text-2xl border-l-8 border-blue-600 pl-2">
            Contact Us
          </h2>
          <ul className=" pt-10 text-gray-600">
            <div className=" flex items-center">
              <AiOutlinePhone></AiOutlinePhone>
              <li>+92 333 4632943</li>
            </div>
            <div className=" flex items-center">
              <AiOutlineMail></AiOutlineMail>
              <li className=" pl-2">abdulmanan4d@gmail.com</li>
            </div>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className=" md:justify-between md:flex px-20 py-5 bg-gray-100">
        <div className=" font-bold">
          All Rights Reserved © | <br className=" md:hidden"></br> Abdul Manan
        </div>
        <div>Legals | Terms of use | Privacy Policy</div>
      </div>
    </>
  );
}
