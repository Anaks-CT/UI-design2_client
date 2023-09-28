import SearchSortFilter from "./SearchSortFilter";
import { userAppInfo } from "../../../staticData";
import SingleUserInfo from "./SingleUserInfo";

const SectionBody = () => {
  return (
    <div className="bg-white m-8 my-6 p-3 px-4 rounded-lg">
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
