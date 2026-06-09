import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Image from "next/image";
import React from "react";
import ava from "../public/Avatar.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="bg-[#F9F4F1] md:pt-27.5 md:pb-18 py-15">
      <Container>
        <p className="text-lg font-medium text-secondary text-center font-Vol">
          Client Testimonial
        </p>
        <h3 className="text-3xl md:text-[50px] md:leading-15 font-medium text-primary font-Vol text-center mx-auto pt-3 pb-10">
          Feedback From Client
        </h3>
        <Flex
          className={"gap-7.5 justify-center md:mb-25 flex-col md:flex-row"}
        >
          <div className="mb-5 md:mb-0">
            <div className="md:w-142.5 bg-white mb-10 shadow-newMade">
              <div className="h-2 bg-secondary w-full"></div>
              <p className="md:pt-5.5 md:pb-7.5 p-4 md:w-135 font-Jos text-base leading-6.5 px-10 text-primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                this typesetting industry.
              </p>
            </div>
            <Flex className={"gap-x-7.5"}>
              <Image src={ava} alt="ava" className="md:ml-15 ml-10" />
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
            <div className="md:w-142.5 bg-white mb-10 shadow-newMade">
              <div className="h-2 bg-secondary w-full"></div>
              <p className="md:pt-5.5 md:pb-7.5 p-4 md:w-135 font-Jos text-base leading-6.5 px-10 text-primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                this typesetting industry.
              </p>
            </div>
            <Flex className={"gap-x-7.5"}>
              <Image src={ava} alt="ava" className="md:ml-15 ml-10" />
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
