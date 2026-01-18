import { useNavigate } from "react-router-dom";
import CustomButton from "../../Buttons/customBtnMain";
import ProjectCard, { Project } from "../../projectCard";



const projects: Project[] = [
    {
        name: "Farmworld Adventure",
        stacks: ["Godot", "Gdscript", "Aseprite"],
        description: "this whole game is crafted by myself from assets to code, i use aseprite to create the assets and i also release it to itch.io, the project is still under development",
        url: "https://youtu.be/JSiWRUnF9jM",
        gitHub: "https://github.com/atib-gmc/farm-world-adventure/tree/main",
        imgs: ["https://raw.githubusercontent.com/atib-gmc/gifs-footage/refs/heads/main/muzKXI.gif",
            "https://raw.githubusercontent.com/atib-gmc/gifs-footage/refs/heads/main/TGySmv.png",
            "https://raw.githubusercontent.com/atib-gmc/gifs-footage/refs/heads/main/output1-exsasaport.gif"
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
    }
];

const ProjectsGame = () => {
    const navigate = useNavigate();
    return (
        <>
            <hr className="divider my-8 border-t-2  border-dashed mx-auto  border-main-dark" />
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} id={i} />
            ))}
            <CustomButton className="mt-11 " onClick={() => navigate("/projects")}>
                More Projects
            </CustomButton>
        </>
    );
}

export default ProjectsGame;
