const SectionHeader = ({toggleShow, setCurrentPage, currentPage}) => {
  return (
    
      <div className={`flex flex-col justify-between h-full px-7 ${toggleShow && "bg-black bg-opacity-0"}`}>
        <div>
          <p className="text-lg font-[700]">Tasks</p>
          <p className="text-[11px] font-medium text-gray-500">{`Clinical > Tasks`}</p>
        </div>
        <div className="flex gap-1">
            <p onClick={() => setCurrentPage("upcoming")} className={`text-[13px] ${currentPage === "upcoming" ? "text-[#04095A] border-b-[3px] border-[#04095A]" : "text-gray-500"} font-medium p-2 cursor-pointer `}>Upcoming Tasks</p>
            <p onClick={() => setCurrentPage("completed")} className={`text-[13px] ${currentPage === "completed" ? "text-[#04095A] border-b-[3px] border-[#04095A]" : "text-gray-500"} font-medium p-2 cursor-pointer`}>Completed Tasks</p>
        </div>
      </div>
  );
};

export default SectionHeader;
