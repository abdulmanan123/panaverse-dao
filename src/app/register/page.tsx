"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/");
    }
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
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
      const response = await fetch(`/api/register`, {
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

        router.push("/login");
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
        src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={700}
        height={300}
      />

      <div className="card">
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-900">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={form.firstName}
            required
            onChange={handleChange}
          />

          <label className="block text-sm font-medium text-gray-900">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={form.lastName}
            required
            onChange={handleChange}
          />

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
            Register
          </button>
        </form>
      </div>
    </section>
  );
};
export default Register;
