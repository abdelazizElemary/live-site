import classNames from "classnames";

type Props = {
  title: string;
  headline?: string;
  subtitle: string;
  blur?: boolean;
  gradient?: boolean;
  points: string[];
};

const TokenomicsCard: React.FC<Props> = ({ blur, title, headline, subtitle, gradient, points }) => {
  return (
    <div
      className={classNames(
        "flex flex-col",
        "w-[300px] gap-6 min-h-[212px] md:min-h-[330px]",
        blur && "backdrop-blur-sm",
        "border border-black rounded-[10px] p-3"
      )}
    >
      <div
        className={classNames(
          "flex flex-row gap-2 font-extrabold text-2xl md:text-4xl capitalize",
          gradient && "gradient-text-animated"
        )}
      >
        {title}
        {headline && (
          <p
            className={classNames(
              "flex self-end font-semibold text-sm capitalize",
              gradient && "gradient-text-animated"
            )}
          >
            {headline}
          </p>
        )}
      </div>
      <p className="flex self-start text-lg">{subtitle}</p>
      <p className="w-full h-[5px] rounded-lg bg-violet-0"></p>
      <div className="flex flex-col gap-2">
        {points.map((point, idx) => (
          <div key={idx} className="flex flex-row items-start gap-3">
            <p className="rounded-full w-2 h-2 bg-violet-0 mt-2.5" />
            <p className="text-xl capitalize">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenomicsCard;
