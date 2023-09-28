import Button from "../../Button";

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
      <div className="p-2 py-4 border rounded-lg my-2 flex px-6 flex-wrap">
        <div className="flex">
          <img src={image} width={95} alt="" />
          <div className="px-6 w-[300px]">
            <p className="font-bold text-lg">{name}</p>
            <p className="font-semibold py-1 mb-5 text-gray-500 text-[15px]">
              Appointment Id.:{appId}
            </p>
            <p className="text-blue-400 font-semibold">{assessment}</p>
          </div>
        </div>
        <div className="flex gap-14  justify-start">
          <div className="flex flex-col gap-1 text-gray-500">
            <p>Task ID:</p>
            <p>Date & time:</p>
            <p>Duration:</p>
          </div>
          <div className="flex flex-col gap-1 font-semibold text-gray-700">
            <p>{taskId}</p>
            <p>{appDate}</p>
            <p>{duration} hour</p>
          </div>
        </div>
        <div className="flex-1 justify-end text-end flex flex-col items-end">
          <div className="flex gap-5 flex-1 justify-end items-center">
            <p className="text-gray-500 text-[14px]">Status</p>
            <span
              className={`text-xl font-semibold ${
                status === "Upcoming" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </span>
          </div>
          <div className="w-44">
            <Button>
              {status === "Upcoming"
                ? "Continue Assessment"
                : "Start Assessment"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserInfo;
