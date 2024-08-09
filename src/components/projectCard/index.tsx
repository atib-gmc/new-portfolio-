import { AiFillGithub } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../Buttons/customBtnMain";
import StaticBtn from "../Buttons/staticBtn";
import { useState } from "react";
import Carousel2 from "../carousel/Carousel2";
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
  const { description, features, imgs, name, stacks, url, gitHub } = project;
  const [isShow, setIsShow] = useState(false);

  return (
    <section className="space-y-5" key={id}>
      <h1 className=" text-xl font-thin ">
        {id + 1}. {name}
      </h1>
      <div className="flex justify-center gap-5 flex-wrap w-full">
        {stacks?.map((name, i) => <StaticBtn key={i}>{name}</StaticBtn>)}
      </div>
      <p className="text-justify">
        {isShow ? description : description.slice(0, 80) + " . . ."}
      </p>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          >
            {features && (
              <>
                <ul className="text-sm text-start list-bullet">
                  <h4 className="text-lg  text-start">features :</h4>
                  {features.map((feature) => (
                    <li>- {feature}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="h-4"></div>
            <Carousel2 images={imgs} />

            <div className="navigate flex gap-2">
              {url && (
                <a href={url} target="_blank">
                  <CustomButton className="text-xs">
                    Visit
                  </CustomButton>
                </a>
              )}
              <a href={gitHub} target="_blank">
                <CustomButton className="">
                  <AiFillGithub />
                </CustomButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
