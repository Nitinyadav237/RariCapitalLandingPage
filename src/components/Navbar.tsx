import { useState } from "react";
import { hamburger, rocket, logo, cross } from "../assets/index.ts";
import { NavbarMenu } from "./../constant";
import { AnimatePresence, motion } from 'framer-motion';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child element's animation
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };


  return (
    <>
      <header className="flex h-[10vh] items-center justify-center text-center font-robotoss font-medium text-white lg:h-[20vh]">
        <nav className="flex w-full items-center justify-between">
          {/* Logo Section */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"

            className="flex items-center gap-3">
            <img className="bg-blue h-12 w-12" src={logo} alt="logo" />
            <h1 className="hidden text-2xl font-bold capitalize lg:block">
              Rari Capital
            </h1>
          </motion.div>

          {/* Navbar Menu */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"

            className="hidden items-center gap-7 font-semibold lg:flex">
            {NavbarMenu.map((item, i) => (
              <motion.li variants={itemVariants} key={item.id}>
                <a
                  href={item.link}
                  className={`text-lg hover:text-[#fb55ed] ${i === 0 ? "text-[#fb55ed]" : "text-[#74779a]"} ]`}
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Launch Button and Hamburger Icon */}
          <div className="flex items-center gap-2 lg:gap-5">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 rounded-lg border-2 border-[#fb55ed] px-2 py-2 font-semibold text-[#f954e8] lg:px-6 lg:py-4">
              <span className="text-xl">Launch</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <img className="h-6 w-6" src={rocket} alt="rocket" />
              </div>
            </motion.button>

            {/* Hamburger Icon for Mobile */}
            {!open && (
              <div className="block lg:hidden" onClick={handleToggle}>
                <motion.img
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  src={hamburger} alt="hamburger icon" className="h-6 w-6" />
              </div>
            )}
          </div>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          
            className="absolute right-2 top-2 mt-3 flex h-1/2 w-56 flex-col items-center justify-center space-y-8 rounded-2xl border-2 bg-primary-bg text-3xl font-medium text-white opacity-75 backdrop-blur-lg md:right-5 md:w-96 lg:hidden">
            <div
              className="absolute right-4 top-4 hidden max-lg:block"
              onClick={handleToggle}
            >
              <img src={cross} alt="hamburger icon" width={25} height={25} />
            </div>
            <h1 className="border-b-2">Menu</h1>
            <ul className="space-y-6 font-normal">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="space-y-3 hover:text-[#fb55ed]">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
