import Button from "@/components/Button";
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Project = () => {
  return (
    <section>
      <Container>
        <p className="text-secondary text-lg font-medium font-Vol">
          Recent Projects
        </p>
        <Flex className={"justify-between mt-2 mb-10"}>
          <h3 className="pt-3 pb-1 font-Vol font-medium text-[50px] leading-14 text-primary w-142.5">
            My Recent Projects
          </h3>
          <Flex className={"gap-x-5"}>
            <div className="p-3.5 border-2 border-primary/10 text-primary text-2xl cursor-pointer">
              <FaArrowLeft />
            </div>
            <div className="p-3.5 bg-secondary text-white text-2xl cursor-pointer">
              <FaArrowRight />
            </div>
          </Flex>
        </Flex>
        <Flex className={"gap-x-10 justify-center"}>
          <div className="shadow-newMade w-fit group">
            <div className="bg-[#C4C4C4] h-67.5 w-100"></div>
            <div className="p-7.5">
              <p className="text-secondary font-Vol text-base font-medium">
                Analytics, UI-Ux
              </p>
              <h6 className="text-primary text-2xl font-medium font-Vol w-76 leading-7.5 py-2.5">
                Branding & Digital Video Campaign For George’s Cafe
              </h6>
              <p className="text-primary text-base font-Jos w-72.5 leading-6">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry.
              </p>
              <Flex
                className={
                  "text-lg font-Jos text-primary group-hover:text-secondary gap-x-2 font-medium pt-6 duration-300 cursor-pointer"
                }
              >
                <p className="">View Case Studies</p>
                <FaArrowRight />
              </Flex>
            </div>
          </div>
          <div className="shadow-newMade w-fit group">
            <div className="bg-[#C4C4C4] h-67.5 w-100"></div>
            <div className="p-7.5">
              <p className="text-secondary font-Vol text-base font-medium">
                Analytics, UI-Ux
              </p>
              <h6 className="text-primary text-2xl font-medium font-Vol w-76 leading-7.5 py-2.5">
                Branding & Digital Video Campaign For George’s Cafe
              </h6>
              <p className="text-primary text-base font-Jos w-72.5 leading-6">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry.
              </p>
              <Flex
                className={
                  "text-lg font-Jos text-primary group-hover:text-secondary gap-x-2 font-medium pt-6 duration-300 cursor-pointer"
                }
              >
                <p className="">View Case Studies</p>
                <FaArrowRight />
              </Flex>
            </div>
          </div>
          <div className="shadow-newMade w-fit group">
            <div className="bg-[#C4C4C4] h-67.5 w-100"></div>
            <div className="p-7.5">
              <p className="text-secondary font-Vol text-base font-medium">
                Analytics, UI-Ux
              </p>
              <h6 className="text-primary text-2xl font-medium font-Vol w-76 leading-7.5 py-2.5">
                Branding & Digital Video Campaign For George’s Cafe
              </h6>
              <p className="text-primary text-base font-Jos w-72.5 leading-6">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry.
              </p>
              <Flex
                className={
                  "text-lg font-Jos text-primary group-hover:text-secondary gap-x-2 font-medium pt-6 duration-300 cursor-pointer"
                }
              >
                <p className="">View Case Studies</p>
                <FaArrowRight />
              </Flex>
            </div>
          </div>
        </Flex>
        <Button btnText={"Explore More"} className={"mt-15 w-fit mx-auto"} />
      </Container>
    </section>
  );
};

export default Project;
