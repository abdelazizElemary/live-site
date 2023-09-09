import classNames from "classnames";
import { ReactNode } from "react";

export interface POINTOPTION {
  title: string;
  description: string;
}

type Props = {
  title: string;
  subtitle?: string;
  body?: string;
  points?: POINTOPTION[];
  icons?: ReactNode;
  blur?: boolean;
  gradient?: boolean;
};

const Card: React.FC<Props> = ({ title, subtitle, body, points, icons, blur = true, gradient }) => {
  return (
    <div
      className={classNames(
        "flex flex-col",
        "gap-6 w-[300px] min-h-[140px] md:min-h-[240px]",
        blur && "backdrop-blur-sm",
        "border rounded-[10px] p-3"
      )}
    >
      <div
        className={classNames(
          "flex flex-col items-start gap-3 font-extrabold text-2xl capitalize",
          gradient && "gradient-text-animated"
        )}
      >
        {title}
        {subtitle && (
          <p
            className={classNames("font-normal text-base capitalize tarck-wider", gradient && "gradient-text-animated")}
          >
            {subtitle}
          </p>
        )}
      </div>
      {body && <p className="flex self-start text-lg">{body}</p>}
      {points && (
        <div className="flex flex-col gap-2">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-row items-start gap-3">
              <p className="text-xl font-normal text-white text-opacity-70 capitalize">{point.title}:</p>
              <p className="text-xl font-bold capitalize text-white text-opacity-90">{point.description}</p>
            </div>
          ))}
        </div>
      )}
      {icons}
    </div>
  );
};

export default Card;
