import { Search } from "lucide-react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br flex-col from-[#c13d60] via-[#882947] to-blue-600 flex justify-center items-center">
      <h2 className="text-3xl font-bold text-white">Browse Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full outline-none text-black"
            onChange={(e) => onSearchInput(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default SearchSection;
