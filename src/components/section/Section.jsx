import SectionBody from "./sectionBody/SectionBody"
import SectionHeader from "./SectionHeader"
import rightArrow from "../../assets/rightArrow.svg"

const Section = ({openSideBar, toggleShow}) => {
  return (
    <div className="flex lg:ml-[238px] relative">
        <div className={`${toggleShow && "bg-black bg-opacity-50"} pt-[75px] bg-white h-[180px] w-full`}>
          <img onClick={openSideBar} src={rightArrow} className="lg:hidden cursor-pointer absolute animate-bounce w-7" alt="" />
          <SectionHeader toggleShow={toggleShow} />
          <SectionBody toggleShow={toggleShow} />
        </div>
    </div>
  )
}

export default Section