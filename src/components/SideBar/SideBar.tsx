import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import NavItem from "../NavItem/NavItem";

export default function SideBar() {
  const [fullWidth, setFullWidth] = useState(true);
  const handleOnClick = () => {
    setFullWidth((prev) => !prev);
  };
  return (
    <aside
      className={`${
        fullWidth ? "w-48" : "w-24"
      } transition-all duration-500 ease-in-out bg-zinc-950 shadow flex flex-col p-2`}
    >
      <div className="flex pl-2 justify-between items-center">
        <h2 className="text-lg font-semibold">Title</h2>
        
        <div
          className="cursor-pointer flex flex-col justify-between"
          onClick={handleOnClick}
        ><FaBars /></div>
      </div>

      <nav className="flex flex-col text-sm space-y-1 mt-8">
        <NavItem text="First" />
        <NavItem text="Second" />
        <NavItem text="Third" />
      </nav>
    </aside>
  );
}
