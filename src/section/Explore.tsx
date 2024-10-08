import Button from "../components/Button";
const Explore = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-between gap-2 border-emerald-100 bg-gradient-to-r from-[#0c134d] via-[#322380] to-[#171e65] px-4 py-3 md:px-14 lg:h-[70vh] lg:flex-row lg:px-20">
      <div className="lg:h-84 h-42 w-full space-y-4 md:mt-20 md:space-y-8 lg:-mt-20 lg:w-1/2 lg:space-y-8">
        <h1 className="font-robotoss text-2xl font-semibold capitalize tracking-wide text-white md:text-6xl">
          Build on rari capital
        </h1>
        <p className="text-[#7e839e] lg:text-xl">
          Learn more about the Rari Capital protocol , taks forces - or come and
          chat with others in the commnunity as we develops the future of the
          protocol
        </p>
        <Button
          message="Explore Documentation"
          borderRadius="rounded-lg"
          width="w-80"
          height="h-16"
          text="lg:text-2xl"
        />
      </div>

      <div className="md:w-1/2">
        <img
          className="h-[30vh] w-[60vw] rotate-12 md:-translate-y-1 lg:h-[100vh] lg:translate-x-6"
          src="/public/Cryptocurrency Wallet (1).png"
          alt="wallet"
        />
      </div>
    </div>
  );
};

export default Explore;
