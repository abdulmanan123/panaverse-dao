"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  if (localStorage.getItem("user")) {
    router.push("/");
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result = await response.json();

      if (result.success) {
        //alert(result.message);
        console.log("result.user", result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        router.push("/");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className="container min-h-screen grid grid-cols-[auto,1fr] gap-8 items-center">
      <Image
        src="https://images.pexels.com/photos/3585091/pexels-photo-3585091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={700}
        height={300}
      />

      <div className="card">
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            required
            onChange={handleChange}
          />

          <label className="block text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            required
            onChange={handleChange}
          />

          <button type="submit" className="link signup-link">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;
