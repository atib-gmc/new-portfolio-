import { useState } from "react";
// import { useParams } from "react-router-dom";
import {
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { motion } from "framer-motion";
import CustomButton from "../Buttons/customBtnMain";

const Navbar = () => {
  // const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  function scrollTo(target: string) {
    const targetElement = document.getElementById(target) as HTMLDivElement;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsDropdownOpen(false);
    }
  }

  return (
    <nav className="navbar fixed z-20  p-4 w-full">
      <div className="container  relative mx-auto flex  justify-between items-center">
        {/* button */}
        <div className="cta-left  flex gap-3">
          <CustomButton
            onClick={toggleDropdown}
            className={`${
              isDropdownOpen &&
              "shadow-btn-hover scale-125  animate-bounce bg-main-yellow text-main-dark shadow-main-yellow"
            }`}
          >
            <AiOutlineMenu />
          </CustomButton>
          <div className="flex">
            <CustomButton
              className={`text-sm ${
                isDropdownOpen &&
                "shadow-btn-hover mr-[4px] bg-main-yellow text-main-dark shadow-main-yellow"
              }`}
            >
              <AiFillLinkedin size={26} />
            </CustomButton>
            <CustomButton
              className={`text-sm ${
                isDropdownOpen &&
                "shadow-btn-hover  bg-main-yellow text-main-dark shadow-main-yellow"
              }`}
            >
              <a href="https://github.com/adios35" target="_blank">
                <AiFillGithub size={26} />
              </a>
            </CustomButton>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <motion.div
          // animate={{ x: isDropdownOpen ? -390 : -1000 }}
          className={` flex  m-0 absolute inset-0 ${
            isDropdownOpen ? "w-screen " : "w-0 "
          } -top-4 -left-4 -z-10 duration-300 h-screen overflow-hidden`}
        >
          <div className="h-full   w-3/5 md:w-2/5 pt-36 md:pt-20  flex flex-col  md:[&>*]:h-10 [&>*]:h-20 bg-main-dark ">
            <motion.button
              onClick={() => scrollTo("projects")}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className="text-main-yellow md:self-start md:ml-8"
            >
              Projects
            </motion.button>
            <motion.button
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className="text-main-yellow  md:self-start md:ml-8"
            >
              About
            </motion.button>
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className="text-main-yellow  md:self-start  md:ml-8"
            >
              Contact
            </motion.button>
            {/* social media link */}
            <div className="social self-end flex mx-auto  gap-5 text-main-yellow md:hidden">
              <div className="w-4 h-4 rounded-full   ">
                <a
                  href="https://wa.me/081210736769?text=hello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineWhatsApp size={25} />
                </a>
              </div>
              <div className="w-4 h-4 rounded-full  ">
                <AiFillLinkedin size={25} />
              </div>
              <div className="w-4 h-4 rounded-full">
                <AiFillGithub size={25} />
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsDropdownOpen(false)}
            className="h-full w-2/5 "
          ></div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
