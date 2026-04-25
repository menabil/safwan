import Button from "@/components/Button";
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-30">
      <Container>
        <Flex className={"gap-x-7.5 justify-center"}>
          <Flex className={"gap-x-7.5"}>
            <div className="bg-[#C4C4C4] h-120 w-92.5"></div>
            <Flex className="flex-col gap-y-7.5">
              <div className="bg-[#C4C4C4] h-56.25 w-42.5"></div>
              <div className="bg-[#C4C4C4] h-56.25 w-42.5"></div>
            </Flex>
          </Flex>
          <div className="">
            <p className="text-secondary text-lg font-medium font-Vol">
              About Me
            </p>
            <h3 className="pt-3 pb-1 font-Vol font-medium text-[50px] leading-14 text-primary w-142.5">
              I Enjoy Solving Problems With Scalable Solutions
            </h3>
            <p className="text-primary text-base font-Jos leading-6.5 w-142.5">
              Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
              aeci velit, sed quia non numquam eius modi tempora incidunt lao
              magnam aliquam quaerat voluptatem reprehenderit.
              <br />
              <br />
              Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
              reprehenderit non numquam eius.
            </p>
            <Button btnText={"Download CV"} className={"w-fit mt-13.5"} />
          </div>
        </Flex>
        <div className="mt-20">
          <Image src={"/Skill.png"} alt="skill" width={"1320"} height={"282"} />
        </div>
      </Container>
    </section>
  );
};

export default About;
