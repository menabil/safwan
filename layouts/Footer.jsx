import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import logo from "../public/fLogo.png";
import { TfiSkype } from "react-icons/tfi";
import Flex from "@/components/Flex";
import { FaBehance, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-primary">
      <Container className={"py-20"}>
        <Image src={logo} alt="logo" className="mx-auto mb-15" />
        <ul className="flex items-center gap-x-7 text-white text-lg justify-center mb-12.5">
          <li className="hover:text-secondary duration-300 cursor-pointer border-r-3 border-white/10 pr-8">
            Home
          </li>
          <li className="hover:text-secondary duration-300 cursor-pointer border-r-3 border-white/10 pr-8">
            About
          </li>
          <li className="hover:text-secondary duration-300 cursor-pointer border-r-3 border-white/10 pr-8">
            Services
          </li>
          <li className="hover:text-secondary duration-300 cursor-pointer border-r-3 border-white/10 pr-8">
            Portfolio
          </li>
          <li className="hover:text-secondary duration-300 cursor-pointer border-r-3 border-white/10 pr-8">
            Blog
          </li>
          <li className="hover:text-secondary duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
        <Flex className={"gap-x-5 justify-center"}>
          <div className="h-15 w-15 rounded-full bg-secondary text-white text-3xl relative cursor-pointer">
            <TfiSkype className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="h-15 w-15 rounded-full bg-secondary text-white text-3xl relative cursor-pointer">
            <FaInstagram className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="h-15 w-15 rounded-full bg-secondary text-white text-3xl relative cursor-pointer">
            <FaBehance className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </Flex>
      </Container>
      <Container className={"border-t-3 border-white/10"}>
        <p className="py-7.5 text-white/50 text-sm font-Jos text-center">
          Copyright © 2026 Design By Nabil. All rights reserved.
        </p>
      </Container>
    </section>
  );
};

export default Footer;
