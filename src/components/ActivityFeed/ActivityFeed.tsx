const activityData = [
  [{ height: 20, color: "bg-gray-300" }],
  [{ height: 10, color: "bg-cyan-400" }],
  [
    { height: 4, color: "bg-gray-300" },
    { height: 4, color: "bg-gray-300" },
  ],
  [{ height: 6, color: "bg-gray-300" }],
  [
    { height: 10, color: "bg-cyan-400" },
    { height: 10, color: "bg-blue-500" },
  ],
  [{ height: 10, color: "bg-blue-500" }],
  [
    { height: 4, color: "bg-gray-300" },
    { height: 4, color: "bg-gray-300" },
  ],
  [{ height: 6, color: "bg-cyan-400" }],
  [{ height: 20, color: "bg-gray-300" }],
  [{ height: 10, color: "bg-gray-300" }],
  [
    { height: 4, color: "bg-cyan-400" },
    { height: 4, color: "bg-blue-500" },
  ],
  [{ height: 6, color: "bg-gray-300" }],
  [
    { height: 10, color: "bg-gray-300" },
    { height: 10, color: "bg-gray-300" },
  ],
  [{ height: 10, color: "bg-cyan-400" }],
  [
    { height: 4, color: "bg-cyan-400" },
    { height: 4, color: "bg-blue-500" },
  ],
  [{ height: 6, color: "bg-gray-300" }],
  [{ height: 20, color: "bg-gray-300" }],
  [{ height: 10, color: "bg-blue-500" }],
  [
    { height: 4, color: "bg-gray-300" },
    { height: 4, color: "bg-gray-300" },
  ],
  [{ height: 6, color: "bg-gray-300" }],
  [
    { height: 10, color: "bg-cyan-400" },
    { height: 10, color: "bg-blue-500" },
  ],
  [{ height: 10, color: "bg-cyan-400" }],
  [
    { height: 4, color: "bg-gray-300" },
    { height: 4, color: "bg-gray-300" },
  ],
  [{ height: 6, color: "bg-blue-500" }],
  [{ height: 20, color: "bg-gray-300" }],
  [{ height: 10, color: "bg-gray-300" }],
  [
    { height: 4, color: "bg-cyan-400" },
    { height: 4, color: "bg-blue-500" },
  ],
  [{ height: 6, color: "bg-blue-500" }],
  [
    { height: 10, color: "bg-gray-300" },
    { height: 10, color: "bg-gray-300" },
  ],
  [{ height: 10, color: "bg-cyan-400" }],
  [
    { height: 4, color: "bg-gray-300" },
    { height: 4, color: "bg-gray-300" },
  ],
  [{ height: 6, color: "bg-blue-500" }],
];
const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

export default function ActivityFeed() {
  return (
    <div className="bg-blue-50/80 p-3 rounded-3xl shadow-sm ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#00008B]">Activity</h2>
        <span className="text-sm text-gray-400">
          5 appointment on this week
        </span>
      </div>
      <div className="flex flex-col h-30 pt-2 pl-8 w-fit">
        <div className="flex gap-3 h-20 items-end">
          {activityData.map((bar, index) => (
            <div key={index} className="">
              {bar.length === 2 ? (
                <div
                  className={`flex flex-col gap-1 ${
                    bar[0].height === 4 ? "mb-4" : ""
                  }`}
                >
                  <div
                    className={`w-1 ${bar[0].color} rounded-full`}
                    style={{
                      height: `${bar[0].height * 4}px`,
                    }}
                  />
                  <div
                    className={`w-1 ${bar[1].color} rounded-full`}
                    style={{
                      height: `${bar[1].height * 4}px`,
                    }}
                  />
                </div>
              ) : (
                <div
                  className={`w-1 ${bar[0].color} rounded-full ${
                    bar[0].height === 10 ? "mb-5" : ""
                  }`}
                  style={{
                    height: `${bar[0].height * 4}px`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-12.5 px-4 py-2">
          {" "}
          {days.map((day) => (
            <span className="text-xs text-gray-400 font-medium">{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// const activityData = [
//   [{ height: 20, color: "bg-teal-400",style:"" }],
//   [{ height: 10, color: "bg-blue-500",style:"item-centre" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
//   [
//     { height: 10, color: "bg-blue-500" },
//     { height: 10, color: "bg-blue-500" },
//   ],
//   [{ height: 10, color: "bg-blue-500" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
//   [{ height: 20, color: "bg-teal-400" }],
//   [{ height: 10, color: "bg-blue-500" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
//   [
//     { height: 10, color: "bg-blue-500" },
//     { height: 10, color: "bg-blue-500" },
//   ],
//   [{ height: 10, color: "bg-blue-500" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
//   [{ height: 20, color: "bg-teal-400" }],
//   [{ height: 10, color: "bg-blue-500" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
//   [
//     { height: 10, color: "bg-blue-500" },
//     { height: 10, color: "bg-blue-500" },
//   ],
//   [{ height: 10, color: "bg-blue-500" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
//   [{ height: 20, color: "bg-teal-400" }],
//   [{ height: 10, color: "bg-blue-500" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
//   [
//     { height: 10, color: "bg-blue-500" },
//     { height: 10, color: "bg-blue-500" },
//   ],
//   [{ height: 10, color: "bg-blue-500" }],
//   [
//     { height: 4, color: "bg-gray-300" },
//     { height: 4, color: "bg-gray-300" },
//   ],
//   [{ height: 6, color: "bg-gray-300" }],
// ];

// <div className="flex h-30">
//   <div className="flex gap-2.5 h-20">
//     {activityData.map((bar) => (
//       if(bar.length===2&&
//         <div className="flex flex-col">
//         <div
//               className={`w-1 ${bar[0].color}`}
//               style={{
//                 height: `${bar[0].height * 4}px`,
//               }}
//             /></div>
//              <div
//               className={`w-1 ${bar[1].color}`}
//               style={{
//                 height: `${bar[1].height * 4}px`,
//               }}
//             /></div>
//       }else{
//           <div
//               key={index}
//               className={`w-1 ${bar[0].color}`}
//               style={{
//                 height: `${bar[0].height * 4}px`,
//               }}
//             />
//       }

//     ))}
//   </div>
// </div>;
