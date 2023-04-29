"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import Header from "./Header";
import Price from "./Price";
import { ChakraProvider } from "@chakra-ui/react";
import Traits from "./Traits";


export default function Home() {
  return (
    <ChakraProvider>
      <Header/>
      <Price/>
      <Traits/>
      </ChakraProvider>
  )
}
