import React from "react";
import Navbar from "../../widgets/Navbar";
import HeaderSection from "../../widgets/HeaderSection";
import AboutSection from "../../widgets/AboutSection";
import TokenomicsSection from "../../widgets/TokenomicsSection";
import HowToPlaySection from "../../widgets/HowToPlaySection";
import Footer from "../../widgets/Footer";

const Home: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const tokenomicsRef = React.useRef<HTMLDivElement>(null);
  const howToPlayRef = React.useRef<HTMLDivElement>(null);

  const onClick = (section: string) => {
    if (section === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    } else if (section === "tokenomics") {
      tokenomicsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "howToPlay") {
      howToPlayRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-bgImage bg-cover bg-fixed flex flex-col gap-10 md:gap-20 bg-primary min-h-screen">
      <Navbar onClick={onClick} />
      <HeaderSection ref={topRef} />
      <AboutSection ref={aboutRef} />
      <TokenomicsSection ref={tokenomicsRef} />
      <HowToPlaySection ref={howToPlayRef} />
      <Footer onClick={handleScrollToTop} />
    </div>
  );
};

export default Home;
