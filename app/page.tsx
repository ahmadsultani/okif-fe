import Footer from "@organisms/Footer";
import Navbar from "@organisms/Navbar";
import Hero from "@organisms/Hero";
import About from "@organisms/About";
import ProkerSection from "@organisms/ProkerSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <Hero />
      <About />
      <ProkerSection />
      <Footer />
    </main>
  );
}
