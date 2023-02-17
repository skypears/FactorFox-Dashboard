import React from "react";
import { useMediaQuery } from "react-responsive";
interface LogoProps {
  height?: string | number;
  shrinkOnSmallScreen?: boolean;
}
const Logo = ({ height, shrinkOnSmallScreen }: LogoProps) => {
  const below576 = useMediaQuery({ query: "(max-width: 576px)" });
  // set  default height to 30px using default props
  height = height || "30";
  const logourl = "./assets/images/fflogo.png";
  const logoalt = "./assets/images/logo-slim.png";
  return (
    <>
      {below576 && shrinkOnSmallScreen ? (
        <img src={logoalt} alt="company-logo" height={height} />
      ) : (
        <img src={logourl} alt="company-logo" height={height} />
      )}
    </>
  );
};

export default Logo;
