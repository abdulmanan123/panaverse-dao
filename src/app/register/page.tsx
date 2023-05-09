"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, useToast } from "@chakra-ui/react";

const Register = () => {
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/");
    }
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    designation: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
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
        setIsLoading(false);
        throw new Error("Something went Wrong");
      }

      const result = await response.json();

      setIsLoading(false);
      toast({
        title: result.message,
        position: "top-right",
        status: result.success ? "success" : "error",
      });

      if (result.success) {
        router.push("/login");
      }
    } catch (error) {
      setIsLoading(false);
      alert(error);
      // toast({
      //   title: error,
      //   position: "top-right",
      //   status: "error",
      // });
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
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
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
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter Company Name"
            value={form.companyName}
            required
            onChange={handleChange}
          />

          <label className="block text-sm font-medium text-gray-900">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            value={form.designation}
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

          {/* <button type="submit" className="link signup-link">
            Register
          </button> */}

          <Button
            type="submit"
            isLoading={isLoading}
            loadingText="Loading"
            colorScheme="teal"
            variant="outline"
          >
            Register
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Register;
