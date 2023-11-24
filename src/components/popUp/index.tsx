import { GoAlert } from "react-icons/go";
import { motion } from "framer-motion";
import { BsHandThumbsUpFill } from "react-icons/bs";
import CustomButton from "../Buttons/customBtnMain";
type props = {
  message: string;
  isSuccess: boolean;
};
const PopUp = ({ message, isSuccess }: props) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 60, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="fixed   inset-0 z-[99]"
    >
      <CustomButton className="flex mx-auto gap-2 items-center">
        {isSuccess ? <BsHandThumbsUpFill size={26} /> : <GoAlert />}
        <span className="inline-block"> {message}</span>
      </CustomButton>
    </motion.div>
  );
};

export default PopUp;
