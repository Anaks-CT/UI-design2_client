import Button from "../../Button";
import "./SingleUserInfo.css"

const SingleUserInfo = ({
  name,
  appId,
  taskId,
  date,
  appDate,
  duration,
  status,
  image,
  assessment,
}) => {
  return (
    <div className="">
      <p className="font-bold text-[12px]">{date}</p>
      <div className="p-2 py-4 border rounded-lg my-2 flex lg:flex-row flex-col px-6 lg:flex-wrap items-center lg:justify-between user-info-wrapper">
        <div className="flex user-info-image_wrapper gap-0">
          <img src={image} width={95} alt="" className="user-image"/>
          <div className="px-6 w-[300px]">
            <p className="font-bold lg:text-lg text-sm">{name}</p>
            <p className="font-semibold py-1 xl:mb-5 text-gray-500 lg:text-[15px] text-[12px]">
              Appointment Id.:{appId}
            </p>
            <p className="text-blue-400 font-semibold text-[15px] lg:text-base">{assessment}</p>
          </div>
        </div>
        <div className="flex lg:gap-14 gap-7  justify-start appointment-info mt-5 lg:mt-0 mr-10 lg:mr-0">
          <div className="flex flex-col gap-1 text-gray-500 text-[13px] lg:text-base">
            <p>Task ID:</p>
            <p>Date & time:</p>
            <p>Duration:</p>
          </div>
          <div className="flex flex-col gap-1 font-semibold text-gray-700 text-[13px] lg:text-base">
            <p>{taskId}</p>
            <p>{appDate}</p>
            <p>{duration} hour</p>
          </div>
        </div>
        <div className="flex-1 justify-start lg:justify-end text-start lg:text-end flex flex-col items-end mr-6 lg:mr-0 status-assessment-wrapper">
          <div className={`${status === "completed" && "hidden"} flex gap-5 flex-1 justify-end items-center status-wrapper`}>
            <p className="text-gray-500 text-[14px]">Status</p>
            <span
              className={`text-lg lg:text-xl font-semibold ${
                status === "Upcoming" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </span>
          </div>
          <div className="w-44 lg:block hidden">
            <Button>
              {status === "Upcoming"
                ? "Continue Assessment"
                : "Start Assessment"}
            </Button>
          </div>
        </div>
        <div className="w-44 lg:hidden block mt-4">
            <Button>
              {status === "Upcoming"
                ? "Continue Assessment"
                : "Start Assessment"}
            </Button>
          </div>
      </div>
    </div>
  );
};

export default SingleUserInfo;
