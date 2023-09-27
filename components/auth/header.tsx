import { ModeToggle } from "../mode-toggle";

const Header = () => {
  return (
    <div className="flex justify-between px-5 items-center">
      <div>Logo</div>
      <div>Nav elements</div>
      <div>
        {" "}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
