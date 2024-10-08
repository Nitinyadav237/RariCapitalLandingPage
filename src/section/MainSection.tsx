import { heart, rightArrow } from "../assets";

const MainSection = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-gradient-to-r from-[#19175d] to-[#0f144f] px-6 md:px-20">
        <div>
          <div className="py-4 md:py-8 lg:py-20">
            <h1 className="font-robotoss text-3xl font-bold text-white md:text-6xl">
              Access the protocol
            </h1>
            <p className="w-2/3 py-4 text-[#7e85a2] md:text-[1.2rem] lg:w-1/3">
              The Rari Capital protocol can be accessed by anybody around the
              world.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-10 lg:flex-row lg:flex-nowrap">
            <div className="flex w-[23rem] flex-wrap justify-center rounded-3xl border-2 border-[#392a7d] bg-[#23287b] px-2 py-3 md:h-72 md:w-full md:flex-nowrap md:px-8 lg:w-1/2 lg:items-center">
              <div className="flex flex-col justify-center md:w-2/3">
                <h1 className="text-3xl font-bold text-white md:text-5xl">
                  Rari Capital
                </h1>
                <p className="mt-4 text-sm text-[#7c7fa6] lg:mt-2">
                  The primary interface for interacting with the Rari Protocol
                  on Ethereum
                </p>

                <div className="mt-4 flex items-center md:mt-8 md:gap-4 lg:mt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#713c9b] md:h-16 md:w-16">
                    <img
                      className="h-6 w-6 -rotate-45 md:h-8 md:w-8"
                      src={rightArrow}
                      alt="contribute"
                    />
                  </div>
                  <button className="flex h-14 w-44 items-center justify-center rounded-lg border-[#713c9b] text-center text-xl text-white hover:border">
                    {" "}
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="m mt-5 flex h-[8rem] w-[12rem] justify-center pl-2 md:h-[12rem] lg:h-[14rem]">
                <img
                  className="h-[8rem] w-[10rem] md:h-[12rem] md:w-[12rem] lg:h-[12rem] lg:w-[14rem]"
                  src="vecteezy_3d-nft-machine-png-illustration_10676836.png"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full space-y-6 rounded-3xl md:w-full lg:w-[35rem]">
              <div className="tr flex items-center gap-8 rounded-2xl bg-[#29297d] px-2 py-3 md:gap-16 md:px-8">
                <h1 className="translate-x-2 font-robotoss text-[3rem] font-bold text-white md:w-1/3 md:text-[4rem]">
                  $90B
                  <span className="text-center font-extrabold text-pink-500 md:text-6xl">
                    +
                  </span>
                </h1>
                <h1 className="py-4 text-gray-400 md:w-44 md:px-4 md:text-2xl">
                  Total Value Locked
                </h1>
              </div>
              <div className="flex items-center gap-8 rounded-2xl bg-[#2d2a80] px-2 py-3 md:gap-28 md:px-8">
                <h1 className="w-2/3 translate-x-2 font-robotoss text-[2.5rem] font-bold text-white md:w-1/3 md:text-[4rem]">
                  10,000
                  <span className="text-center font-extrabold text-pink-500 md:text-6xl">
                    +
                  </span>
                </h1>
                <h1 className="px-2 py-4 text-gray-400 md:w-44 md:text-2xl">
                  Community Members
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-[90vh] items-center justify-center bg-[#0c134c] md:h-[80vh]">
        <img
          className="h-[35rem] opacity-10"
          src="../../public/Wave.png"
          alt=""
        />
        <h1 className="absolute z-20 px-2 py-4 text-center font-robotoss text-[2rem] font-extrabold capitalize text-white md:text-[3.5rem] lg:w-[80rem]">
          <img
            src={heart}
            className="absolute left-3 top-4 h-14 w-14 -rotate-45 opacity-20 md:left-1 lg:left-20 lg:top-8"
            alt=""
          />
          Loved By Thousands of yield
          {["farmers", "developers", "traders", "innovators"].map((item, i) => (
            <span
              key={i}
              className="mt-4 inline-block rounded-full bg-[#414fe7] px-4 text-[2.5rem] md:ml-2 md:px-2"
            >
              {item}
            </span>
          ))}
        </h1>
      </div>
    </>
  );
};

export default MainSection;
