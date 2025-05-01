import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-5">
      <img className="w-[400px]" src={logo} alt="" />
      <p className="text-[#706f6f]">Journalism Without Fear or Favour</p>
      <p className="text-[#706f6f] font-semibold">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
      <div className="w-11/12 mx-auto my-3">
        <div className="flex gap-3 justify-center items-center bg-base-300 p-3">
          <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
          <Marquee
            play={true} // toggle pause/play
            pauseOnHover={true}
            speed={50}
            direction="left"
            gradient={false}
          >
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
