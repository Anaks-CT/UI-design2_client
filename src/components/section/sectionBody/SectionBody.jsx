import SearchSortFilter from "./SearchSortFilter";
import { userAppInfo } from "../../../staticData";
import SingleUserInfo from "./SingleUserInfo";

const SectionBody = ({toggleShow}) => {
  return (
    <div className={`${toggleShow && "bg-black opacity-60"} bg-white lg:m-8  lg:my-6 p-3 px-4 border-t lg:border-t-0 lg:rounded-lg`}>
      <SearchSortFilter />
      <div className="flex flex-col gap-2 mt-4">
        {userAppInfo.map((info) => (
          <SingleUserInfo
            key={info.id}
            appDate={info.appDate}
            appId={info.appId}
            date={info.date}
            duration={info.duration}
            name={info.name}
            status={info.status}
            taskId={info.taskId}
            image={info.image}
            assessment={info.assessment}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionBody;
