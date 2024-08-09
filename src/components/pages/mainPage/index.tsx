import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import Header from "../../typoghrapy/Header";
import Projects from "./Projects";
import Collapse from "../../collapse";

const Main = () => {
  const [showMore, setShowMore] = useState(false);
  document.title = "Welcome to my portfolio | Home ";

  return (
    <div className=" mx-auto   border-t-2 border-main-dark pt-8 border-dashed  w-full space-y-5">
      <Header id="about" className="text-xl pt-[4px] block py-2">
        Greetings
      </Header>

      <section className="skills text-justify justify-center  flex flex-wrap gap-4">
        <p className="   ">
          My name is Atib i'am self taught web developer from Lebak Banten,
          welcome to my portfolio.
        </p>
        <AnimatePresence>
          {showMore && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
            >
              I am a fullstack developer but i more focused on frontend developer,i
              start my web dev journey about two year ago and start more focused
              in early this year, despite bing self taught, i have manage teach
              myself to become full stack web developer, i can create beautifull
              and well animated responsive frontend app and also create backend
              api with expressJs and php/laravel, i mainly using react and nextjs and sometimes
              using vanila for my project and i love using framer-motion and Shadcn for the
              ui and animation, for backend i mainly use expressjs and laravel postgresql for
              database. I also can create game using godot engine with gdscript
            </motion.p>
          )}
        </AnimatePresence>
        <CustomButton onClick={() => setShowMore((pre) => !pre)}>
          {showMore ? (
            <span>show less. . . </span>
          ) : (
            <span>Read more . . .</span>
          )}
        </CustomButton>
      </section>
      <hr className="divider my-8 border-t-2 border-dashed mx-auto  border-main-dark" />
      <section className="skills">
        <Header id="skills" className="text-xl pt-[4px] block py-2">
          My Skills
        </Header>
        <Collapse
          title="Frontend"
          skills={[
            "Html",
            "Css",
            "Javascript",
            "Sass",
            "Typescript",
            "React",
            "Tailwindcss",
            "framer-motion",
            "NextJs",
            "Redux",
            "Zustand",
            "ShadCn",
          ]}
        />
        <Collapse
          title="Backend"
          skills={[
            "NodeJs",
            "ExpressJs",
            "Mysql",
            "Postgresql",
            "Supabase",
            "Firebase",
            "MongoDb",
            "PrismaJs",
            "Authentication",
            "php",
            "Laravel",
            "Go ( still learning )",
          ]}
        />
      </section>
      {/* projects */}
      <Projects />
    </div>
  );
};

export default Main;
