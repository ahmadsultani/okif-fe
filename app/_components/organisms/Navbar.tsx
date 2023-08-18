import Link from "next/link";
import Logo from "../molecules/Logo";
import NavbarItems from "../molecules/NavbarItems";

const Navbar = () => {
  return (
    <nav className="flex w-screen bg-secondary-white py-4 px-8 justify-between top-0 sticky">
      <Logo variant="primary" />
      <NavbarItems />
    </nav>
  );
};

export default Navbar;
