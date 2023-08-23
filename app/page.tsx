import Image from "next/image";
import Footer from "@organisms/Footer";
import Navbar from "@organisms/Navbar";
import Hero from "@organisms/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen">
        <Navbar />
        <Hero />
        <Footer />
    </main>
  );
}
