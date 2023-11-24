import { useState } from "react";
import CustomButton from "../../Buttons/customBtnMain";
// import StaticBtn from "../../Buttons/staticBtn";
import Header from "../../typoghrapy/Header";
import Projects from "./Projects";

const Main = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" mx-auto   border-t-2 border-main-dark pt-8 border-dashed  w-full space-y-5">
      <Header className="text-xl pt-[4px] block py-2">Greetings</Header>

      <section className="skills text-justify justify-center  flex flex-wrap gap-4">
        <p className="   ">
          My name is Atib i'am self taught web developer from Lebak Banten,
          welcome to my portfolio
        </p>
        {showMore && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, qui!
            Quod iure minima impedit fuga minus quae debitis quo libero deleniti
            veritatis saepe inventore maxime, magnam, facere quia! Hic, unde.
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
