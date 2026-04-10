import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import Logo from "../public/logo.png";

const Header = () => {
  return (
    <nav className="py-5">
      <Container>
        <Flex className={"justify-between font-Jos"}>
          <Image
            src={Logo}
            alt="Logo"
            width={122}
            height={40}
            className="cursor-pointer"
          />
          <ul className="flex items-center gap-x-10 text-primary text-lg">
            <li className="hover:text-secondary duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-secondary duration-300 cursor-pointer">
              Pages
            </li>
            <li className="hover:text-secondary duration-300 cursor-pointer">
              Services
            </li>
            <li className="hover:text-secondary duration-300 cursor-pointer">
              Blog
            </li>
            <li className="hover:text-secondary duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
          <Button btnText={"Download CV"} className={"text-lg font-medium"} />
        </Flex>
      </Container>
    </nav>
  );
};

export default Header;
