import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="bg-[url('/banner.png')] bg-center bg-no-repeat bg-cover">
        <Container className={"py-45"}>
          <h1 className="text-[100px] text-white leading-27.5 font-bold font-Vol">
            Hello! <br /> I’m Zarror Nibors
          </h1>
          <p className="pb-12.5 pt-6 w-167.5 text-white/50 text-xl leading-7.5">
            I’am freelance <b className="text-white">UI/UX Designer</b> based in
            Indonesia who loves to craft attractive design experiences for the
            web.
          </p>
          <Button
            btnText={"Contact Me"}
            className={"text-lg font-Jos font-medium w-fit"}
          />
        </Container>
      </div>
    </section>
  );
};

export default Banner;
