import { useState } from "react";
import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import Header from "../../typoghrapy/Header";
import Projects from "./Projects";
import Collapse from "../../collapse";

const Main = () => {
  const [showMore, setShowMore] = useState(false);
  document.title = "Welcome to my portfolio | Home ";

  return (
    <div className=" mx-auto   border-t-2 border-main-dark pt-8 border-dashed  w-full space-y-5">
      <Header id="about" className="text-xl pt-[4px] block py-2">Greetings</Header>

      <section className="skills text-justify justify-center  flex flex-wrap gap-4">
        <p className="   ">
          My name is Atib i'am self taught web developer from Lebak Banten,
          welcome to my portfolio
        </p>
        {showMore && (
          <p>
            i am an intpt who love tech and cup of coffe
          </p>
        )}
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
        <Header id="skills" className="text-xl pt-[4px] block py-2">My Skills</Header>
        <Collapse title="frontend" skills={["Html", "Css", "Javascript", "Sass", "Typescript", "React", "Tailwindcss", "NextJs"]} />
        <Collapse title="Backend" skills={["NodeJs", "ExpressJs", "Mysql", "MongoDb", "PrismaJs", "Authentication", "Cookie", "Session", "php( currently learning )", "Laravel(currently learning)"]} />
      </section>
      {/* projects */}
      <Projects />
    </div>
  );
};

export default Main;
