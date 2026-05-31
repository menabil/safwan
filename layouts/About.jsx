import Button from "@/components/Button";
import Container from "@/components/Container";
import Flex from "@/components/Flex";

const About = () => {
  const skills = [
    { label: "Graphic Design", percentage: 70 },
    { label: "Web Designing", percentage: 85 },
    { label: "Brand Design", percentage: 60 },
    { label: "Web Development", percentage: 40 },
  ];
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="py-15 md:py-30">
      <Container>
        <Flex
          className={"gap-7.5 justify-center flex-col-reverse md:flex-row "}
        >
          <Flex className={"gap-7.5 flex-col md:flex-row"}>
            <div className="bg-[#C4C4C4] md:h-120 h-56.25 md:w-92.5 w-70"></div>
            <Flex className="flex-col gap-y-7.5">
              <div className="bg-[#C4C4C4] h-56.25 w-70 md:w-42.5"></div>
              <div className="bg-[#C4C4C4] h-56.25 w-70 md:w-42.5"></div>
            </Flex>
          </Flex>
          <div className="text-center md:text-left">
            <p className="text-secondary text-lg font-medium font-Vol">
              About Me
            </p>
            <h3 className="pt-3 pb-3 font-Vol font-medium text-3xl md:text-[50px] md:leading-14 text-primary w-[80%] mx-auto md:w-142.5">
              I Enjoy Solving Problems With Scalable Solutions
            </h3>
            <div className="text-[#4D7A77] text-base font-Jos leading-6.5 md:w-142.5 w-[90%] mx-auto">
              Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
              aeci velit, sed quia non numquam eius modi tempora incidunt lao
              magnam aliquam quaerat voluptatem reprehenderit.
              <p className="md:pt-7">
                Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                reprehenderit non numquam eius.
              </p>
            </div>
            <Button
              btnText={"Download CV"}
              className={"w-fit mt-5 md:mt-13.5 mx-auto md:mx-0"}
            />
          </div>
        </Flex>
        <div className="flex justify-center items-center mt-10 md:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl md:w-full w-[85%]">
            {skills.map((skill, index) => {
              const strokeDashoffset =
                circumference - (skill.percentage / 100) * circumference;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg px-6 py-7.5 shadow-newMade flex flex-col items-center justify-center border border-gray-50 text-center"
                >
                  {/* Circular Progress Bar Container */}
                  <div className="relative flex items-center justify-center mb-6">
                    <svg className="w-full h-full">
                      {/* Background Circle */}
                      <circle
                        cx="110"
                        cy="75"
                        r={radius}
                        className="stroke-[#C4C4C4]"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      {/* Foreground/Progress Circle */}
                      <circle
                        cx="110"
                        cy="75"
                        r={radius}
                        className="stroke-secondary"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Percentage Text inside Circle */}
                    <span className="absolute top-[35%] left-[35%] text-[34px] font-Vol font-semibold text-secondary">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-primary font-Vol font-semibold text-[26px]">
                    {skill.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
