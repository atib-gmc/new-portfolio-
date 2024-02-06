import { useState } from "react";
import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import Header from "../../typoghrapy/Header";
import Projects from "./Projects";

const Main = () => {
  const [showMore, setShowMore] = useState(false);
  document.title = "Welcome to my portfolio | Home ";

  return (
    <div className=" mx-auto   border-t-2 border-main-dark pt-8 border-dashed  w-full space-y-5">
      <Header className="text-xl pt-[4px] block py-2">Greetings</Header>

      <section id="about" className="skills text-justify justify-center  flex flex-wrap gap-4">
        <p className="   ">
          My name is Atib i'am self taught web developer from Lebak Banten,
          welcome to my portfolio.
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
      {/* projects */}
      <Projects />
    </div>
  );
};

export default Main;
