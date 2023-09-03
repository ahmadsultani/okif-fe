import Footer from "@organisms/Footer";
import Navbar from "@organisms/Navbar";
import DetailArticle from "@organisms/DetailArticle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <DetailArticle />
      <Footer />
    </main>
  );
}
