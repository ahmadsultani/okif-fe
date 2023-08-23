import Image from "next/image";
import OkifLogo from "@atoms/OkifLogo";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen z-10">
        <Image 
          src="/image/code.webp"
          alt="hero image"
          fill
          style={{
            objectFit: 'cover',
          }}
          />
        <div className="absolute bg-black bg-opacity-70 w-screen h-screen top-0 left-0"></div>

        <section className="relative h-full flex flex-col gap-11 justify-center items-center">
          <OkifLogo size={308} />
          <p className="text-heading-l leading-[52px] font-semibold text-secondary-white text-center">
            ORGANISASI KEMAHASISWAAN INFORMATIKA
          <br />
            FAKULTAS TEKNIK - UNIVERSITAS HASANUDDIN
          </p>
        </section>
    </section>
  )
}

export default Hero