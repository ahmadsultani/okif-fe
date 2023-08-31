import ArticleCard from "@molecules/ArticleCard";

const ArticleSection = () => {
  return (
    <main className="flex flex-col gap-8 w-screen px-16 py-12">
      <section className="flex items-center justify-between">
        <h1 className=" text-heading-l font-bold">Artikel</h1>
        <p className=" text-heading-m font-medium text-neutral-normal-active hover:text-neutral-normal-hover">
          Lihat Selengkapnya {"->"}
        </p>
      </section>
      <section className="grid grid-cols-3 gap-[27px]">
        <ArticleCard
          date="Sabtu, 18 Maret 2023"
          title="CODE (Community Dedication)"
          description="Pengembangan potensi mahasiswa untuk turut serta dalam pengabdian kepada masyarakat dengan memanfaatkan teknologi informasi serta meningkatkan kepedulian dan rasa empati terhadap masyarakat yang membutuhkan bantuan."
        />
        <ArticleCard
          date="Sabtu, 18 Maret 2023"
          title="INFINITY (Informatics for Humanity)"
          description="Gerakan kemanusiaan untuk membantu korban bencana alam."
        />
        <ArticleCard
          date="Sabtu, 18 Maret 2023"
          title="INFINITY (Informatics for Humanity)"
          description="Gerakan kemanusiaan untuk membantu korban bencana alam.
          "
        />
      </section>
    </main>
  );
};
export default ArticleSection;
