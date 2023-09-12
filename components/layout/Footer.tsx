import { SiGithub } from "react-icons/si";
import footerLinks from "@/lib/links/footerLinks";

const Footer = () => {
  return (
    <footer className="mt-5 bg-slate-300 text-slate-800 transition dark:bg-slate-900 dark:text-slate-200">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr] items-center gap-10 p-3 min-[650px]:grid-cols-[repeat(2,1fr)]">
        <div>
          <div className="flex items-center">
            <span className="mb-2 flex-1 text-3xl font-bold">Disclaimer:</span>
            <a
              href="https://github.com/pomubry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github account link"
            >
              <SiGithub className="text-xl text-slate-900 dark:text-slate-200" />
            </a>
          </div>
          <p className="text-sm min-[650px]:text-base">
            This website is not the official Anilist.co. This is a small project
            made for learning purposes only. However, all data are fetched from
            Anilist&apos;s API.
          </p>
        </div>

        <nav className="grid grid-cols-[repeat(2,1fr)] items-center gap-5 text-sm min-[650px]:text-base min-[900px]:grid-cols-[repeat(4,1fr)]">
          {footerLinks.map((links, index) => {
            return (
              <ul className="flex flex-col" key={index}>
                {links.map((link) => (
                  <li
                    className="bg-purple-hover rounded-md text-center font-semibold duration-300"
                    key={link.link}
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
