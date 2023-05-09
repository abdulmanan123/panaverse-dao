import Image from "next/image";
import React, { useState, useEffect } from "react";
// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Developers = () => {
  const [users, setUsers] = useState([]);
  // const { users, error } = useSWR("/api/users", fetcher);

  useEffect(() => {
    // Fetch data or perform any other side effect
    fetch(`/api/users`, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // if (error) return <div>Failed to load</div>;
  // if (!users) return <div>Loading...</div>;

  return (
    <>
      <h1 className=" text-center font-bold text-5xl">Our Instructors</h1>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-5 w-[70%] m-auto py-10">
        {users.map((user: any, index: number) =>
          user.status ? (
            <div key={user.id} className=" shadow-2xl py-5 px-10 rounded-2xl">
              <Image
                src={"/images/zia.webp"}
                alt="saylani"
                width={100}
                height={100}
                className=" block mx-auto rounded-full"
              ></Image>
              <div className=" text-center ">
                <h2 className=" text-lg font-bold">{user.name}</h2>
                <h2 className=" font-semibold text-gray-600">
                  {user.designation} {user.company_name}
                </h2>
                <button className=" hover:bg-blue-600 hover:text-white bg-white font-semibold border-blue-600 border px-4 py-1 text-blue-600 rounded-full">
                  View Profile
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default Developers;
