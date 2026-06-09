import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="bg-[url('/banner.png')] bg-center bg-no-repeat bg-cover">
        <Container className={"md:py-45 py-15"}>
          <h1 className="px-3 text-5xl md:text-[100px] text-white md:leading-27.5 font-bold font-Vol">
            Hello! <br /> I’m Zarror Nibors
          </h1>
          <p className="px-3 md:px-0 pb-12.5 pt-6 md:w-167.5 text-white/50 text-xl leading-7.5">
            I’am freelance <b className="text-white">UI/UX Designer</b> based in
            Indonesia who loves to craft attractive design experiences for the
            web.
          </p>
          <Button
            btnText={"Contact Me"}
            className={"text-lg font-Jos font-medium w-fit mx-3 md:mx-0"}
          />
        </Container>
      </div>
    </section>
  );
};

export default Banner;
