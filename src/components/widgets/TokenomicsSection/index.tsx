import classNames from "classnames";
import React from "react";
import TokenomicsCard from "../TokenomicsCard";
import { Fade } from "react-awesome-reveal";

type Props = {
  className?: string;
};

const TokenomicsSection = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  const fadeDirection = "up";
  const fadeDuration = 1500;
  return (
    <div
      ref={ref}
      className={classNames("flex flex-col gap-5 md:gap-14 items-center p-5 md:p-10 min-h-[500px]", className)}
    >
      <p className="font-extrabold text-3xl md:text-7xl uppercase gradient-text-animated">Tokenomics</p>

      <div className="flex flex-wrap justify-center items-start gap-6 self-center">
        <Fade direction={fadeDirection} duration={fadeDuration}>
          <TokenomicsCard
            title="project"
            subtitle="All of the $Blast tokens are allocated to the liquidity pool of the game."
            points={["100% initial liquidity pool"]}
            blur
            gradient
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <TokenomicsCard
            title="fees"
            headline="per transaction"
            subtitle="Taxes fund the gas fees and software costs."
            points={["5% buy fee", "5% sell fee"]}
            blur
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <TokenomicsCard
            title="prizes"
            headline="per game"
            subtitle="Prizes are largely allocated to the players."
            points={["2% burned", "3% gas fee share", "95% distributed to winners"]}
            blur
            gradient
          />
        </Fade>
      </div>
    </div>
  );
});

export default TokenomicsSection;
