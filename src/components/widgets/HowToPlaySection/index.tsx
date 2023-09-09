import classNames from "classnames";
import React from "react";
import Card from "../Card";
import { Fade } from "react-awesome-reveal";

type Props = {
  className?: string;
};

const HowToPlaySection = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  const fadeDirection = "right";
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
            subtitle="Connect to ARENA bot"
            body="When you enter type /start to bring up @arena_bot. Follow the prompts from there."
            blur
            gradient
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="step 2"
            subtitle="Buy $Arena"
            body="To Wager $ARENA you will be provided a link to buy $ARENA. The command will be /ca or you can buy in directly from our site by clicking on the buy button at the top of the page. "
            blur
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="step 3"
            subtitle="Fight!"
            body="To begin a game type the command /arena <bet size> this will start a game where others can join in.Each character will have different abilities and damage points caused."
            blur
            gradient
          />
        </Fade>

        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="step 4"
            subtitle="Betting and Gameplay"
            body="To start a game you will be asked to place a bet size type the command /arena <bet size>. When the round starts the player will be prompted to enter a command like type /roll <enemy_index>. on who they want to attack along with what kind of attack."
            blur
            // points={[
            //   { title: "Warrior", description: "25% miss, 50% 1, 25% 2" },
            //   { title: "Mage", description: "50% 1, 50% 2" },
            //   { title: "Cleric", description: "20% miss, 40% 1, 40% 2" },
            //   { title: "Warrior", description: "6 HP & 1 average dmg" },
            //   { title: "Mage", description: "4 HP & 1.5 average dmg, including a special" },
            //   { title: "cleric", description: "5 HP & 1.25 average dmg, including a special" },
            // ]}
          />
        </Fade>
      </div>
    </div>
  );
});

export default HowToPlaySection;
