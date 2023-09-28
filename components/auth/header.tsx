import { Fingerprint } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  return (
    <div className="flex justify-between px-5 items-center">
      <div className="flex">
        <Fingerprint />
        <div>
          <p className="px-2 font-mono">NexusTalk</p>
        </div>
      </div>
      <div>Nav elements</div>
      <div>
        {" "}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
