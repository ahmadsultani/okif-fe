import Image from "next/image";

import Footer from "@organisms/Footer";
import Navbar from "@organisms/Navbar";
import Hero from "@organisms/Hero";
import About from "@organisms/About";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
