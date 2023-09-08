type Props = {
  className?: string;
};

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="763"
      height="802"
      viewBox="0 0 763 802"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="763" height="802" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_206_5" transform="matrix(0.00105111 0 0 0.001 -0.025557 0)" />
        </pattern>
        <image
          id="image0_206_5"
          width="1000"
          height="1000"
        />
      </defs>
    </svg>
  );
};

export default Logo;