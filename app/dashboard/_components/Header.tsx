import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

function Header() {
  return (
    <div className="p-5 shadow-sm bg-white flex justify-between items-center">
      <div className="gap-2 items-center flex p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary p-1 rounded-full text-white text-sm px-2">
          🔥Join Membership just for $5.99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  );
}
export default Header;
