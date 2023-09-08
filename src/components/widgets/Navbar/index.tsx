import React from "react";
import Button from "../../atoms/Button";

type Props = {
  onClick?: (section: string) => void;
};
const Navbar = React.forwardRef<HTMLDivElement, Props>(({ onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed flex flex-row w-full justify-center md:justify-between items-center p-2 md:p-5 md:px-10 z-50"
    >
      <div className="flex flex-row justify-between self-center items-center gap-2 text-lg p-2 md:px-6 backdrop-blur-lg bg-opacity-10 rounded-xl shadow-md border border-[#bbbbbb] border-opacity-10 md:w-2/3">
        <p onClick={() => onClick?.("about")} className="cursor-pointer hover:text-3xl">
          About
        </p>
        <p onClick={() => onClick?.("tokenomics")} className="cursor-pointer hover:text-3xl">
          Tokenomics
        </p>
        <p onClick={() => onClick?.("howToPlay")} className="cursor-pointer hover:text-3xl">
          Instructions
        </p>
        <p className="cursor-pointer hover:text-3xl">Document</p>
      </div>
      <Button variant="primary" className="hidden md:flex text-xl font-semibold h-14">
        Buy
      </Button>
    </div>
  );
});

export default Navbar;