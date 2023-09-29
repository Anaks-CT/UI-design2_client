const SectionHeader = ({toggleShow}) => {
  return (
    
      <div className={`flex flex-col justify-between h-full px-7 ${toggleShow && "bg-black bg-opacity-0"}`}>
        <div>
          <p className="text-lg font-[700]">Tasks</p>
          <p className="text-[11px] font-medium text-gray-500">{`Clinical > Tasks`}</p>
        </div>
        <div className="flex gap-1">
            <p className="text-[13px] text-[#04095A] font-medium p-2 px-1 border-b-[3px] border-[#04095A]">Upcoming Tasks</p>
            <p className="text-[13px] text-gray-500 font-medium p-2">Completed Tasks</p>
        </div>
      </div>
  );
};

export default SectionHeader;
