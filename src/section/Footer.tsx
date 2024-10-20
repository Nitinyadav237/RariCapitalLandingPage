import { logo } from "../assets";
import Button from "../components/Button";
import { footerLinks } from "../constant";

const Footer = () => {
  return (
    <>
      <hr className="bg-[#0c134c]" />

      <footer className="flex min-h-full items-center bg-[#0c134c] px-4 md:px-14 lg:h-full lg:px-12">
        <div className="flex w-full flex-col items-center py-1 lg:flex-row">
          <div className="flex flex-col space-y-6 px-3 py-10 md:w-full lg:w-1/3">
            <div className="flex items-center gap-3">
              <img className="h-12 w-12" src={logo} alt="logo" />
              <h1 className="text-2xl font-semibold capitalize text-[#fbfbfc]">
                Rari Capital
              </h1>
            </div>
            <h3 className="px-2 text-[#5d6386]">
              Empowering individuals to break free
            </h3>
            <div className="flex items-center justify-between  rounded-full border-2 border-[#1b2463] px-2 py-2">
              <input
                className="ml-2 mr-4 w-2/3 bg-transparent px-1 py-1 font-light italic text-[#fbfbfb]"
                type="text"
                placeholder="Enter your email address"
              />
              <Button
                message="Subscribe"
                borderRadius="rounded-full"
                width="h-10"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 py-3 md:flex-wrap lg:w-2/3 lg:flex-row lg:justify-between lg:gap-20 lg:px-20">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-montserrat mb-6 text-2xl font-medium text-[#fbfbfc]">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="font-montserrat text-white-400 hover:text-slate-gray mt-3 text-base text-[#5d6386]"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
