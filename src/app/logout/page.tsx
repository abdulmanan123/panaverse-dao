"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  localStorage.removeItem("user");
  router.push("/login");

  return true;
}
