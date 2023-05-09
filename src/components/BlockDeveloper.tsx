"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";

const BlockDeveloper = (user: any) => {
  const router = useRouter();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.API_URL}users`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        cache: "no-store",
      });
      if (!response.ok) {
        setIsLoading(false);
        console.log(response);
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
        router.push("developers");
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
    <Button
      isLoading={isLoading}
      loadingText="Loading"
      colorScheme="red"
      variant="outline"
      onClick={handleClick}
    >
      Block Now
    </Button>
  );
};

export default BlockDeveloper;
