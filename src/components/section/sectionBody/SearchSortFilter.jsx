import searchIcon from "../../../assets/searchIcon.svg";
import calenderIcon from "../../../assets/calenderIcon.svg";
import filterIcon from "../../../assets/filterIcon.svg";
import Button from "../../Button";

const SearchSortFilter = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center  gap-3 lg:gap-8 flex-wrap">
        <div className="relative">
          <input
            type="search"
            className="border border-gray-300 rounded-md text-[13px] placeholder-gray-500 font-medium pl-10 p-1.5 w-[310px]"
            placeholder="Search"
          />
          <img src={searchIcon} className="absolute top-2 left-3 w-5" alt="" />
        </div>
        <div className="flex items-center gap-3 justify-between">
          <div className="flex border relative border-gray-300 rounded-md text-[13px] font-normal text-gray-500 p-1.5 px-3 gap-2">
            <input type="date" className="absolute right-20 opacity-0" />
            <img src={calenderIcon} width={19} alt="" />
            <p>From date</p>
          </div>
          <p className="text-[13px] font-normal text-gray-500">to</p>
          <div className="flex border relative border-gray-300 rounded-md text-[13px] font-normal text-gray-500 p-1.5 px-5 gap-2">
            <input type="date" className="absolute right-[72px] opacity-0" />
            <img src={calenderIcon} width={19} alt="" />
            <p>To date</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="px-7 rounded-full">Apply</Button>
          <Button
            className="px-7 rounded-full text-black border border-[#377BFF] bg-white py-[7px] font-medium"
            blue
          >
            Reset
          </Button>
          <div className="flex lg:hidden rounded-lg border p-[7px] px-6 gap-2 border-black">
        <img src={filterIcon} width={11} alt="" />
        <p className="text-[13px] font-medium">Filter</p>
      </div>
        </div>
      </div>

      <div className="hidden lg:flex rounded-lg border p-[7px] h-9 px-6 gap-2 border-black">
        <img src={filterIcon} width={11} alt="" />
        <p className="text-[13px] font-medium">Filter</p>
      </div>
    </div>
  );
};

export default SearchSortFilter;
