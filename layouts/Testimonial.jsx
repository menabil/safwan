import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Image from "next/image";
import React from "react";
import ava from "../public/Avatar.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="bg-[#F9F4F1] pt-27.5 pb-18">
      <Container>
        <p className="text-lg font-medium text-secondary text-center font-Vol">
          Client Testimonial
        </p>
        <h3 className="text-[50px] font-medium w-130 leading-15 text-primary font-Vol text-center mx-auto pt-3 pb-10">
          Feedback From Client
        </h3>
        <Flex className={"gap-x-7.5 justify-center mb-25"}>
          <div className="">
            <div className="w-142.5 bg-white mb-10 shadow-newMade">
              <div className="h-2 bg-secondary w-full"></div>
              <p className="pt-5.5 pb-7.5 w-135 font-Jos text-base leading-6.5 px-10 text-primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                this typesetting industry.
              </p>
            </div>
            <Flex className={"gap-x-7.5"}>
              <Image src={ava} alt="ava" className="ml-15" />
              <div className="">
                <h6 className="text-xl font-semibold font-Vol text-primary ">
                  Michale Doie
                </h6>
                <p className="text-sm font-Jos text-primary/60 pt-1 pb-3">
                  Product Designer
                </p>
                <Flex className={"text-[#FF9F3F]"}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </Flex>
              </div>
            </Flex>
          </div>
          <div className="">
            <div className="w-142.5 bg-white mb-10 shadow-newMade">
              <div className="h-2 bg-secondary w-full"></div>
              <p className="pt-5.5 pb-7.5 w-135 font-Jos text-base leading-6.5 px-10 text-primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                this typesetting industry.
              </p>
            </div>
            <Flex className={"gap-x-7.5"}>
              <Image src={ava} alt="ava" className="ml-15" />
              <div className="">
                <h6 className="text-xl font-semibold font-Vol text-primary ">
                  Adam Smith
                </h6>
                <p className="text-sm font-Jos text-primary/60 pt-1 pb-3">
                  Designer
                </p>
                <Flex className={"text-[#FF9F3F]"}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </Flex>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Testimonial;
