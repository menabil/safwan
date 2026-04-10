import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import sOne from "../public/sOne.png";
import sTwo from "../public/sTwo.png";
import sThr from "../public/sThr.png";
import { GoArrowRight } from "react-icons/go";
import Flex from "@/components/Flex";

const Service = () => {
  return (
    <section className="mt-55">
      <Container>
        <p className="text-lg font-medium text-secondary text-center font-Vol">
          MY SERVICES
        </p>
        <h3 className="text-[50px] font-medium w-130 leading-15 text-primary font-Vol text-center mx-auto pt-3 pb-10">
          Provide Wide Range of Digital Services
        </h3>
        <Flex className={"gap-x-10 justify-center"}>
          <div className="py-13.5 px-7.5 shadow-newMade w-95 group">
            <Image src={sOne} alt="sOne" />
            <h6 className="text-2xl font-Vol pt-6.5 pb-4 text-primary font-extrabold">
              Ui/Ux Design
            </h6>
            <p className="w-61.25 font-Jos text-base leading-6 text-primary pb-7.5">
              Dolor repellendus tempo ribus aue quibusdam offi ciis debitis
              rerum na aibus minima veniam.
            </p>
            <GoArrowRight className="text-4xl text-primary group-hover:text-secondary duration-300" />
          </div>
          <div className="py-13.5 px-7.5 shadow-newMade w-95 group">
            <Image src={sTwo} alt="sOne" />
            <h6 className="text-2xl font-Vol pt-6.5 pb-4 text-primary font-extrabold">
              Mobile App Design
            </h6>
            <p className="w-61.25 font-Jos text-base leading-6 text-primary pb-7.5">
              Dolor repellendus tempo ribus aue quibusdam offi ciis debitis
              rerum na aibus minima veniam.
            </p>
            <GoArrowRight className="text-4xl text-primary group-hover:text-secondary duration-300" />
          </div>
          <div className="py-13.5 px-7.5 shadow-newMade w-95 group">
            <Image src={sThr} alt="sOne" />
            <h6 className="text-2xl font-Vol pt-6.5 pb-4 text-primary font-extrabold">
              Web Design
            </h6>
            <p className="w-61.25 font-Jos text-base leading-6 text-primary pb-7.5">
              Dolor repellendus tempo ribus aue quibusdam offi ciis debitis
              rerum na aibus minima veniam.
            </p>
            <GoArrowRight className="text-4xl text-primary group-hover:text-secondary duration-300" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Service;
