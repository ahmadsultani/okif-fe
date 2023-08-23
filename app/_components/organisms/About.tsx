import Image from "next/image";

const About = () => {
  return (
    <section className="w-full flex gap-8 px-16 py-12">
      <Image
        src="/image/about.webp"
        width={519}
        height={640}
        alt="about-image"
      />
      <section className="flex flex-1 flex-col gap-8 text-justify tracking-[0.05em]">
        <h1 className="font-bold text-heading-l">Mengenal OKIF FT-UH</h1>
        <p className="font-medium text-heading-m">
          OKIF FT-UH adalah organisasi kemahasiswaan non-struktural di
          Departemen Teknik Informatika intra Universitas Hasanuddin yang
          berstatus otonom dan secara struktural merupakan bagian dari OKFT-UH
          yang mengacu pada bagan struktur OKFT-UH.
        </p>
        <p className="font-medium text-heading-m">
          OKIF FT-UH bertujuan sebagai sarana peningkatan kualitas ketakwaan
          kepada Tuhan Yang Maha Esa, yang berasaskan nilai-nilai luhur
          pancasila demi terwujudnya cita-cita bangsa dengan mengembangkan
          wawasan, integritas dan potensi diri, kemampuan keprofesian, serta
          pengabdian kepada masyarakat.
        </p>
      </section>
    </section>
  );
};

export default About;
