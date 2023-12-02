import CustomButton from "../Buttons/customBtnMain";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../typoghrapy/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRef, useState } from "react";
import PopUp from "../popUp";
import { AnimatePresence } from "framer-motion";
const schema = z.object({
  email: z.string().email("invalid email format"),
  message: z.string().min(3, "text is too short"),
});

type Tschema = z.infer<typeof schema>;
const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    getValues,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Tschema>({ resolver: zodResolver(schema) });
  const form = useRef<HTMLFormElement>(null);
  const [showPopUp, setShowPopUp] = useState(false);
  function popUp() {
    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 3000);
  }

  const onSubmit: SubmitHandler<Tschema> = () => {
    setLoading(true);
    emailjs
      .send(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        getValues(),
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        () => {
          setMessage("success...");
          setLoading(false);
          setIsSuccess(true);
          popUp();
          reset();
        },
        (err) => {
          console.log("FAILED...", err);
          setMessage("something went wrong.");
          setLoading(false);
          setIsSuccess(false);
          popUp();
        }
      );
  };
  return (
    <div className="w-full space-y-5 text-main-dark max-w-xl px-5 mx-auto text-center py-8">
      {/* <PopUp /> */}
      <AnimatePresence>
        {showPopUp && <PopUp isSuccess={isSuccess} message={message} />}
      </AnimatePresence>
      <form
        id="contact"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 border-y-2 border-dashed border-main-dark py-8 "
      >
        <Header className="text-xl inline-block p-2">Contact Me</Header>
        <label htmlFor="email" className="">
          <h5 className="text-start">@email: </h5>
          <input
            {...register("email")}
            required
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            style={{ caretShape: "bar" }}
            className="bg-transparent  placeholder-main-dark/80 placeholder-none focus:placeholder-visible  focus:bg-transparent selection:bg-main-dark/90 py-2 selection:text-main-yellow  w-full focus:outline-none focus:border-b-[1px] border-main-dark"
          />{" "}
          {/* error message */}
          {errors?.email && (
            <p className="text-red-400 py-2 text-start">
              {errors.email.message}
            </p>
          )}
          <br />
        </label>
        <label htmlFor="message">
          <h5 className="text-start">@message:</h5>

          <textarea
            {...register("message")}
            required
            placeholder="type your messages"
            name="message"
            id="message"
            className="bg-transparent placeholder-main-dark/70 selection:bg-main-dark/10 py-2 text-sm text-main-dark selection:text-main-yellow  focus:outline-none focus:border-b-[1px] w-full  border-main-dark"
          ></textarea>
          {errors?.message && (
            <p className="text-red-400 py-2 text-start">
              {errors?.message.message}
            </p>
          )}
        </label>
        <CustomButton
          disabled={loading}
          className="hover:scale-105 disabled:cursor-disable  self-center"
        >
          {loading ? "sending. . ." : "submit"}
        </CustomButton>
      </form>
      <h4 className="text-main-dark/80   scale-95 h4 text-sm">
        Developed + designed by Atib
      </h4>
      <h4 className="text-main-dark/80   scale-95 text-xs font-thin ">
        Copyright &copy; Atib 2023. All Right Reserved
      </h4>
    </div>
  );
};

export default Footer;
