import Footer from "@organisms/Footer";
import Navbar from "@organisms/Navbar";
import Hero from "@organisms/Hero";
import About from "@organisms/About";
import ProkerSection from "@organisms/ProkerSection";
import ArticleSection from "@organisms/ArticleSection";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col">
      <Hero />
      <About />
      <ProkerSection />
      <ArticleSection />
    </main>
  );
}
