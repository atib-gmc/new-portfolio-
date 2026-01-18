import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import Header from "../../typoghrapy/Header";
import Collapse from "../../collapse";
import ProjectsWeb from "./Projects";
import ProjectsGame from "./projectsGame";

const Main = () => {
  const [showMore, setShowMore] = useState(false);
  document.title = "Welcome to my portfolio | Home ";
  const [selected, setSelected] = useState("web");
  const [direction, setDirection] = useState<any>(1);

  const changeTab = (value: any) => {
    setDirection(value === "web" ? -1 : 1);
    setSelected(value);
  };

  const variants = {
    enter: (direction: any) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };


  return (
    <div className=" mx-auto    border-t-2 border-main-dark pt-8 border-dashed  w-full space-y-5">
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
              I am a full-stack developer with a strong focus on frontend development. I started my web development journey around two years ago and became more seriously focused earlier this year. Despite being self-taught, I have built a solid foundation as a full-stack web developer.

              On the frontend, I specialize in building clean, responsive, and well-animated user interfaces using React and Next.js. I enjoy working with Tailwind CSS, Framer Motion, and shadcn/ui to create polished UI and smooth animations. I also use vanilla JavaScript when a project requires a lighter or simpler approach.

              On the backend, I have experience building APIs using Express.js and working with databases such as PostgreSQL and MySQL. I often use Supabase for rapid development and scalable backend solutions.

              In addition to web development, I also create games using the Godot engine with GDScript, which helps me sharpen my problem-solving skills and creativity.

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
            "ElectronJs (desktop app)",
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
          ]}
        />

        <Collapse
          title="Design & Creative Tools"
          skills={[
            "Figma",
            "Aseprite",
            "Clip Studio Paint",
            "Affinity"
          ]}
        />
      </section>
      {/* projects */}

      <nav className="w-full flex [&>*]:flex-1">
        <button onClick={() => changeTab("web")}> <Header className={`text-xl pt-[4px] block py-2 w-full ${selected === "web" ? "text-main-yellow bg-main-dark" : "text-main-dark bg-main-yellow"}`}>Web Projects</Header></button>
        <button onClick={() => changeTab("game")}> <Header className={`text-xl  pt-[4px] block py-2 w-full ${selected === "game" ? "text-main-yellow bg-main-dark" : "text-main-dark bg-main-yellow"}`}>Game Projects</Header></button>
      </nav>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={selected}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          {selected === "web" ? <ProjectsWeb /> : <ProjectsGame />}
        </motion.div>
      </AnimatePresence>


    </div>
  );
};

export default Main;
