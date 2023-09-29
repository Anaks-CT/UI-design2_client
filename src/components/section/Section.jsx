import SectionBody from "./sectionBody/SectionBody"
import SectionHeader from "./SectionHeader"
import rightArrow from "../../assets/rightArrow.svg"
import { useState } from "react"

const Section = ({openSideBar, toggleShow}) => {

  const [currentPage, setCurrentPage] = useState("upcoming")
  return (
    <div className="flex lg:ml-[238px] relative">
        <div className={`${toggleShow && "bg-black bg-opacity-50"} pt-[75px] bg-white h-[180px] w-full`}>
          <img onClick={openSideBar} src={rightArrow} className="lg:hidden cursor-pointer absolute animate-bounce w-7" alt="" />
          <SectionHeader toggleShow={toggleShow} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          <SectionBody toggleShow={toggleShow} currentPage={currentPage}/>
        </div>
    </div>
  )
}

export default Section