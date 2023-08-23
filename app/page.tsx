import Navbar from "@/_components/organisms/Navbar";
import ProkerSection from "@/_components/organisms/ProkerSection";
import Footer from "@/_components/organisms/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <ProkerSection />
      <Footer />
    </main>
  );
}
