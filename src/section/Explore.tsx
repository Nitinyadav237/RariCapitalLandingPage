import Button from "../components/Button";
import { motion } from "framer-motion";
import { containerVariants,itemVariants} from "../../src/Animation"


const Explore = () => {
  

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-between gap-2 border-emerald-100 bg-gradient-to-r from-[#0c134d] via-[#322380] to-[#171e65] px-4 py-3 md:px-14 lg:h-[70vh] lg:flex-row lg:px-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Trigger visibility when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger based on visibility amount
        className="lg:h-84 h-42 w-full space-y-4 md:mt-20 md:space-y-8 lg:-mt-20 lg:w-1/2 lg:space-y-8"
      >
        <motion.h1
          variants={itemVariants}
          className="font-robotoss text-2xl font-semibold capitalize tracking-wide text-white md:text-6xl"
        >
          Build on Rari Capital
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[#7e839e] lg:text-xl"
        >
          Learn more about the Rari Capital protocol, task forces, or come and chat with others in the community as we develop the future of the protocol.
        </motion.p>

        <Button
          message="Explore Documentation"
          borderRadius="rounded-lg"
          width="w-80"
          height="h-16"
          text="lg:text-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="md:w-1/2"
      >
        <img
          className="h-[35vh] w-[40vw]  mb-4 rotate-12 md:-translate-y-1 lg:h-[100vh] lg:translate-x-4"
          src="/Cryptocurrency Wallet (1).png"
          alt="wallet"
        />
      </motion.div>
    </div>
  );
};

export default Explore;
