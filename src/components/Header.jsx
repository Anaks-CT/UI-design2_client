import ClockedInImg from "../assets/exit.svg";
import questionIcon from "../assets/questionMark.svg";
import notifyIcon from "../assets/notification.svg";
import profileIcon from "../assets/ProfileIcon.svg";
import burger from "../assets/burger.svg"
import { useState } from "react";

const Header = () => {

  const [openNav, setOpenNav] = useState(false)
  return (
    <div className="flex border justify-between bg-white absolute w-full z-10">
      <div className="md:border-r p-3 py-2 pl-4">
        <h1 className="text-[1.6rem] font-bold md:pr-36 ">IOGO</h1>
      </div>
      <img onClick={() => setOpenNav(true)} src={burger} alt="" className="text-black md:hidden pr-3"/>
      <div className="justify-between w-full md:flex hidden">
        <div className="flex gap-[14px] text-[13px] font-medium text-gray-500 pl-8">
          <p className="py-5 px-2">Dashboard</p>
          <p className="py-5 px-2">Patients</p>
          <p className="py-5 px-2">Human Resources</p>
          <p className="border-b-2 border-[#04095A] py-5 px-2">Clinical</p>
          <p className="py-5 px-2">Compliance</p>
          <p className="py-5 px-2">Billing</p>
          <p className="py-5 px-2">Reports</p>
        </div>
        <div className="flex justify-end items-center gap-5 pr-8">
          <div className="relative">
            <img
              src={ClockedInImg}
              className="absolute top-[10px] w-[18px] left-2"
              alt=""
            />
            <button className="border p-4 py-2 pl-9 text-[13px] font-medium border-black rounded-lg">
              Clocked-In
            </button>
          </div>
          <img src={questionIcon} width={20} alt="" />
          <img src={notifyIcon} width={20} alt="" />
          <div className="flex gap-2 items-center relative">
            <p className="absolute text-[11px] font-bold left-[6px]">MA</p>
            <img src={profileIcon} width={30} alt="" />
            <p className="text-[13px] font-medium">Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
