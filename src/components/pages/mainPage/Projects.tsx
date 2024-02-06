import { useNavigate } from "react-router-dom";
import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import ProjectCard, { Project } from "../../projectCard";
import Header from "../../typoghrapy/Header";

const projects: Project[] = [
  {
    name: "Social-Media-App",
    stacks: ["React", "Typesript", "Firebase", "Redux", "Tailwindcss"],
    description:
      "This project aims to develop a modern and interactive social media application leveraging the power of React, Firebase, and TypeScript. The application focuses on providing users with a seamless and engaging platform for social networking while incorporating robust functionalities and a user-friendly interface.",
    gitHub: "https://github.com/adios35/socialMediaAppFireBase",
    url: "https://social-media-app-fire-base.vercel.app",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1704549580/porto/flvxinbevgxnp0jypvti.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1706929777/kyflfvdcgsspdfwjbs5o.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1706929776/nhqu8lpzq8hmkowhq8bc.png",
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
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1704549579/porto/v1tdfidm24k8zw9v6agp.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1704549579/porto/q8ty9ymgjp5vnikyt0d7.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1704549578/porto/aqexqcsajgo2hb675vr7.png",
    ],
  }, {
    name: "fullstack-blog-app(mern + jwt)",
    stacks: ["React", "Typesript", "Tailwindcss", "Jwt", "Express", "NodeJs"],
    description:
      "this is my first fullstack app, and this is one of my project based learning while learning backend with express as backend database with mongo db , the hardest challange i faced is creating authentication with jwt",
    url: "https://incredible-axolotl-710e61.netlify.app/",
    gitHub: "",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705311715/porto/swsym7mk8gskhhmdnqfj.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705311716/porto/ccjjde1fyglzqy9nl4qx.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1704549833/v5r5pc5g8jikt7rbpstj.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705311715/porto/kjiat5fbcior6e93bxlm.png",
    ],
  }
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr className="divider my-8 border-t-2 border-dashed mx-auto  border-main-dark" />
      <section id="projects">
        <Header className="text-xl pt-[4px]">Projects</Header>
      </section>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} id={i} />
      ))}
      <CustomButton onClick={() => navigate("/projects")}>
        More Projects
      </CustomButton>
    </>
  );
};

export default Projects;
