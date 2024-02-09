import { AiFillGithub } from "react-icons/ai";
import CustomButton from "../Buttons/customBtnMain";
import StaticBtn from "../Buttons/staticBtn";
import { useState } from "react";
import Carousel from "../carousel";
import Carousel2 from "../carousel/Carousel2";
// import { Carousel } from "react-responsive-carousel";
export type Project = {
  name: string;
  stacks: string[];
  description: string;
  imgs: string[];
  url?: string;
  gitHub?: string;
  features?: string[];
};

const ProjectCard = ({ project, id }: { project: Project; id: number }) => {
  const { description, imgs, name, stacks, url, gitHub } = project;
  const [isShow, setIsShow] = useState(false);

  return (
    <section className="space-y-5" key={id}>
      <h1 className=" text-xl font-thin ">
        {id + 1}. {name}
      </h1>
      <div className="flex justify-center gap-5 flex-wrap w-full">
        {stacks?.map((name, i) => (
          <StaticBtn key={i}>{name}</StaticBtn>
        ))}
      </div>
      <p className="text-justify">
        {isShow ? description : description.slice(0, 80) + " . . ."}
      </p>
      {isShow && (
        <>
          <Carousel2 images={imgs} />

          <div className="navigate flex gap-2">
            {url && (
              <CustomButton className="text-xs">
                <a href={url} target="_blank">
                  Visit
                </a>
              </CustomButton>
            )}
            <CustomButton className="">
              <a href={gitHub} target="_blank">
                <AiFillGithub />
              </a>
            </CustomButton>
          </div>
        </>
      )}
      <CustomButton
        onClick={() => setIsShow((pre) => !pre)}
        className="text-xs"
      >
        {isShow ? "close" : "expand"}
      </CustomButton>
      <hr className="divider block my-8 border-t-2 border-dashed mx-auto md:w-2/5  w-2/4 border-main-dark" />
    </section>
  );
};

export default ProjectCard;
