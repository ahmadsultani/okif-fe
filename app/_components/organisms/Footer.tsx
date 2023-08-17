import Logo from "../molecules/Logo";
import Mail_outline from "../../../public/icon/mail_outline.svg";
import Place from "../../../public/icon/place.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-darker flex p-[72px_172px] flex-col w-screen gap-16">
      <section className="flex justify-between items-start">
        <div className="flex flex-col gap-8 text-xs">
          <Logo variant={"white"} />
          <div className="flex flex-col gap-4">
            <div className="gap-[10px] flex items-start">
              <Image src={Place} alt="" />
              <span className="text-text-s">
                Gedung Student Center Lt. 1 Fakultas Teknik
                <br /> Universitas Hasanuddin, Gowa 92171
              </span>
            </div>
            <div className="gap-[10px] flex items-start">
              <Image src={Mail_outline} alt="" />

              <span className="text-text-s">okifftuh@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <span className="text-text-l font-bold">
            Unit Kegiatan Mahasiswa Despanartemen
          </span>
          <span className="text-text-m">Coder Institute</span>
          <span className="text-text-m">Robotic Enthusiast</span>
        </div>
      </section>
      <section className="flex justify-between font-medium">
        <span className="text-text-s font-medium">
          © 2023 Organisasi Kemahasiswaan Informatika FT-UH (OKIF FT-UH)
        </span>
        <div className="flex gap-4 text-text-s">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Linked In</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
