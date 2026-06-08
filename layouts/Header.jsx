"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Image from "next/image";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import Logo from "../public/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  let [show, setShow] = useState(false);
  let handelClick = () => {
    setShow(!show);
  };
  return (
    <nav className="py-5">
      <Container>
        <Flex className={"justify-between font-Jos relative px-3 md:px-0"}>
          <Image
            src={Logo}
            alt="Logo"
            width={122}
            height={40}
            className="cursor-pointer"
          />
          <ul className="md:flex items-center gap-x-10 text-primary text-lg hidden">
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

          <p
            onClick={handelClick}
            className="block md:hidden text-3xl cursor-pointer text-[#192239]"
          >
            <HiMenuAlt1 />
          </p>
          {show && (
            <div className="absolute top-full left-[5%] border-secondary border-4 w-[85%] bg-white p-5 rounded-2xl shadow-newMade md:hidden z-50">
              <ul className="flex items-center text-primary text-lg flex-col gap-y-4">
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
              <Button
                btnText={"Download CV"}
                className={"text-lg font-medium w-fit mx-auto mt-5"}
              />
            </div>
          )}
          <Button
            btnText={"Download CV"}
            className={"text-lg font-medium hidden md:block"}
          />
        </Flex>
      </Container>
    </nav>
  );
};

export default Header;
