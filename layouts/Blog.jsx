import Container from "@/components/Container";
import Flex from "@/components/Flex";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className="pb-30">
      <Container>
        <p className="text-lg font-medium text-secondary text-center font-Vol">
          Letest Blogs
        </p>
        <h3 className="text-[50px] font-medium leading-15 text-primary font-Vol text-center mx-auto pt-3 pb-10">
          Blog & Articles
        </h3>
        <Flex className={"gap-x-10 justify-center"}>
          <div className="shadow-newMade w-fit group">
            <div className="bg-[#C4C4C4] h-65 w-92.5"></div>
            <div className="p-7.5">
              <Flex className={"justify-between"}>
                <p className="text-secondary font-Vol text-sm">
                  By David William
                </p>
                <p className="text-primary text-sm font-Jos">Mar 8, 2022</p>
              </Flex>

              <h6 className="text-primary text-2xl font-medium font-Vol w-70 leading-7.5 py-3">
                Quis autem vea eum iure reprehenderit.
              </h6>
              <p className="text-primary text-base font-Jos w-77 leading-6">
                Dolor repellendus temporibus autem rerum quibusdam officiis
                debitis nece.
              </p>
              <Flex
                className={
                  "text-lg font-Jos text-primary group-hover:text-secondary gap-x-2 font-medium pt-6 duration-300 cursor-pointer"
                }
              >
                <p className="">Read More</p>
                <FaArrowRight />
              </Flex>
            </div>
          </div>
          <div className="shadow-newMade w-fit group">
            <div className="bg-[#C4C4C4] h-65 w-92.5"></div>
            <div className="p-7.5">
              <Flex className={"justify-between"}>
                <p className="text-secondary font-Vol text-sm">
                  By David William
                </p>
                <p className="text-primary text-sm font-Jos">Mar 8, 2022</p>
              </Flex>

              <h6 className="text-primary text-2xl font-medium font-Vol w-70 leading-7.5 py-3">
                Reprehenderit in vouta velit esse cillum.
              </h6>
              <p className="text-primary text-base font-Jos w-77 leading-6">
                Dolor repellendus temporibus autem rerum quibusdam officiis
                debitis nece.
              </p>
              <Flex
                className={
                  "text-lg font-Jos text-primary group-hover:text-secondary gap-x-2 font-medium pt-6 duration-300 cursor-pointer"
                }
              >
                <p className="">Read More</p>
                <FaArrowRight />
              </Flex>
            </div>
          </div>
          <div className="shadow-newMade w-fit group">
            <div className="bg-[#C4C4C4] h-65 w-92.5"></div>
            <div className="p-7.5">
              <Flex className={"justify-between"}>
                <p className="text-secondary font-Vol text-sm">
                  By David William
                </p>
                <p className="text-primary text-sm font-Jos">Mar 8, 2022</p>
              </Flex>

              <h6 className="text-primary text-2xl font-medium font-Vol w-70 leading-7.5 py-3">
                Soluta nobis ose aligen optio cumue.
              </h6>
              <p className="text-primary text-base font-Jos w-77 leading-6">
                Dolor repellendus temporibus autem rerum quibusdam officiis
                debitis nece.
              </p>
              <Flex
                className={
                  "text-lg font-Jos text-primary group-hover:text-secondary gap-x-2 font-medium pt-6 duration-300 cursor-pointer"
                }
              >
                <p className="">Read More</p>
                <FaArrowRight />
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
