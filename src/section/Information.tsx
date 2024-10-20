import { containerVariants, itemVariants } from "../Animation";
import { rightArrow } from "../assets";
import { cardinfo, social } from "./../constant";
import { motion } from 'framer-motion';

const Information = () => {
  

  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-[#0f1654] via-[#1a216b] to-[#0f1654] px-4 py-10 text-center font-robotoss md:px-14 lg:px-20 lg:py-20">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Trigger visibility when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger based on visibility amount
        className="px-4"
      >
        <motion.h1 variants={itemVariants} className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
          Infinite Possibilities
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-2 text-sm text-[#9ea2b5] md:text-base lg:mt-3">
          Rari Capital opens up the world to financial innovation on an
          unprecedented scale.
        </motion.p>
      </motion.div>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // Trigger based on visibility amount
        className="flex flex-wrap md:gap-4 lg:flex-nowrap lg:gap-8"
      >
        {cardinfo.map((item) => (
          <motion.div 
            variants={itemVariants}  // Use item variants for each card
            className="mt-14 h-[23rem] rounded-3xl bg-[#212878] px-12 pt-4 text-left"
            key={item.title}
          >
            <h2 className="text-[2.5rem] font-bold text-white">{item.title}</h2>
            <div className="flex justify-center">
              <img
                className="h-[12rem] w-[10rem]"
                src={item.image}
                alt={item.title}
              />
            </div>
            <p className="text-center text-lg font-semibold text-[#9ea2b5]">
              {item.info}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
         variants={containerVariants}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.3 }}
         className="mt-36 px-4"
      >
        <motion.h1 variants={itemVariants}  className="text-6xl font-bold capitalize text-white">
          Join the family
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-3 text-sm text-[#9ea2b5] lg:text-base">
          Learn more about the Rari Capital Protocol, task forces, and come chat
          with others in the community as we develop the future of the protocol.
        </motion.p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mt-20 flex flex-wrap items-center justify-center gap-2 md:mb-20 lg:mb-40 lg:flex-row lg:flex-nowrap"
      >
        {social.map((item) => (
          <motion.div
            variants={itemVariants}
            key={item.iconName}
            className="relative h-full w-full border-pink-500 px-6 py-4 text-center lg:w-1/3"
          >
            {/* Floating Icon */}
            <div className="absolute -top-2 left-2 ">
              <img
                className="h-20 w-20 rounded-full"
                src={item.icon}
                alt={item.iconName}
              />
            </div>

            {/* Info Card */}
            <div className="flex items-center justify-center rounded-full bg-[#212878] py-3  ">
              <div className="flex w-full  items-center justify-center px-3 py-2">
                <div className="w-3/4 text-center flex justify-center items-center flex-col">
                  <h2 className="text-xl text-white">{item.iconName}</h2>
                  <p className="mt-2 text-xs lg:pr-4 lg:text-base text-balance  w-5/6 font-medium text-[#9ea2b5]">
                    {item.info}
                  </p>
                </div>

                {/* Right Arrow */}
                <div className="absolute right-12 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#713c9b]">
                  <img
                    className="h-6 w-6 -rotate-45"
                    src={rightArrow}
                    alt="contribute"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Information;
