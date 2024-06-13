'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from 'react';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const projects = [
  {
    id: 0,
    title: "Rk E-Commerce",
    image: "/images/rk.png",
    description: "React, TypeScript, Prisma"
  },
  {
    id: 1,
    title: "Landing Pages",
    image: "/images/login.png",
    description: "Wordpress"
  },
  {
    id: 2,
    title: "Bot Ticket",
    image: "/images/login.png",
    description: "Discord.js"
  },
  {
    id: 3,
    title: "KL Facilities",
    image: "/images/kl.png",
    description: "React.js, Typescript, Next.js (Code + UX/UI)",
    link: "https://klfacilities.com/"
  }
];

const projectsTwo = [
  {
    id: 0,
    title: "Projeto do Curso",
    image: "/images/login.png",
    description: "Java"
  },
  {
    id: 1,
    title: "Calculadora",
    image: "/images/login.png",
    description: "Java"
  },
  {
    id: 2,
    title: "Suporte com Java",
    image: "/images/login.png",
    description: "Back-End Santander"
  },
  {
    id: 3,
    title: "Tela de Login",
    image: "/images/login.png",
    description: "Html, Javascript, Vite"
  }
];

const LandingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white text-black'} font-inter flex flex-col items-center min-h-screen start-0`}>
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex items-center"
      >
        <header className="w-full md:p-36 p-16 space-y-4">
          <h1 className="text-4xl font-bold">👋 Ryan Figueredo</h1>
          <p className="font-sora font-light text-lg">&lt;Desenvolvedor Full Stack /&gt;</p>
          <div className="space-x-2">
            <Link href="/">Projetos</Link>
            <Link href="/">Sobre</Link>
            <Link href="/">Contato</Link>
          </div>
          <div className="flex gap-2">
            <Image
              alt="Local Icon"
              src="/svg/map.svg"
              width={20}
              height={20}
              className={!isDarkMode ? 'filter invert' : ''}
            />
            <p>Rio de Janeiro, BR</p>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative flex items-center justify-center px-2 py-2 rounded-full transition ease-in-out 
              ${isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50`}
          >

            <div className="flex space-x-2">
              <Image
                alt="Noturno Icon"
                src="/svg/moon.svg"
                width={18}
                height={18}
                className={!isDarkMode ? 'filter invert' : ''}
              />
              <Image
                alt="Diurno Icon"
                src="/svg/sun.svg"
                width={18}
                height={18}
                className={isDarkMode ? 'filter invert' : ''}
              />
            </div>
            <div className={`absolute transition-transform duration-300 ${isDarkMode ? 'left-2' : 'left-8'} ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}  rounded-full w-5 h-5`}></div>
          </button>
        </header>
        <div className="relative">
          <Image
            alt="Local Icon"
            src="/images/3.png"
            width={370}
            height={370}
            objectFit="cover"
          />
        </div>
      </motion.section>

      <motion.hr initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="w-4/5 h-0.5 bg-[#7C7C7C] border-none m-2 hidden md:block" />
    
      <motion.div 
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:w-screen h-full items-center md:p-36 p-16 space-y-2 md:space-y-4"
        >
        <h1 className="text-4xl font-bold">Projetos</h1>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="container space-y-4 h-full md:space-y-0 md:space-x-4 items-center md:flex justify-center"
          >
            {projects.map((project) => (
        <motion.li key={project.id} className="item" variants={item}> 
          {project.link ? (
              <Link href={project.link} target="_blank" className="flex items-end text-center w-52 h-72 rounded-lg hover:scale-105 duration-500 transition ease-in-out font-sora" style={{backgroundImage: `url("${project.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className={`${isDarkMode ? 'bg-[#1E1E1E] text-gray-200' : 'bg-gray-200 text-[#1E1E1E]'} text-gray-200 shadow-lg rounded-lg w-full p-2`}> 
                  <h2 className="text-base font-normal">{project.title}</h2>
                  <p className="text-xs font-light">{project.description}</p>
                </div>
              </Link>
            ) : (
              <div className="flex items-end text-center w-52 h-72 rounded-lg hover:scale-105 duration-500 transition ease-in-out font-sora" style={{backgroundImage: `url("${project.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className={`${isDarkMode ? 'bg-[#1E1E1E] text-gray-200' : 'bg-gray-200 text-[#1E1E1E]'} text-gray-200 shadow-lg rounded-lg w-full p-2`}> 
                  <h2 className="text-base font-normal">{project.title}</h2>
                  <p className="text-xs font-light">{project.description}</p>
                </div>
              </div>
            )}
        </motion.li>
      ))}
        </motion.ul>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="container space-y-4 h-full md:space-y-0 md:space-x-4 items-center hidden md:flex justify-center"
          >
            {projectsTwo.map((project) => (
        <motion.li key={project.id} className="item" variants={item}> 
          <Link href="/" className="flex items-end text-center w-52 h-72 rounded-lg hover:scale-105 duration-500 transition ease-in-out font-sora" style={{backgroundImage: `url("${project.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className={`${isDarkMode ? 'bg-[#1E1E1E] text-gray-200' : 'bg-gray-200 text-[#1E1E1E]'} text-gray-200 shadow-lg rounded-lg w-full p-2`}> 
              <h2 className="text-base font-normal">{project.title}</h2>
              <p className="text-xs font-light">{project.description}</p>
            </div>
          </Link>
        </motion.li>
      ))}
        </motion.ul>
      </motion.div>

      <motion.hr initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="w-4/5 h-0.5 bg-[#7C7C7C] border-none m-2 hidden md:block" />

      
    </div>
  );
}

export default LandingPage;
