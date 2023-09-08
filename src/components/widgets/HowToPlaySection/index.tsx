import classNames from "classnames";
import React from "react";
import Card from "../Card";
import { Fade } from "react-awesome-reveal";

type Props = {
  className?: string;
};

const HowToPlaySection = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  const fadeDirection = "up";
  const fadeDuration = 1500;
  return (
    <div
      ref={ref}
      className={classNames("flex flex-col gap-5 md:gap-14 items-center p-5 md:p-10 min-h-[500px]", className)}
    >
      <p className="flex flex-row justify-center font-extrabold text-3xl md:text-7xl uppercase gradient-text-animated w-full">
        how to play
      </p>

      <div className="flex flex-wrap justify-center items-start gap-6 self-center">
        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="step 1"
            subtitle="/Connect to our bot"
            body="Interact with Arena_Bot to begin. This will lead you to our connnectAndApprove function."
            blur
            gradient
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="step 2"
            subtitle="Buy $Arena"
            body="To initiate or join a game you will need to deposit $ARENA."
            blur
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="step 3"
            subtitle="Fight"
            body="In our Telegram use the command /arena or /join to begin a battle. During each turn it will prompt the fighter to choose their target and attack."
            blur
            gradient
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="step 4"
            subtitle="Probabilities"
            points={[
              { title: "Warrior", description: "25% miss, 50% 1, 25% 2" },
              { title: "Mage", description: "50% 1, 50% 2" },
              { title: "Cleric", description: "20% miss, 40% 1, 40% 2" },
              { title: "Warrior", description: "6 HP & 1 average dmg" },
              { title: "Mage", description: "4 HP & 1.5 average dmg, including a special" },
              { title: "cleric", description: "5 HP & 1.25 average dmg, including a special" },
            ]}
            blur
          />
        </Fade>
      </div>
    </div>
  );
});

export default HowToPlaySection;
