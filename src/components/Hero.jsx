import React from "react";
import hero from "../assets/Ajay.png";
import CV from "../assets/AJAY_KRISHNA_CV.pdf";
import github from "../assets/git-hub.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 bg-gradient-to-tl from-transparent via-transparent to-red-200">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-6 lg:mt-0 mt-10">
            <h1
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-once="true"
              className="lg:text-7xl text-4xl font-bold lg:leading-snug"
            >
              Hi There, <br />
              I'm Ajay <span className="text-red-500">Krishna</span>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-once="true"
              className="md:text-2xl text-xl mb-4"
            >
              Full-Stack Web Developer & Designer
            </p>
            <p
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-once="true"
              className="mb-4"
            >
              I'm a A Full Stack Developer with a Bachelor's degree in Computer
              Science from Sree Buddha College of Engineering. Proficient in
              React, Node.js, Express.js, MongoDB, and C/C++. Eager to leverage
              theoretical knowledge and practical skills in a professional
              setting to contribute to the development of innovative web
              applications.
            </p>

            <button
              data-aos="zoom-in"
              data-aos-once="true"
              className=" text-white px-3 py-2 border border-transparent text-base font-medium rounded-md shadow-sm  bg-red-500 hover:bg-red-700 transition duration-150 ease-in-out w-max active:duration-300 active:scale-90"
            >
              <a href={CV} download target="_blank">
                Download CV
              </a>
            </button>
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              className=" p-3 flex flex-row gap-6 rounded-full"
            >
              <a
                href="https://www.linkedin.com/in/ajay-krishna117/"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img
                  src={linkedin}
                  alt=""
                  className="h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                />
              </a>

              <a
                href="https://github.com/homosapien-117"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img
                  src={github}
                  alt=""
                  className="h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                />
              </a>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="md:w-1/2 relative flex justify-center items-end"
          >
           <img src={hero} alt="" className="lg:h-[80vh] h-96 lg:ml-[250px] lg:mr-0 mx-auto my-10  lg:mt-[-40px]" />

            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-44 md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
