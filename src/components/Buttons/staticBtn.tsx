import { ReactNode } from "react";

const StaticBtn = ({ children }: { children: ReactNode }) => {
  return (
    <button className="shadow-btn-shadow  h-6 px-2 border-dashed border-[1px] border-main-dark">
      {children}
    </button>
  );
};

export default StaticBtn;
