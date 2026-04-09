import React from "react";
import Container from "../../components/Container";
import Image from "next/image";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import logo from "/public/logo.png";

const Header = () => {
  return (
    <nav className="py-10">
      <Container>
        <Flex className={"justify-between"}>
          <Image src={logo} alt="logo" width={122} height={40} />
          <ul className="flex items-center gap-x-5">
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <Button btnText={"Download CV"} />
        </Flex>
      </Container>
    </nav>
  );
};

export default Header;
