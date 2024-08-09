import { useNavigate } from "react-router-dom";
import CustomButton from "../../Buttons/customBtnMain";
import ProjectCard, { Project } from "../../projectCard";
import Header from "../../typoghrapy/Header";



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
    name: "farm game project (work in progress)",
    stacks: ["Gdscript", "Godot"],
    description:
      "this project made with godot and language called gdscript ,making game help me alot with programming since it lot harder than frontend in my opinion, this project still under development it has feature like combat mechanic, inventory, experience and state machine more feature will added in near future. you can try this game for free on itch.io link in down bellow",
    url: "https://atib-gmc.itch.io/project-farm",
    gitHub: "https://github.com/atib-gmc/portfolio-game-version-", features: [
      "smart ai enemy",
      "State machine",
      "combat system",
      "health system",
      "level up system",
      "inventory system",
      "interactive ui",
      "complex farming system ( in progress... )",
    ],
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1723083304/godot/dkhkyv5ihqn7wezqjok9.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1723083304/godot/lutmlqmg63yoq23v7sdc.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1723083303/godot/qqshrnqzdhxiyaleb0x4.png",
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
    name: "Cave adventure ",
    stacks: ["Godot", "Gdscript"],
    description:
      "this is my first godot game after month of learning it maybe it simple game kill all enemy and you won, sound simple but it complex and help me alot to understand some concept in programing like composition and inheritance",
    url: "https://atib-gmc.itch.io/cave-adventure",
    gitHub: "", features: [
      "combat system",
      "health system",
      "smart ai enemy",
      "state machine",
    ],
    imgs: [
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1723085718/godot/mrlchbeswfybwgqy2lab.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1723085717/godot/vrfptfxjq9iv41uzd4nq.png",
      "https://res.cloudinary.com/dhvra0tqf/image/upload/v1723085717/godot/sxotuvcuexwbgrzo3ldx.png",
    ],
  },
  {
    name: "nextjs blog project (fullstack)",
    stacks: ["nextjs", "postgresql", "prisma", "next-auth", "tip-tap"],
    description:
      "this blog project made with nextjs using prisma and postgresql and next-auth for authentication,i made blog app before using nodejs as backend and react as frontend, it take lot of time for simple aplication but this one i made with nextjs as part of my learning process, it lot faster to develop and less boilerplate especially the authentication part since i using next-auth, i use tiptap as a rich text editor and i deploy it to vercel you can visit in the link bellow ",
    url: "https://next-blog-app-3yu6.vercel.app/",
    gitHub: "", features: [
      "authentication with next-auth",
      "Crud",
      "responsive mobile first",
      "rich text editor",
    ],
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
}

export default Projects;
