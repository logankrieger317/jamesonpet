
const dayOfWeek = [
  {
    day: "Monday",
    hours: "Closed",
  },
  {
    day: "Tuesday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Wednesday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Thursday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Friday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Saturday",
    hours: "10:00 am - 6:00 pm",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];

export default function Map() {
  return (
    <>
      <div className="bg-red-600 flex flex-column flex-wrap justify-center items-center text-white">
        <div className=" max-w-screen-xl flex flex-row flex-wrap items-center justify-center m-6 shadow-2xl pb-2 bg-black rounded-2xl">
          <div className="max-w-screen-sm flex flex-column flex-wrap items-center justify-center ">
            <p className="m-2 font-bold ">
              Located in front of{" "}
              <a href="https://thewateringbowlatx.com">The Watering Bowl!</a>
            </p>
            <img src="map.png" alt="Map" />
          </div>
          <div className="m-2 flex flex-wrap flex-column items-center justify-center max-w-screen-lg  ">
            <p className="font-bold">820 Farm to Market 1626, Austin, TX 78748</p>
            <div className="flex flex-row flex-wrap items-center justify-center m-2  pb-2 ">
              {dayOfWeek.map((day) => (
                <div key={day.day} className="max-w-screen-sm flex flex-column flex-wrap items-center justify-center ">
                  <p className="m-2 font-bold ">{day.day}</p>
                  <p className="m-2 font-bold ">{day.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}