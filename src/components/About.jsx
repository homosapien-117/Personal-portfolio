import React from "react";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import Postman from "../assets/postman-icon.png";
import Git from "../assets/image.png";
import Typescript from "../assets/typescript.png";
import Cplus from "../assets/c++.png";
import Vscode from "../assets/Vscode.png";
import Figma from "../assets/Figma-logo.png";
import Socket from "../assets/Socket.png";
import Cloudinary from "../assets/cloudinary.png";
import Firebase from "../assets/Firebase.png";
const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm AJAY KRISHNA
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Full-Stack Developer with expertise in web development and the
              MERN stack.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I started my journey in web development with a passion for
                  creating intuitive and scalable applications. With proficiency
                  in the MERN stack (MongoDB, Express.JS, React, and Node.JS), I
                  have built many Full Stack Projects. My projects demonstrate
                  my ability to integrate powerful backend solutions with sleek,
                  user-friendly frontend designs.
                </p>
                <img
                  src={MernStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>

              {/* Skills & Expertise Section with Box on the Right */}
              <div data-aos="zoom-in" className="flex gap-8">
                <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300 w-2/3">
                  <h3 className="text-2xl font-semibold text-red-600">
                    Skills & Expertise
                  </h3>
                  <div className="flex items-center justify-center flex-wrap gap-3">
                    {/* Skill Items */}
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Html} alt="" className="w-10" />
                      {/* <span className='font-semibold'>HTML</span> */}
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Css} alt="" className="w-8" />
                      {/* <span className='font-semibold'>CSS</span> */}
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Javascript} alt="" className="w-10" />
                      {/* <span className='font-semibold'>JavaScript</span> */}
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img
                        src={ReactLogo}
                        alt=""
                        className="w-8 rounded-full"
                      />
                      {/* <span className='font-semibold'>React</span> */}
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={ReduxLogo} alt="" className="w-8" />
                      {/* <span className='font-semibold'>Redux</span> */}
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Bootstrap} alt="" className="w-10" />
                      {/* <span className='font-semibold'>BootStrap</span> */}
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={NodeLogo} alt="" className="w-10" />
                      {/* <span className='font-semibold'>Node JS</span> */}
                    </div>
                    <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Mongodb} alt="" className="w-10" />
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Express} alt="" className="w-10" />
                    </div>

                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Git} alt="" className="w-9" />
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Typescript} alt="" className="w-9" />
                    </div>
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Cplus} alt="" className="w-9" />
                    </div>
                  </div>
                </div>

                {/* New Box on the Right */}
                <div className="border border-red-200 rounded-lg py-7 flex flex-col items-center shadow-lg shadow-red-300 w-1/3">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Tools used
                  </h3>
                  <ul className="mt-4 text-lg text-gray-600">
                    <div className="flex items-center justify-center flex-wrap gap-3">
                      <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                        <img src={Postman} alt="" className="w-9" />
                      </div>
                      <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                        <img src={Vscode} alt="" className="w-9" />
                      </div>
                      <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                        <img src={Figma} alt="" className="w-9" />
                      </div>
                      <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                        <img src={Socket} alt="" className="w-9" />
                      </div>
                      <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                        <img src={Cloudinary} alt="" className="w-9" />
                      </div>
                      <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                        <img src={Firebase} alt="" className="w-6" />
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I am passionate about learning new technologies
              and keeping myself up-to-date with the latest trends in web
              development. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
