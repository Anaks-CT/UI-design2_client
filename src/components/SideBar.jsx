import Button from "./Button";
import downIcon from "../assets/down.svg";
import clockIcon from "../assets/clockIcon.svg";
import taskIcon from "../assets/taskIcon.svg";

const SideBar = () => {
  return (
    <div className="h-screen fixed bg-white w-[238px] md:block hidden border border-[#E8E8E8] pt-[70px] px-4 ">
      <p className="text-lg font-[700] py-2">MedLife</p>
      <div className="relative py-4">
        <Button>Add Clinical</Button>
        <img src={downIcon} className="absolute top-6 right-3" width={18} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3.5 p-3">
            <img src={clockIcon} width={20} alt="" />
            <p className="text-[13px] font-medium text-gray-500">Appointments</p>
        </div>
        <div className="flex gap-3.5 p-3 bg-[#F8FBFF] border-r-2 border-[#04095A]">
            <img src={taskIcon} width={20} alt="" />
            <p className="text-[13px] font-bold text-blue-800">Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
