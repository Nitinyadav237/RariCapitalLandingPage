import { motion } from "framer-motion";
import { rightArrow } from "../assets";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "../index.css";

const Hero = () => {
  // Variants for staggered animation with easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }, // Added ease
    },
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }, // Added ease
    },
  };

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }, // Added ease
    },
  };

  return (
    <div className="overflow-hidden bg-gradient-to-br from-[#422692] via-[#211a65] to-[#422692] px-4 md:min-h-[80vh] md:px-14 lg:min-h-[100vh] lg:px-20">
      <Navbar />
      <motion.div
        className="mt-10 flex min-h-[120vh] flex-col gap-20 md:min-h-[90vh] lg:-mt-20 lg:h-[95vh] lg:flex-row lg:items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div className="space-y-7 lg:space-y-8">
          <motion.h1
            className="mt-2 font-serif text-[2.3rem] font-bold tracking-normal text-white md:text-[3.5rem] lg:w-[50rem] lg:text-[4.8rem] lg:leading-[5rem]"
            variants={textVariants}
          >
            <span className="bg-gradient-to-r from-[#96e6f8] via-[#cbe7bd] to-[#f372e1] bg-clip-text text-transparent">
              Lending
            </span>
            , Borrowing &amp; Yield For
            <span className="bg-gradient-to-r from-[#96e6f8] via-[#cbe7bd] to-[#f372e1] bg-clip-text text-transparent">
              {" "}
              DeFi
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-[#7e839e] lg:w-[40rem] lg:px-2"
            variants={textVariants}
          >
            Rari Capital empowers individuals to break free by creating new
            opportunities, communities, and financial products.
          </motion.p>
          <motion.div
            className="flex items-center gap-4 font-medium"
            variants={containerVariants} // Staggered container for buttons
          >
            <motion.div variants={buttonVariants}>
              <Button
                message="Get started"
                borderRadius="rounded-lg"
                width="w-44"
                height="h-12"
                text="text-2xl"
              />
            </motion.div>
            <motion.button
              className="flex h-12 w-44 items-center justify-center gap-2 rounded-lg border text-center text-lg text-white"
              variants={buttonVariants}
            >
              Contribute
              <motion.img
                className="h-4 w-4 -rotate-45"
                src={rightArrow}
                alt="contribute"
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex items-center px-4 py-8 md:justify-center lg:w-[35rem] lg:px-10 lg:py-10"
          variants={imageVariants}
        >
          <img
            src="../../HeroImg.png"
            alt="background image"
            className="z-20 w-[25rem] object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
