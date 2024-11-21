import Image from "next/image";
import Logo from "../../public/logo/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 p-4 flex justify-center items-center">
      <div className="flex items-center space-x-2">
        <Image
          src={Logo}
          alt="Logo"
          width={32}
          height={32}
          className="filter grayscale"
        />
        <p className="text-sm text-gray-600">
          Copyright © 2024 e-paper
        </p>
      </div>
    </footer>
  );
};

export default Footer;
