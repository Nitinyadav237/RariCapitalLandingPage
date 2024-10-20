import { heart, rightArrow } from "../assets";
import { motion } from 'framer-motion';
import { containerVariants,itemVariants} from "../../src/Animation"

const MainSection = () => {
  const dynamicItems = ["farmers", "developers", "traders", "innovators"];

 
  return (
    <>
      <div className="min-h-[100vh] bg-gradient-to-r from-[#19175d] to-[#0f144f] px-6 md:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="py-4 md:py-8 lg:py-20"
        >
          <motion.h1 variants={itemVariants} className="font-robotoss text-3xl font-bold text-white md:text-6xl">
            Access the protocol
          </motion.h1>
          <motion.p variants={itemVariants} className="w-2/3 py-4 text-[#7e85a2] md:text-[1.2rem] lg:w-1/3">
            The Rari Capital protocol can be accessed by anybody around the world.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap items-center gap-10 lg:flex-nowrap"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="flex w-[23rem] justify-center items-center rounded-3xl border-2  border-[#392a7d] bg-[#23287b] p-4 md:h-72  md:w-full lg:w-1/2">
            <div className="flex flex-col  justify-center  md:w-2/3">
              <h1 className="text-3xl font-bold text-white md:text-5xl">Rari Capital</h1>
              <p className="mt-4 text-sm text-[#7c7fa6]">The primary interface for interacting with the Rari Protocol on Ethereum</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex  h-14 w-14 border-2 items-center justify-center rounded-full  border-[#713c9b]">
                  <img className=" h-8 w-8 -rotate-45" src={rightArrow} alt="contribute" />
                </div>
                <button className="h-14 w-40 md:w-44 rounded-lg border-2 border-[#713c9b] text-xl text-white hover:bg-[#713c9b]">
                  Explore Now
                </button>
              </div>
            </div>
            <img
              className="hidden md:inline-block md:w-[8rem]  pl-2 md:h-[12rem] lg:h-[14rem]"
              src="vecteezy_3d-nft-machine-png-illustration_10676836.png"
              alt="NFT machine"
            />
          </motion.div>

          {/* Stats Section */}
          <div className="w-full space-y-6 md:w-full lg:w-[35rem]">
            <StatCard variants={itemVariants} value="$90B+"
              description="Total Value Locked" bgColor="#29297d" />
            <StatCard variants={itemVariants} value="10,000+ "
              description="Community Members" bgColor="#2d2a80" />
          </div>
        </motion.div>
      </div>

      {/* Loved By Section */}
      <div
        
        className="relative flex h-[90vh] items-center justify-center bg-[#0c134c] md:h-[80vh]">
        <img className="h-[35rem] opacity-10" src="/Wave.png" alt="Wave" />
        <motion.h1 variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.9 }}

          className="absolute z-20 px-2 py-4 text-center font-robotoss text-[2rem] font-extrabold capitalize text-white md:text-[3.5rem] lg:w-[80rem]">
          <motion.img
            src={heart}
            className="absolute left-3 top-4 h-14 w-14 opacity-20 md:left-1 lg:left-20 lg:top-8"
            alt="Heart"
            animate={{
              scale: [0.8, 1.2, 0.8], // Animating scale from 0.8 to 1.2 and back to 0.8
              rotate: [-45, -45, -45], // Adding the rotate animation
            }}
            transition={{
              duration: 1, // Time for one full cycle (up and down)
              repeat: Infinity, // Keep repeating the animation indefinitely
              repeatType: 'mirror', // Ensure the animation occurs in a yoyo fashion (forward and backward)
              ease: 'easeInOut', // Smooth easing for scaling and rotation
            }}
          />


          Loved By Thousands of yield{" "}
          {dynamicItems.map((item, i) => (
            <motion.span variants={itemVariants} key={i} className="mt-4 inline-block rounded-full bg-[#414fe7] px-4 text-[2.5rem] md:ml-2 md:px-2">
              {item}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
};

// Reusable StatCard component for clean code
const StatCard = ({ variants, value, description, bgColor }: { variants: any; value: string; description: string; bgColor: string }) => (
  <motion.div
    style={{ backgroundColor: bgColor }}
    variants={variants} className={`flex items-center gap-8 rounded-2xl px-2 py-3 md:gap-16 md:px-8`}>
    <h1 className="translate-x-2 font-robotoss text-[3rem] font-bold text-white md:w-1/3 md:text-[4rem]">
      {value}
    </h1>
    <p className="text-gray-400 md:text-2xl lg:ml-5">{description}</p>
  </motion.div>
);

export default MainSection;
