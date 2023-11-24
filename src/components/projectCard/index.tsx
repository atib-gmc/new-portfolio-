import { AiFillGithub } from "react-icons/ai";
import CustomButton from "../Buttons/customBtnMain";
import StaticBtn from "../Buttons/staticBtn";
import { useState } from "react";
export type Project = {
  name: string;
  stacks: string[];
  description: string;
  imgs: string[];
  url: string;
};
const ProjectCard = ({ project, id }: { project: Project; id: number }) => {
  const { description, imgs, name, stacks, url } = project;
  const [isShow, setIsShow] = useState(false);

  return (
    <section className="space-y-5" key={id}>
      <h1 className=" text-xl font-thin ">{name}</h1>
      <div className="flex justify-center gap-5 flex-wrap w-full">
        {stacks?.map((name, i) => (
          <StaticBtn key={i}>{name}</StaticBtn>
        ))}
      </div>
      <p className="text-justify">
        {isShow ? description : description.slice(0, 100) + " . . ."}
      </p>
      {isShow && (
        <>
          {imgs?.map((url, i) => (
            <img
              key={i}
              src={url}
              alt=""
              className="shadow-btn-shadow w-full max-h-xl "
            />
          ))}
          <div className="navigate flex gap-2">
            {url && (
              <CustomButton className="text-xs">
                <a href={url} target="_blank">
                  Visit
                </a>
              </CustomButton>
            )}
            <CustomButton className="">
              <AiFillGithub />
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
