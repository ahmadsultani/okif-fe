import Image from "next/image";
import Footer from "@organisms/Footer";
import Navbar from "@organisms/Navbar";
import About from "@organisms/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
