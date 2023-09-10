import { BsChevronUp } from "react-icons/bs";

type Props = {
  onClick: () => void;
};

const Footer: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="realtive flex flex-col items-center justify-center p-5 md:p-12">
      <p className="text-3xl md:text-6xl gradient-text-animated capitalize">ChampionsArena</p>
      <p className="text-3xl md:text-6xl">2023</p>
      <div
        onClick={onClick}
        className="fixed bottom-10 right-10 w-10 h-10 rounded-full bg-violet-0 bg-opacity-60 cursor-pointer p-3 flex flex-row justify-center items-center z-50 backdrop-blur-sm hover:scale-90 hover:transform"
      >
        <BsChevronUp className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default Footer;
