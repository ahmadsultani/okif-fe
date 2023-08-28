import Image from "next/image";

interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
}

const ArticleCard = (props: ArticleCardProps) => {
  const { date, title, description } = props;
  return (
    <main className="relative w-[440px] h-[603px] rounded-lg overflow-hidden">
      <Image src="/image/code.webp" fill objectFit="cover" alt="Image" />
      <header className=" absolute flex flex-col justify-end gap-2 w-full h-full px-[19px] py-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] text-secondary-white">
        <section className="flex gap-2">
          <Image src="/icon/date.svg" width={13} height={13} alt="date" />
          <p className=" text-text-m">{date}</p>
        </section>
        <h1 className=" text-heading-s font-bold">{title}</h1>
        <p className=" text-text-l line-clamp-1">{description}</p>
      </header>
    </main>
  );
};
export default ArticleCard;
