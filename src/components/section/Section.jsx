import SideBar from "../SideBar"
import SectionBody from "./sectionBody/SectionBody"
import SectionHeader from "./SectionHeader"

const Section = () => {
  return (
    <div className="flex ml-[238px]">
        <div className="pt-[75px] bg-white h-[180px] w-full">
          <SectionHeader />
          <SectionBody />
        </div>
    </div>
  )
}

export default Section