import BG from "../assets/bg-shadow.png";
import bgLogo from "../assets/banner-main.png";

const Banner = () => {
  return (
    // bg-image
    <div
      className="container w-full mx-auto bg-black rounded-md h-130"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="flex flex-col items-center justify-center container mx-auto px-4">
        {/* bg logo */}
            <div className="pt-15">
            <img src={bgLogo} alt="Logo" />
            </div>
            <h2 className="text-white text-xl md:text-2xl font-bold mt-4 ">
            Assemble Your Ultimate Dream 11 Cricket Team
            </h2>
            <p className="text-zinc-400 text-lg mt-2">
            Beyond Boundaries Beyond Limits
            </p>
            <button className="btn border-4 border-white mt-4 bg-yellow-400">
            Claim Free Credit
            </button>
      </div>
    </div>
  );
};

export default Banner;
