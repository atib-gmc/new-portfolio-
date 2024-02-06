import { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import ProjectCard, { Project } from "../../projectCard";
import Header from "../../typoghrapy/Header";
import CustomButton from "../../Buttons/customBtnMain";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects: Project[] = [
  {
    name: "todo-app-with-firebase-auth",
    stacks: ["React", "Typesript", "Firebase", "Redux"],
    description:
          "I have create my own todo app in my local machine and i about to put that in my portfolio, but i realize it was too ordinary and it was too dumb if i put that thing on my portfolio, so i need to make it little bit differnt, i was thinking it will be nice if user can register/login to the app and store their todo, but i have zero knowledge of backend and it was too overwhelming to learn that at that time and chatgpt didnt even born yet, after some research i found firebase, a free ready to go backend from google and the best thing is it already have authentication system out of the box. the learning curve isnt really that hard but quite challanging, after some googling and youtube i've finaly manage to build that aplication, i know its not really that impressive, but it was gate for me to little understanding of backend which is i learn in the next project",
    gitHub: "https://github.com/adios35/socialMediaAppFireBase",
    url: "https://todofirebase-app.netlify.app/",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705379331/porto/nyadf9hnx0l9j766dawk.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705379331/porto/jin13oczljk1kxxagmxy.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705379331/porto/ee2aeuz8tzcbpqjw3hkc.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705379331/porto/xgkr18zegdz3gbrnxtsi.png",
    ],
  },
  {
    name: "e-commerce",
    stacks: ["React", "Typesript", "Firebase", "Redux"],
    description:
      "This eCommerce project with user-friendly interface powered by React Typescript and Firebase. It encompasses essential functionalities like cart management, user registration, and login features. With real-time updates from Firebase, this platform ensures interactive UI, providing a seamless shopping experience for all users.",
    url: "https://e-commerce-firebase.netlify.app/",
    gitHub: "",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838692/ltp0sydo6k93orbinr6y.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838692/ltp0sydo6k93orbinr6y.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838691/artgpr5jraqsxhimb6zr.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838591/oj6pq48ahxg8t2kokqom.png",
    ],
  },
  {
    name: "my-first-website",
    stacks: ["Html", "Css", "Sass", "Javacsript"],
    description:
      "this the first website that i create along with free free bootcamp provided by my goverment",
    url: "https://my-first-project-course-website.netlify.app/",
    gitHub: "",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838692/ltp0sydo6k93orbinr6y.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838692/ltp0sydo6k93orbinr6y.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838691/artgpr5jraqsxhimb6zr.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700838591/oj6pq48ahxg8t2kokqom.png",
    ],
  },
];

const OtherProject = () => {
  const navigate = useNavigate();
  document.title = "My Portfolio | Other Projects";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // effect code
    return () => {
      // cleanup code
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="w-full space-y-8 relative">
        <motion.div
          style={{ top: 17, left: 230, position: "fixed", zIndex: 99 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CustomButton onClick={() => navigate("/")}>
            <AiFillHome size={26} />
          </CustomButton>
        </motion.div>
        <Header className="block mb-8 p-2">Other Projects</Header>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} id={i} />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default OtherProject;
