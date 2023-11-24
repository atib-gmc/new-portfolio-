import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  // Add any additional specific props for CustomButton here
  // For example:
  customProp?: string;
};

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  const c = twMerge(
    "bg-main-dark   hover:scale-110 shadow-btn-shadow hover:shadow-btn-hover active:shadow-btn-shadow active:scale-100 text-main-yellow px-4 py-[4px]  border-[1px] border-main-yellow scale-90 md:scale-100   transition-colors duration-300",
    className
  );
  return (
    <button
      style={{
        // boxShadow: "5px 5px 0 0  rgba(82, 82, 82, 0.4)",
        transition: "ease .3s",
      }}
      {...props}
      className={c}
    >
      {children}
    </button>
  );
};

export default CustomButton;
