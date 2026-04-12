import Container from "@/components/Container";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <section className="py-30">
      <Container>
        <p className="text-lg font-medium text-secondary text-center font-Vol">
          My Portfolio
        </p>
        <h3 className="text-[50px] font-medium w-130 leading-15 text-primary font-Vol text-center mx-auto pt-3 pb-6">
          My Work Example
        </h3>
        <div className="flex gap-x-7.5 justify-center pb-10 font-Vol text-base text-primary">
          <p className="cursor-pointer ">All</p>
          <p className="cursor-pointer ">Branding</p>
          <p className="cursor-pointer ">Photography</p>
          <p className="cursor-pointer ">Fashion</p>
          <p className="cursor-pointer ">Product</p>
        </div>
        <div className="flex flex-wrap gap-7.5 justify-center">
          <div className="w-142.5 h-130 bg-[#C4C4C4] hover:bg-primary/50 relative duration-400 group">
            <div className="bg-white w-17.5 h-17.5 rounded-full absolute top-7.5 right-7.5 duration-500 hidden group-hover:block cursor-pointer">
              <FaArrowRight className="text-secondary text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="bg-primary py-5.5 px-4.5 absolute bottom-0 left-0 w-full">
              <h6 className="font-Vol font-semibold text-white text-2xl">
                Motion Graphics
              </h6>
              <p className="font-Jos text-white/50 text-base">Website</p>
            </div>
          </div>
          <div className="w-142.5 h-130 bg-[#C4C4C4] hover:bg-primary/50 relative duration-400 group">
            <div className="bg-white w-17.5 h-17.5 rounded-full absolute top-7.5 right-7.5 duration-500 hidden group-hover:block cursor-pointer">
              <FaArrowRight className="text-secondary text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="bg-primary py-5.5 px-4.5 absolute bottom-0 left-0 w-full">
              <h6 className="font-Vol font-semibold text-white text-2xl">
                E-Learning App
              </h6>
              <p className="font-Jos text-white/50 text-base">IOS App</p>
            </div>
          </div>
          <div className="w-142.5 h-130 bg-[#C4C4C4] hover:bg-primary/50 relative duration-400 group">
            <div className="bg-white w-17.5 h-17.5 rounded-full absolute top-7.5 right-7.5 duration-500 hidden group-hover:block cursor-pointer">
              <FaArrowRight className="text-secondary text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="bg-primary py-5.5 px-4.5 absolute bottom-0 left-0 w-full">
              <h6 className="font-Vol font-semibold text-white text-2xl">
                Web Application
              </h6>
              <p className="font-Jos text-white/50 text-base">Desktop</p>
            </div>
          </div>
          <div className="w-142.5 h-130 bg-[#C4C4C4] hover:bg-primary/50 relative duration-400 group">
            <div className="bg-white w-17.5 h-17.5 rounded-full absolute top-7.5 right-7.5 duration-500 hidden group-hover:block cursor-pointer">
              <FaArrowRight className="text-secondary text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="bg-primary py-5.5 px-4.5 absolute bottom-0 left-0 w-full">
              <h6 className="font-Vol font-semibold text-white text-2xl">
                Visual Design
              </h6>
              <p className="font-Jos text-white/50 text-base">Desktop</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
