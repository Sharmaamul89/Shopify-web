import CategoryGrid from "@/components/Category";
import Header from "@/components/Header";

import Headertop from "@/components/Headertop";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1></h1>
      <Headertop/>
      <Header/>
      <Navbar/>
      <Hero/>
      <CategoryGrid/>
    </div>
  );
}
