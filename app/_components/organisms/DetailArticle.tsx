import Image from "next/image";
import Link from "next/link";
import ReactHtmlParser from "html-react-parser";
import DetailDate from "@molecules/DetailDate";
import DetailActivity from "@molecules/DetailActivity";

const Code = () => {
  const Activity = DetailActivity();
  return (
    <main className="w-full px-32 py-10">
      <section className="flex flex-col gap-10">
        <Link href={"#"} className="text-text-l font-semibold text-[#0077BD] ">
          Home {">"} Artikel Kegiatan
        </Link>
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px] font-bold">
            CODE {"(Community Dedication)"}
          </h1>
          <DetailDate date="Rabu, 26 Juli 2023" views={12} />
        </div>
        <div className="flex w-[1313px] h-[553px] relative justify-center items-center -z-10 gap-6">
          <Image
            fill
            src="/image/code.webp"
            alt="Community Dedication"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
        <section className="text-text-l">{ReactHtmlParser(Activity)}</section>
      </section>
    </main>
  );
};

export default Code;
