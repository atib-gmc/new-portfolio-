// import Header from "../typoghrapy/Header";
import { useTypewriter, Cursor } from "react-simple-typewriter";
//eslint-disable-next-line
//@ts-ignore
import Donut from "react-spinning-donut";
// import Header from "../typoghrapy/Header";

const Greeting = () => {
  const text = useTypewriter({
    words: ["Frontend Developer", "Backend Enginer", "and Designer"],
    loop: true,
  });

  return (
    <>
      <div className="donout font-mono bg-main-dark text-main-yellow  shadow-main-dark/50 shadow-btn-shadow overflow-hidden">
        <Donut color="#F6D4B1" scaleX={1.5} scaleY={1.2} />
      </div>
      <h1 className="text-2xl pt-[4px]">Hi there, My name is Atib I,m </h1>
      <br />
      {/* <Header className="text-xl pt-[4px]  mb-2"> */}
      <span>{text[0]}</span>
      <span>
        <Cursor cursorStyle="_" />
      </span>
      {/* </Header> */}
    </>
  );
};

export default Greeting;
