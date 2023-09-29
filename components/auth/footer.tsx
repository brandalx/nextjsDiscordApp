import {
  Code,
  Code2,
  Fingerprint,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="border border-black dark:border-white py-5 rounded-lg container">
      <div className="flex items-center justify-center">
        <Fingerprint className="text-indigo-500" />
        <div>
          <p className="px-2 font-mono ">NexusTalk 2023</p>
        </div>
      </div>
      <div>
        <div className="justify-center flex items-center">
          <a href="#">
            <Github className="h-4 w-4 mx-2" />
          </a>
          <a href="#">
            <Linkedin className="h-4 w-4 mx-2" />
          </a>
          <a href="#">
            <Code2 className="h-4 w-4 mx-2" />
          </a>

          <a href="#">
            <Phone className="h-4 w-4 mx-2" />
          </a>
        </div>
        <a
          className="flex mt-2 items-center justify-center text-zinc-500 underline font-mono text-sm"
          href="http://brandnolandev.com/"
          target="_blank"
        >
          brandnolandev.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
