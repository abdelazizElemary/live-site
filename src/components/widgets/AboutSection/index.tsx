import React from "react";
import Frame from "../../../assets/images/mobileFrame.png";
import MobilePicture from "../../../assets/images/mobilePic.png";
import classNames from "classnames";
import Card from "../Card";
import { Fade } from "react-awesome-reveal";

type Props = {
  className?: string;
};

const AboutSection = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  const fadeDirection = "left";
  const fadeDuration = 900;
  return (
    <div
      ref={ref}
      className={classNames("flex flex-col gap-5 md:gap-10 items-center p-5 md:p-10 min-h-[900px]", className)}
    >
      <p className="flex flex-row justify-center font-extrabold text-3xl md:text-7xl uppercase gradient-text-animated w-full">
        about
      </p>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="relative w-[400px] h-[800px]">
          <img
            src={MobilePicture}
            className="absolute top-[68px] left-[44px] w-[310px] h-[665px] object-cover rounded-3xl"
            alt="mobile"
          />
          <img src={Frame} className="absolute top-0 left-0 w-full h-full object-cover" alt="frame" />
        </div>

        <div className="flex flex-col justify-center gap-8 self-start p-6 pt-10 md:w-1/3">
          <div>
            <p className="text-6xl md:text-7xl font-bold tracking-widest">Arena bot</p>
          </div>
          <p className="w-full h-[10px] rounded-lg bg-violet-0"></p>
          <div className="text-2xl font-bold">
            The best arena-style Telegram gambling game awaits, and only the most daring shall compete for treasures and
            acclaim that lie therein!
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-6 self-center">
        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="Live 24/7"
            body="Engage in live, real-time battles within the Champion Arena alongside fellow members of our community on Telegram."
            gradient
          />
        </Fade>
        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card title="Fair for All" body="Roll probabilities are completely random. More is listed below." />
        </Fade>
        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card
            title="3 different characters"
            body="Pick from three different characters all with different special abilities"
            gradient
          />
        </Fade>
        <Fade direction={fadeDirection} duration={fadeDuration}>
          <Card title="Immediate disbursement" body="Competition winnings are paid out after every game on chain!" />
        </Fade>
      </div>
    </div>
  );
});

export default AboutSection;
