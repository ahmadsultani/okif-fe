import Logo from "@molecules/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-darker flex p-[72px_172px] text-white flex-col w-screen gap-16">
      <main className="flex justify-between items-start">
        <section className="flex flex-col gap-8 text-xs">
          <Logo variant={"white"} />
          <main className="flex flex-col gap-4">
            <section className="gap-[10px] flex items-start">
              <Image width={18} height={18} src="/icon/place.svg" alt="" />
              <span className="text-text-s">
                Gedung Student Center Lt. 1 Fakultas Teknik
                <br /> Universitas Hasanuddin, Gowa 92171
              </span>
            </section>
            <section className="gap-[10px] flex items-start">
              <Image
                width={18}
                height={18}
                src="/icon/mail_outline.svg"
                alt=""
              />

              <span className="text-text-s">okifftuh@gmail.com</span>
            </section>
          </main>
        </section>
        <section className="flex flex-col gap-4 items-end">
          <span className="text-text-l font-bold">
            Unit Kegiatan Mahasiswa Departemen
          </span>
          <Link href={"/"} className="text-text-m">
            Coder Institute
          </Link>
          <Link href={"/"} className="text-text-m">
            Robotic Enthusiast
          </Link>
        </section>
      </main>
      <section className="flex justify-between font-medium">
        <span className="text-text-s font-medium">
          © 2023 Organisasi Kemahasiswaan Informatika FT-UH (OKIF FT-UH)
        </span>
        <ul className="flex gap-4 text-text-s">
          <li>
            <Link href={"/"}>Instagram</Link>
          </li>
          <li>
            <Link href={"/"}>Twitter</Link>
          </li>
          <li>
            <Link href={"/"}>Linked In</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
