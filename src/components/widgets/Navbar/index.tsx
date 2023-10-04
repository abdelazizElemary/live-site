import React from "react";
import Button from "../../atoms/Button";

type Props = {
  onClick?: (section: string) => void;
};
const Navbar = React.forwardRef<HTMLDivElement, Props>(({ onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed flex flex-row w-full justify-center xl:justify-between items-center p-2 md:p-5 md:px-10 z-50"
    >
      <div className="flex flex-row justify-between self-center items-center gap-2 text-lg p-2 md:px-6 backdrop-blur-lg bg-violet-0 bg-opacity-50 rounded-xl shadow-md border border-violet-1 border-opacity-70 md:w-2/3">
        <p onClick={() => onClick?.("about")} className="cursor-pointer hover:text-3xl">
          About
        </p>
        <p onClick={() => onClick?.("tokenomics")} className="cursor-pointer hover:text-3xl">
          Tokenomics
        </p>
        <p onClick={() => onClick?.("howToPlay")} className="cursor-pointer hover:text-3xl">
          Instructions
        </p>
        <a
          href="https://arena-organization.gitbook.io/champions-arena/"
          target="__blank__"
          className="cursor-pointer hover:text-3xl"
        >
          Gitbook
        </a>
      </div>
      <Button href="https://www.dextools.io/app/en/ether/pair-explorer/0xbd02097a2ae90aa7e00d0c3b05fe822cdb5d6671" variant="primary" className="hidden xl:flex text-xl font-semibold h-14">
        Buy
      </Button>
    </div>
  );
});

export default Navbar;
