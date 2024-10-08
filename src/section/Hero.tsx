import { rightArrow } from "../assets";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "../index.css";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-[#422692] via-[#211a65] to-[#422692] px-4 md:min-h-[80vh] md:px-14 lg:min-h-[100vh] lg:px-20">
      <Navbar />
      <div className="mt-10 flex min-h-[120vh] flex-col gap-20 md:min-h-[90vh] lg:-mt-20 lg:h-[95vh] lg:flex-row lg:items-center">
        {/* Text Section */}
        <div className="space-y-7 lg:space-y-8">
          <h1 className="mt-2 font-serif text-[2.3rem] font-bold tracking-normal text-white md:text-[3.5rem] lg:w-[50rem] lg:text-[4.8rem] lg:leading-[5rem]">
            <span className="bg-gradient-to-r from-[#96e6f8] via-[#cbe7bd] to-[#f372e1] bg-clip-text text-transparent">
              Lending
            </span>
            , Borrowing &amp; Yield For
            <span className="bg-gradient-to-r from-[#96e6f8] via-[#cbe7bd] to-[#f372e1] bg-clip-text text-transparent">
              {" "}
              DeFi
            </span>
          </h1>
          <p className="text-lg text-[#7e839e] lg:w-[40rem] lg:px-2">
            Rari Capital empowers individuals to break free by creating new
            opportunities, communities, and financial products.
          </p>
          <div className="flex items-center gap-4 font-medium">
            <Button
              message="Get started"
              borderRadius="rounded-lg"
              width="w-44"
              height="h-12"
              text="text-2xl"
            />
            <button className="flex h-12 w-44 items-center justify-center gap-2 rounded-lg border text-center text-lg text-white">
              Contribute{" "}
              <img
                className="h-4 w-4 -rotate-45"
                src={rightArrow}
                alt="contribute"
              />
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex items-center px-4 py-8 md:justify-center lg:w-[35rem] lg:px-10 lg:py-10">
          <img
            src="../../public/HeroImg.png"
            alt="background image"
            className="z-20 w-[25rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
