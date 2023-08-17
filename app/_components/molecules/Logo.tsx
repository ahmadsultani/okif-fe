interface LogoProps {
  variant: "primary" | "white";
}

import OkifLogo from "../atoms/OkifLogo";

const Logo = (props: LogoProps) => {
  const textColor =
    props.variant === "primary"
      ? "primary-darker"
      : props.variant === "white"
      ? "white"
      : "default";
  return (
    <section className="flex gap-4 items-center ">
      <OkifLogo size={48} />
      <p className={`text-text-s font-bold text-${textColor} `}>
        ORGANISASI KEMAHASISWAAN INFORMATIKA
        <br />
        FAKULTAS TEKNIK - UNIVERSITAS HASANUDDIN
      </p>
    </section>
  );
};

export default Logo;
