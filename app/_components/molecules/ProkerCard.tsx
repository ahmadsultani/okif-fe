import React from "react";
import Image from "next/image";

interface ProkerCardProps {
  src: string;
  title: string;
  description: string;
  largeSize: boolean;
}

export default function ProkerCard(props: ProkerCardProps) {
  const { src, title, description, largeSize } = props;
  const width = largeSize ? "w-screen" : "w-1/2"; //[1312px] [640px]
  const height = largeSize ? "h-[420px]" : "h-[240px]";
  const weight = largeSize ? "font-bold" : "font-semibold";
  const fontsize = largeSize ? "text-heading-l" : "text-heading-s";

  return (
    <main
      className={`relative ${width} ${height} rounded-lg overflow-hidden -z-50 `}
    >
      <Image
        src={src}
        alt={title}
        fill
        priority
        draggable={false}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="absolute flex flex-col justify-end w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)] p-8 gap-2">
        <span className={`${fontsize} ${weight} text-secondary-white`}>
          {title}
        </span>
        <p className="text-l text-secondary-white line-clamp-1">
          {description}
        </p>
      </div>
    </main>
  );
}
