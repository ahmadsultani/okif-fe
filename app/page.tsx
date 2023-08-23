import Image from "next/image";
import Footer from "./_components/organisms/Footer";
import Navbar from "./_components/organisms/Navbar";
import About from "./_components/organisms/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
