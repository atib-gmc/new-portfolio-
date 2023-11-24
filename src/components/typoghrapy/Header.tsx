import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type Tprops = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};
const Header = ({ children, className, ...rest }: Tprops) => {
  const c = twMerge(
    ` px-2 font-thin leading-wider pt-[2px] bg-main-dark text-main-yellow`,
    className
  );
  return (
    <span {...rest} className={c}>
      {children}
    </span>
  );
};

export default Header;
