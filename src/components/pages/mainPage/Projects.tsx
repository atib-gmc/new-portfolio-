import { useNavigate } from "react-router-dom";
import CustomButton from "../../Buttons/customBtnMain";
import ProjectCard, { Project } from "../../projectCard";



const projects: Project[] = [
  {
    name: "Social-Media-App",
    stacks: ["React", "Typesript", "Firebase", "Redux", "Tailwindcss"],
    description:
      "i have strugle with tutorial hell, i watching tutorial after tutorial after tutorial and i fell like i didn't know anything despite all my effort to learn programming, after the frustation i force myself to sit down and write everything what ever what inside my head , it satrt as todo app but i acidently create ui that look like facebook homepage and decide create my own, well its not comparable to facebook wahtsoever especially the feature but i manage to recreate some feature like upload post, like, comment, follow and unfollow and probably will add some feature in near future.",
    gitHub: "https://github.com/adios35/socialMediaAppFireBase",
    url: "https://social-media-app-fire-base.vercel.app",
    features: [
      "responsive mobile first",
      "authentication",
      "image upload",
      "comment and like post",
      "follow unfollow",
    ],
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
    features: [
      "fully functional shopping cart ",
      "responsive",
      "dark mode",
      "serach product",
      "complex routing",
    ],
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
    gitHub: "", features: [
      "authentication with jwt",
      "Crud",
      "responsive mobile first",
      "comment the article",
    ],
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705311715/porto/swsym7mk8gskhhmdnqfj.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705311716/porto/ccjjde1fyglzqy9nl4qx.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1704549833/v5r5pc5g8jikt7rbpstj.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1705311715/porto/kjiat5fbcior6e93bxlm.png",
    ],
  },
  {
    name: "Plant vs Brainrot - restock (Whatsapp Bot) ",
    stacks: ["NodeJs", "Express", "Whatsapp-web.js", "discord.js"],
    description: "this is whatsapp bot that redirect restock seed from official plant vs brainrot discord to whatsapp channel, this bot will only show good seed and exclude bad seed, and it will update in realtime",
    url: "https://whatsapp.com/channel/0029VbBAYkdEKyZB343G4n2J",
    gitHub: "",
    features: [
      "redirect restock seed from official plant vs brainrot discord to whatsapp channel",
      "this boy will pnly show good seed and exclude bad seed",
      "realtime update",
    ],
    imgs: [
      "https://raw.githubusercontent.com/atib-gmc/gifs-footage/refs/heads/main/Screenshot_2026-01-17-12-05-47-84.jpg",
      "https://raw.githubusercontent.com/atib-gmc/gifs-footage/refs/heads/main/Screenshot_2026-01-17-12-05-37-64.jpg",
      "https://raw.githubusercontent.com/atib-gmc/gifs-footage/refs/heads/main/Screenshot_2026-01-17-12-05-42-67.jpg",
    ],
  }
];

const ProjectsWeb = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr className="divider my-8 border-t-2 border-dashed mx-auto  border-main-dark" />
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} id={i} />
      ))}
      <CustomButton onClick={() => navigate("/projects")}>
        More Projects
      </CustomButton>
    </>
  );
}

export default ProjectsWeb;
