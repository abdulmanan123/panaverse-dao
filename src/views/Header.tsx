"use client";

import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../public/logo.webp";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");

  // let isLogin = false;
  // let isAdmin = false;
  // let userName = "";
  useEffect(() => {
    let user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      user = JSON.parse(user);
      // isLogin = true;
      setIsLogin(true);
      if (user.role == "admin") {
        // isAdmin = true;
        setIsAdmin(true);
      }
      // userName = user.name;
      setUserName(user.name);
    }
  }, []);

  return (
    <div className=" flex justify-between items-center px-[20px] md:px-[60px] py-4 w-full absolute">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="panaverse-logo"></Image>
        </Link>
      </div>
      <div className=" md:flex items-center space-x-12 text-lg font-semibold hidden">
        <Link href={"blog"} className="hover:text-blue-600">
          Blog
        </Link>
        {isAdmin && (
          <Link href={"developers"} className="hover:text-blue-600">
            Developers
          </Link>
        )}
        {isLogin && (
          <Link href={"logout"} className="hover:text-blue-600">
            Logout
          </Link>
        )}

        {!isLogin && (
          <Link href={"login"} className="hover:text-blue-600">
            Login
          </Link>
        )}
        {!isLogin && (
          <div>
            <button className=" bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-900 text-white font-bold">
              <Link href={"register"} className="hover:text-blue-600">
                Register
              </Link>
            </button>
          </div>
        )}
        {isLogin && (
          <div>
            <button className=" bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-900 text-white font-bold">
              {userName}
            </button>
          </div>
        )}
      </div>
      <div className=" md:hidden text-3xl items-center">
        <HiMenu></HiMenu>
      </div>
    </div>
  );
}
