interface OkifLogoProps {
  size: number;
}
import Image from "next/image";
import Logo from "../../../public/icon/Okif.svg";

const OkifLogo = (props: OkifLogoProps) => {
  return (
    <Image
      priority={true}
      src={Logo}
      alt={`Okif's Logo`}
      width={props.size}
      height={props.size}
    />
  );
};

export default OkifLogo;
