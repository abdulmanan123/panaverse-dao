// "use client";
import Image from "next/image";
import React from "react";
import ActiveDeveloper from "@/components/ActiveDeveloper";
import BlockDeveloper from "@/components/BlockDeveloper";

// const handleClick = (user: any) => {
//   console.log("user", user);
// };

async function getUsers() {
  const response = await fetch(`${process.env.API_URL}users`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.log("Failed to fetch data");
  }

  return response.json();
}

// export default async function Developers() {
const Developers = async () => {
  const users = await getUsers();
  // console.log("users", users);

  return (
    <>
      <div className="container">
        <h1 className=" text-center font-bold text-5xl mb-5">Developers</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light border-spacing-1">
                  <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Company Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Designation
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user: any, index: number) =>
                      user.role == "developer" ? (
                        <tr
                          key={user.id}
                          className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.company_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.designation}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.status ? (
                              <span>Active</span>
                            ) : (
                              <span>In Active</span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {/* onClick={() => this.updateStatus(user)} */}
                            {user.status ? (
                              <BlockDeveloper user={user}></BlockDeveloper>
                            ) : (
                              <ActiveDeveloper user={user}></ActiveDeveloper>
                            )}
                          </td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
