import React from "react";
import Netflix from "../assets/netflix.png";
import Todo from "../assets/todo.png";
import Olx from "../assets/olx.png";
import Timezone from "../assets/timezone.jpg";
import Chatty from "../assets/Chatty.png";
import Login from "../assets/login.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      id: 1,
      title: " Moviogo (Social Media Website)",
      desc: "Built a full-stack social media platform with TypeScript, React, Node.js, and Express, integrating MongoDB, Cloudinary, Socket.io for real-time chat, and ZEGOCLOUD for video calling",
      image: Chatty,
      live: "https://social-media-client-flax-mu.vercel.app/",
      github: "https://github.com/homosapien-117/SocialMedia_client.git",
      aosDelay: "300",
    },
    {
      id: 2,
      title: " TimeZone (Ecommerce website)",
      desc: "Built an e-commerce site with Node.js, Express, MongoDB, and EJS, featuring product browsing, cart, payments (Razorpay), and an admin panel for user and inventory management.",
      image: Timezone,
      github: "https://github.com/homosapien-117/TimeZone-nodeproject-.git",
      aosDelay: "600",
    },
    {
      id: 3,
      title: "Olx clone (using React)",
      desc: "Built a OLX clone web application with React and Redux for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage, featuring user authentication and authorization.",
      image: Olx,
      github: "https://github.com/homosapien-117/OLX-clone-REACT.git",
      aosDelay: "900",
    },
    {
      id: 4,
      title: " Netflix Clone, (using React) ",
      desc: "Developed a Netflix clone using React, showcasing frontend development and design skills by replicating key features of the platform.",
      image: Netflix,
      live: "https://netflix-clone-react-ten-iota.vercel.app/",
      github:
        "https://github.com/homosapien-117/Netflix-clone-REACT.git",
      aosDelay: "300",
    },
    {
      id: 5,
      title: "ToDo",
      desc: "A task management web app built with the MERN stack, allowing users to create and delete tasks with a simple, intuitive interface.",
      image: Todo,
      github: "https://github.com/homosapien-117/TODO.git",
      aosDelay: "600",
    },

    {
      id: 6,
      title: "Login Page",
      desc: "Built a web application with Node.js, React, and MongoDB, featuring user authentication, profile management, and an admin panel for managing user accounts, including blocking, unblocking, and sorting.",
      image: Login,
      github: "https://github.com/homosapien-117/MERN-CRUD.git",
      aosDelay: "900",
    },
    
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return (
              <Cards
                key={items.id}
                item={items}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
