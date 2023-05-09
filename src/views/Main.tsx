"use client";

import Image from "next/image";
import React from "react";
import Developers from "@/views/Developers";

export default function Main() {
  return (
    <>
      {/* banner */}
      <div className='bg-[url("/images/bg.jpg")] jus text-center md:px-[200px] px-[100px] py-[200px] gap-10 rounded-b-[30%]'>
        <h1 className=" font-bold text-6xl">
          Prepare yourself for the Next Generation of Internet with{" "}
          <span className=" text-blue-600">Panaverse</span>
        </h1>
        <p className=" py-6 text-lg">
          One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
          3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
          Computing/IoT Technologies
        </p>
        <button className=" bg-blue-500 text-lg font-semibold hover:bg-blue-900 px-4 py-2 rounded-xl text-white">
          MORE INFO
        </button>
      </div>

      {/* logos */}
      <div className=" bg-white grid md:grid-cols-3 w-[70%] m-auto justify-center gap-4 items-center shadow-2xl px-10 py-10 rounded-2xl -mt-[70px]">
        <Image
          src={"/images/logo.webp"}
          alt="saylani"
          width={150}
          height={150}
        ></Image>
        <Image
          src={"/images/cloud.svg"}
          alt="saylani"
          width={150}
          height={150}
        ></Image>
        <Image
          src={"/images/saylani.webp"}
          alt="saylani"
          width={150}
          height={150}
        ></Image>
      </div>

      {/* programs of study */}
      <div className=" md:flex items-center">
        <div className=" md:w-1/2 justify-center grid">
          <Image
            src={"/images/persons.png"}
            alt="saylani"
            width={400}
            height={400}
          ></Image>
        </div>
        <div className=" md:w-1/2 py-10 md:text-left text-center">
          <h1 className=" font-bold text-5xl md:border-l-8 border-blue-600 pl-2">
            Program Of Studies
          </h1>
          <p className=" py-6 text-lg md:pr-20">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. It is going to be a
            fifteen-month-long hybrid program that includes both onsite and
            online classes and is divided into five quarters of 13 weeks each.
            The emphasis will be on hands-on learning by educating students to
            produce projects.
          </p>
          <button className=" bg-blue-500 text-1xl hover:bg-blue-900 px-4 py-2 rounded-xl text-white">
            Read More
          </button>
        </div>
      </div>

      {/* our instructors */}
      <Developers></Developers>

      {/* bootcamp */}
      <div className=" grid md:grid-cols-2 py-5">
        <div className=" bg-[url('/images/people.jpg')] bg-cover w-full"></div>
        <div className=" px-5 md:text-left text-center">
          <h1 className=" font-bold text-5xl md:border-l-8 border-blue-600 pl-2">
            Bootcamp 2023
          </h1>
          <p className=" py-6 text-lg md:pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            officiis, labore perferendis eius eos recusandae voluptatum suscipit
            at, architecto impedit tempora excepturi nostrum odio, blanditiis
            numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt officiis, labore perferendis
            eius eos recusandae voluptatum suscipit at, architecto impedit
            tempora excepturi nostrum odio, blanditiis numquam veniam fugiat
            voluptatem delectus!
          </p>
          <button className=" bg-blue-500 text-1xl hover:bg-blue-900 px-4 py-2 rounded-xl text-white">
            Read More
          </button>
        </div>
      </div>

      {/* programs of study */}
      <div className=" md:flex items-center bg-gray-200">
        <div className=" md:w-1/2 py-10 md:text-left md:pl-5 text-center">
          <h1 className=" font-bold text-5xl md:border-l-8 border-blue-600 md:pl-2">
            Program Of Studies
          </h1>
          <p className=" py-6 text-lg">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. It is going to be a
            fifteen-month-long hybrid program that includes both onsite and
            online classes and is divided into five quarters of 13 weeks each.
            The emphasis will be on hands-on learning by educating students to
            produce projects.
          </p>
          <button className=" bg-blue-500 text-1xl hover:bg-blue-900 px-4 py-2 rounded-xl text-white">
            Read More
          </button>
        </div>
        <div className=" md:w-1/2 justify-center grid">
          <Image
            src={"/images/persons.png"}
            alt="saylani"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>

      {/* get started */}
      <div className=" text-white sm:w-[70%] bg-slate-200 text-center m-auto px-[50px] sm:px-[120px] py-[100px] rounded-2xl gap-5 grid bg-gradient-to-br from-[#2a4ce5] via-[#9651cf] to-[#3FCBFF] mt-6">
        <h1 className=" text-4xl font-bold">Get started today</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat
          ipsum exercitationem officiis tempore illo reiciendis rem.
          Voluptatibus sint facilis ullam dicta, ducimus vitae officia voluptate
          labore est debitis minima.
        </p>
        <button className=" text-2xl px-4 py-2 rounded-xl text-white border hover:bg-blue-600">
          Read More
        </button>
      </div>

      {/* cities */}
      <div className=" mt-6 grid md:grid-cols-4 sm:grid-cols-2">
        <div className="bg-[url('/images/karachi.jpg')] text-white bg-cover h-[400px] py-4 px-2">
          <h1 className=" font-bold text-4xl border-l-8 border-blue-600 pl-2">
            Karachi
          </h1>
          <p className=" pt-[250px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed unde
            iste suscipit adipisci
          </p>
        </div>
        <div className="bg-[url('/images/lahore.jpg')] text-white bg-cover h-[400px] py-4 px-2">
          <h1 className=" font-bold text-4xl border-l-8 border-blue-600 pl-2">
            Lahore
          </h1>
          <p className=" pt-[250px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed unde
            iste suscipit adipisci
          </p>
        </div>
        <div className="bg-[url('/images/kpk.jpg')] text-white bg-cover h-[400px] py-4 px-2">
          <h1 className=" font-bold text-4xl border-l-8 border-blue-600 pl-2 text-black">
            Peshawar
          </h1>
          <p className=" pt-[250px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed unde
            iste suscipit adipisci
          </p>
        </div>
        <div className="bg-[url('/images/islamabad.jpg')] text-white bg-cover h-[400px] py-4 px-2">
          <h1 className=" font-bold text-4xl border-l-8 border-blue-600 pl-2">
            Islamabad
          </h1>
          <p className=" pt-[250px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed unde
            iste suscipit adipisci
          </p>
        </div>
      </div>
    </>
  );
}
