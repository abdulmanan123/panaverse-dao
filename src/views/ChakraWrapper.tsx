"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function ChakraWrapper({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
