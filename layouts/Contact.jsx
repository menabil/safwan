import Button from "@/components/Button";
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import React from "react";

const Contact = () => {
  return (
    <section className="py-30">
      <Container>
        <Flex className={"gap-x-7.5 justify-center"}>
          <div className="w-117.5 h-146.5 bg-[#C4C4C4]"></div>
          <div className="">
            <p className="text-lg font-medium text-secondary font-Vol">
              Get In Touch
            </p>
            <h3 className="text-[50px] font-medium leading-15 text-primary font-Vol mx-auto pt-3 pb-10">
              Feel Free to Contact
            </h3>
            <Flex className={"gap-x-15"}>
              <input
                type="text"
                placeholder="Enter Name"
                className="outline-none pb-3 border-b-3 border-primary/10 placeholder:text-primary/70 placeholder:text-lg placeholder:font-Jos w-75"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="outline-none pb-3 border-b-3 border-primary/10 placeholder:text-primary/70 placeholder:text-lg placeholder:font-Jos w-75"
              />
            </Flex>
            <Flex className={"gap-x-15 py-14"}>
              <input
                type="text"
                placeholder="Enter Name"
                className="outline-none pb-3 border-b-3 border-primary/10 placeholder:text-primary/70 placeholder:text-lg placeholder:font-Jos w-75"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="outline-none pb-3 border-b-3 border-primary/10 placeholder:text-primary/70 placeholder:text-lg placeholder:font-Jos w-75"
              />
            </Flex>
            <input
              type="text"
              placeholder="Subject"
              className="outline-none pb-3 border-b-3 border-primary/10 placeholder:text-primary/70 placeholder:text-lg placeholder:font-Jos w-full"
            />
            <Button btnText={"Contact Us"} className={"mt-12.5 w-fit"} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Contact;
