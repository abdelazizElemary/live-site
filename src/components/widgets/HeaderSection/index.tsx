import React from "react";
import Logo from "../../../assets/icons/Logo";
import Button from "../../atoms/Button";
import classNames from "classnames";

const HeaderSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className={classNames("flex flex-col xl:flex-row items-center justify-around mt-[150px] p-5 md:p-10")}
    >
      {/* Logo section */}
      <div className="flex self-center mb-10">
        <Logo className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-bounceY z-20" />
      </div>

      {/* Text section */}
      <div className="flex flex-col text-center gap-4 items-center tracking-widest">
        <div>
          <p className="text-base md:text-xl font-bold capitalize">Enter Champion arena, where combat</p>
          <p className="text-base md:text-xl font-bold capitalize">and cunning are your tools, and</p>
          <p className="text-base md:text-xl font-bold capitalize">adversaries your worthy foes</p>
        </div>
        <p className="text-3xl md:text-6xl font-extrabold uppercase gradient-text-animated">Fight or Die</p>
        <div>
          <p className="text-sm md:text-xl font-semibold">We beseech thee to partake in our grandest</p>
          <p className="text-sm md:text-xl font-semibold">spectacle, the live action Telegram bot,</p>
          <p className="text-sm md:text-xl font-semibold">where valor and fortune await!</p>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Button
            href="https://twitter.com/ChampionArenaTG"
            target="__blank__"
            variant="primary"
            className="capitalize"
          >
            twitter
          </Button>
          <Button
            href="https://t.me/championarenatg"
            target="__blank__"
            variant="primary" 
            className="capitalize"
          >
            telegram
          </Button>
        </div>
        <Button variant="primary" className="capitalize">
          launch bot
        </Button>
      </div>
    </div>
  );
});

HeaderSection.displayName = "HeaderSection";
export default HeaderSection;
