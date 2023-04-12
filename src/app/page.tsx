"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
  } else {
    router.push("/login");
  }

  return <div className="flex">Hello world</div>;
}
