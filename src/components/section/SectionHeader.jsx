const SectionHeader = () => {
  return (
    <div className="pt-[75px] px-7 bg-white h-[180px] w-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-lg font-[700]">Tasks</p>
          <p className="text-[11px] font-medium text-gray-500">{`Clinical > Tasks`}</p>
        </div>
        <div className="flex gap-1">
            <p className="text-[13px] text-[#04095A] font-medium p-2 px-1 border-b-[3px] border-[#04095A]">Upcoming Tasks</p>
            <p className="text-[13px] text-gray-500 font-medium p-2">Completed Tasks</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SectionHeader;