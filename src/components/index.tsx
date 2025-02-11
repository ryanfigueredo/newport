"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ContactForm from "./form";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const projects = [
  {
    id: 0,
    title: "Gestão de Estoque",
    image: "/images/stockly.png",
    description: "Next.js, TypeScript, Postgress",
    link: "https://stockly-lovat.vercel.app/",
  },
  {
    id: 1,
    title: "Irmãos Mury",
    image: "/images/mury.png",
    description: "Landing Page",
    link: "https://irmaosmury.com.br/",
  },
  {
    id: 2,
    title: "Pedracom Pedreiras",
    image: "/images/pedracom.png",
    description: "Landing Page",
    link: "https://pedracom.com.br/",
  },
  {
    id: 3,
    title: "KL Facilities",
    image: "/images/kl.png",
    description: "React.js, Typescript, Next.js (Code + UX/UI)",
    link: "https://klfacilities.com/",
  },
];

const projectsTwo = [
  {
    id: 0,
    title: "T - Ecommerce",
    image: "/images/login.png",
    description: "Next.js, TypeScript, Prisma, Mercado Pago, Postgres",
  },
  {
    id: 1,
    title: "R - Ecommerce",
    image: "/images/login.png",
    description: "Next.js, TypeScript, Prisma, Iugu, Stripe, MySQL",
  },
  {
    id: 2,
    title: "Dashboard Financeiro",
    image: "/images/finance.png",
    description: "Em Desenvolvimento",
    link: "https://github.com/ryanfigueredo/finance-app",
  },
  {
    id: 3,
    title: "Loja Virtual - Informática",
    image: "/images/store.png",
    description: "Next.js, TypeScript, Prisma, Mercado Pago, Postgres",
    link: "https://rkstore-ebon.vercel.app/",
  },
];

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const LandingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
            template_params: {
              from_name: formData.get("name"),
              reply_to: formData.get("email"),
              message: formData.get("message"),
            },
          }),
        }
      );
      const data = await response.json();
      if (data.status === "200") {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 5000); // Oculta o aviso após 5 segundos
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1A1A1A] text-white" : "bg-white text-black"
      } font-inter flex flex-col items-center min-h-screen start-0`}
    >
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 0, y: 100 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        className="flex items-center"
      >
        <header className="w-full md:p-36 p-16 space-y-4">
          <h1 className="text-4xl font-bold">👋 Ryan Figueredo</h1>
          <p className="font-sora font-light text-lg">
            &lt;Desenvolvedor Full Stack /&gt;
          </p>
          <div className="space-x-2">
            <Link
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
              }}
            >
              Projetos
            </Link>
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              Sobre
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contato
            </Link>
          </div>
          <div className="flex gap-2">
            <Image
              alt="Local Icon"
              src="/svg/map.svg"
              width={20}
              height={20}
              className={!isDarkMode ? "filter invert" : ""}
            />
            <p>Rio de Janeiro, BR</p>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative flex items-center justify-center px-2 py-2 rounded-full transition ease-in-out 
              ${
                isDarkMode ? "bg-gray-200 text-black" : "bg-gray-900 text-white"
              }
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50`}
          >
            <div className="flex space-x-2">
              <Image
                alt="Noturno Icon"
                src="/svg/moon.svg"
                width={18}
                height={18}
                className={!isDarkMode ? "filter invert" : ""}
              />
              <Image
                alt="Diurno Icon"
                src="/svg/sun.svg"
                width={18}
                height={18}
                className={isDarkMode ? "filter invert" : ""}
              />
            </div>
            <div
              className={`absolute transition-transform duration-300 ${
                isDarkMode ? "left-2" : "left-8"
              } ${
                isDarkMode ? "bg-gray-900" : "bg-gray-200"
              }  rounded-full w-5 h-5`}
            ></div>
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

      <motion.hr
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-4/5 h-0.5 bg-[#7C7C7C] border-none m-2 block"
      />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-full h-full items-center p-16 md:p-36 space-y-4"
        id="project"
      >
        <h1 className="text-4xl font-bold">Projetos</h1>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="container sm:grid sm:grid-cols-2 sm:gap-4 h-full md:space-y-0 md:space-x-4 md:flex md:justify-center"
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              className="item w-52 h-72"
              variants={item}
            >
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-end text-center w-full h-full rounded-lg hover:scale-105 duration-500 transition ease-in-out font-sora"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`${
                      isDarkMode
                        ? "bg-[#1E1E1E] text-gray-200"
                        : "bg-gray-200 text-[#1E1E1E]"
                    } shadow-lg rounded-lg w-full p-2`}
                  >
                    <h2 className="text-base font-normal">{project.title}</h2>
                    <p className="text-xs font-light">{project.description}</p>
                  </div>
                </Link>
              ) : (
                <div
                  className="flex items-end text-center w-full h-full rounded-lg hover:scale-105 duration-500 transition ease-in-out font-sora"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`${
                      isDarkMode
                        ? "bg-[#1E1E1E] "
                        : "bg-gray-200 text-[#1E1E1E]"
                    } shadow-lg rounded-lg w-full p-2`}
                  >
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
          className="container sm:grid sm:grid-cols-2 sm:gap-4 h-full md:space-y-0 md:space-x-4 md:flex md:justify-center"
        >
          {projectsTwo.map((project) => (
            <motion.li
              key={project.id}
              className="item w-52 h-72"
              variants={item}
            >
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-end text-center w-full h-full rounded-lg hover:scale-105 duration-500 transition ease-in-out font-sora"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`${
                      isDarkMode
                        ? "bg-[#1E1E1E] text-gray-200"
                        : "bg-gray-200 text-[#1E1E1E]"
                    } shadow-lg rounded-lg w-full p-2`}
                  >
                    <h2 className="text-base font-normal">{project.title}</h2>
                    <p className="text-xs font-light">{project.description}</p>
                  </div>
                </Link>
              ) : (
                <div
                  className="flex items-end text-center w-full h-full rounded-lg hover:scale-105 duration-500 transition ease-in-out font-sora"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`${
                      isDarkMode
                        ? "bg-[#1E1E1E] "
                        : "bg-gray-200 text-[#1E1E1E]"
                    } shadow-lg rounded-lg w-full p-2`}
                  >
                    <h2 className="text-base font-normal">{project.title}</h2>
                    <p className="text-xs font-light">{project.description}</p>
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.hr
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-4/5 h-0.5 bg-[#7C7C7C] border-none m-2 block"
      />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className=""
        id="about"
      >
        <div className="md:w-full h-full items-center md:p-36 p-16 space-y-4 md:space-y-8">
          <h1 className="text-4xl font-bold">Sobre mim</h1>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="container  w-full gap-6 md:space-x-12 items-center md:flex md:justify-center"
          >
            <Image
              alt="Local Icon"
              src="/images/picture.png"
              width={200}
              height={0}
              className="hover:scale-105 rounded-md  transition ease-in-out"
            />

            <div className="text-justify space-y-4 font-light md:w-1/2">
              <p>
                Sou um profissional dinâmico e altamente motivado, estou me
                graduando em Sistemas de Informação. Possuo ampla experiência em
                publicidade e marketing, combinada com habilidades
                especializadas em design gráfico e UI/UX.
              </p>
              <p>
                Desde uma idade jovem, desenvolvi uma paixão pela tecnologia, o
                que me levou a explorar e aprimorar minhas habilidades. Minha
                jornada profissional tem sido marcada por conquistas
                significativas e contribuições substanciais para o sucesso de
                projetos inovadores.
              </p>
              <p>
                Residindo atualmente no Rio de Janeiro, trago uma perspectiva
                multicultural, tendo nascido em Feira de Santana, mas vivido
                maior parte da minha infância na Chapada Diamantina estado da
                Bahia e 2 anos em Nova Friburgo-RJ.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.hr
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-4/5 h-0.5 bg-[#7C7C7C] border-none m-2 block"
      />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="md:w-full h-full items-center md:p-36 p-16 space-y-2 md:space-y-8"
      >
        <h1 className="text-4xl font-bold">Linguagens e Tecnologias</h1>
        <div className="md:block md:space-y-8 flex">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="container h-full  md:space-x-12 items-center md:flex justify-center"
          >
            <Image
              alt="Local Icon"
              src="/svg/react.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/mysql.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/nodejs.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/java.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/js.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/ts.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
          </motion.ul>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="container h-full md:space-x-12 items-center md:flex justify-center"
          >
            <Image
              alt="Local Icon"
              src="/svg/ds.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/figma.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/next.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/tw.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
          </motion.ul>
        </div>
      </motion.div>

      <motion.hr
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-4/5 h-0.5 bg-[#7C7C7C] border-none m-2 block"
      />

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="md:w-full h-full items-center md:p-36 p-16 space-y-2 md:space-y-8"
      >
        <h1 className="text-4xl font-bold">Treinamentos e Certificados</h1>
        <div className="md:block md:space-y-8 flex">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="container h-full md:space-x-12 items-center md:flex justify-center"
          >
            <Image
              alt="Local Icon"
              src="/svg/santander.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/rocket.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/ecxel.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
          </motion.ul>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="container h-full md:space-x-12 items-center md:flex justify-center"
          >
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
            <Image
              alt="Local Icon"
              src="/svg/none.svg"
              width={50}
              height={50}
              className="hover:scale-105 transition ease-in-out"
            />
          </motion.ul>
        </div>
      </motion.div>

      <motion.hr
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-4/5 h-0.5 bg-[#7C7C7C] border-none m-2 block"
      />

      <ContactForm />
    </div>
  );
};

export default LandingPage;
