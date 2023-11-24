import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import ProjectCard, { Project } from "../../projectCard";
import Header from "../../typoghrapy/Header";
// import { AiFillGithub } from "react-icons/ai";

// const projects = [
//   {
//     name: "Social Media App",
//     stacks: ["React", "Typesript", "Firebase", "Redux"],
//     description:"social media app with react and firebase",
//     link:{}
//   },
// ];
const projects: Project[] = [
  {
    name: "Social Media App",
    stacks: ["React", "Typesript", "Firebase", "Redux"],
    description: "social media app with react and firebase",
    gitHub: "quh",
    url: "https://social-media-app-fire-base.vercel.app",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700575610/projects/wmxdq6xl6d1gz02fphbz.png",
    ],
  },
  {
    name: "lol",
    stacks: ["React", "Typesript", "Firebase", "Redux"],
    description:
      "This project aims to develop a modern and interactive social media application leveraging the power of React, Firebase, and TypeScript. The application focuses on providing users with a seamless and engaging platform for social networking while incorporating robust functionalities and a user-friendly interface.",

    url: "https://social-media-app-fire-base.vercel.app",
    gitHub: "",
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1700575610/projects/wmxdq6xl6d1gz02fphbz.png",
    ],
  },
];

const Projects = () => {
  return (
    <>
      <hr className="divider my-8 border-t-2 border-dashed mx-auto  border-main-dark" />
      <section>
        <Header className="text-xl pt-[4px]">Projects</Header>
      </section>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} id={i} />
      ))}
      {/* social media section*/}
      {/* <section className="space-y-5">
        <h1 className=" text-xl font-thin ">Social Media App</h1>
        <div className="flex justify-center gap-5 flex-wrap w-full">
          <StaticBtn>React</StaticBtn>
          <StaticBtn>typescript</StaticBtn>
          <StaticBtn>Firebase</StaticBtn>
          <StaticBtn>Redux</StaticBtn>
        </div>
        <p className="text-justify">
          This project aims to develop a modern and interactive social media
          application leveraging the power of React, Firebase, and TypeScript.
          The application focuses on providing users with a seamless and
          engaging platform for social networking while incorporating robust
          functionalities and a user-friendly interface.
        </p>
        <img
          src="https://res.cloudinary.com/dhvra0tqf/image/upload/v1700575610/projects/wmxdq6xl6d1gz02fphbz.png"
          alt=""
          className="shadow-btn-shadow w-full max-h-xl "
        />
        <div className="navigate flex gap-2">
          <CustomButton className="text-xs">
            <a
              href="https://social-media-app-fire-base.vercel.app"
              target="_blank"
            >
              Visit
            </a>
          </CustomButton>
          <CustomButton className="">
            <AiFillGithub />
          </CustomButton>
        </div>
      </section>
      <hr className="divider border-t-2 border-dashed mx-auto md:w-2/5  w-2/4 border-main-dark" />
      {/* foodApp */}
      {/* <section id="projects" className="space-y-5">
        <h1 className=" text-xl font-thin ">FoodApp</h1>
        <div className="flex justify-center gap-5 flex-wrap w-full">
          <StaticBtn>React</StaticBtn>
          <StaticBtn>Web dev</StaticBtn>
          <StaticBtn>frontend</StaticBtn>
          <StaticBtn>typescript</StaticBtn>
          <StaticBtn>js</StaticBtn>
          <StaticBtn>Firebase</StaticBtn>
          <StaticBtn>zustand</StaticBtn>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio
          vel quam alias delectus voluptatum ullam, esse aliquam ea sapiente
          nulla consequatur et ut quos eveniet, repellat velit facere
          accusantium architecto natus commodi ad! Repellendus molestias
          reiciendis corrupti debitis quaera
        </p>
        <div className="navigate flex gap-2">
          <CustomButton className=" text-xs">Visit</CustomButton>
          <CustomButton className="">
            <AiFillGithub />
          </CustomButton>
        </div>
      </section> */}
      {/* <hr className="divider border-t-2 border-dashed mx-auto md:w-2/5  w-2/4 border-main-dark mb-8" />
      <section className="space-y-5">
        <h1 className=" text-xl font-thin ">ecommerce</h1>
        <div className="flex justify-center gap-5 flex-wrap w-full">
          <StaticBtn>Web dev</StaticBtn>
          <StaticBtn>React</StaticBtn>
          <StaticBtn>frontend</StaticBtn>
          <StaticBtn>typescript</StaticBtn>
          <StaticBtn>js</StaticBtn>
          <StaticBtn>Firebase</StaticBtn>
          <StaticBtn>redux</StaticBtn>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio
          vel quam alias delectus voluptatum ullam, esse aliquam ea sapiente
          nulla consequatur et ut quos eveniet, repellat velit facere
          accusantium architecto natus commodi ad! Repellendus molestias
          reiciendis corrupti debitis quaera
        </p>
        <div className="navigate flex gap-2">
          <CustomButton className=" text-xs">Visit</CustomButton>
          <CustomButton className="">
            <AiFillGithub />
          </CustomButton>
        </div>
      </section> */}
      <CustomButton>More project</CustomButton>
    </>
  );
};

export default Projects;
