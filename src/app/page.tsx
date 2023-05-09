"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Main from "@/views/Main";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     console.log("user", user);
  //   } else {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <main>
      <Main></Main>
    </main>
  );
}
