import Navbar from "@organisms/Navbar";
import Footer from "@organisms/Footer";
import ProkerCard from "@molecules/ProkerCard";
import PrimaryButton from "@atoms/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

function ArticlePage() {
  return (
    <main>
        <Navbar />
        <main className="w-screen h-fit flex flex-col gap-10 py-14 px-16">
          <section className="flex justify-between">
            <span className="text-heading-l font-bold">Artikel Kegiatan</span>
            <section className="px-[15px] w-80 h-12 flex content-center justify-between rounded shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)]">
              <input
                 type="text"
                 placeholder="Search"
                 className="focus:outline-none text-heading-s"
              />
              <Image
                width={24}
                height={24}
                src="/icon/Iconsearch.svg"
                alt=""
              />
            </section>
          </section>
          
          <Link href={"/"}>
            <section className="flex">
              <ProkerCard
                largeSize={true}
                src="/image/code.webp"
                title="CODE (Community Dedication)"
                description="Pengembangan potensi mahasiswa untuk turut serta dalam pengabdian kepada masyarakat dengan..."
              />
            </section>
          </Link>
          
          <Link href={"/"}>
            <section className="flex">
              <ProkerCard
                largeSize={true}
                src="/image/basictraining.webp"
                title="BASIC TRAINING XCII"
                description="Kegiatan Basic Training ke-92 HMI Komisariat Teknik Unhas Cabang Makassar Timur."
              />
            </section>
          </Link>

          <Link href={"/"}>
            <section className="flex">
              <ProkerCard
                largeSize={true}
                src="/image/infinity.webp"
                title="INFINITY (Informatics for Humanity)"
                description="Gerakan kemanusiaan untuk membantu korban bencana alam."
              />
            </section>
          </Link>

          <section className="flex justify-center">
            <PrimaryButton>
              Load More
            </PrimaryButton>
          </section>
        </main>
        <Footer />
    </main>
  )
}

export default ArticlePage