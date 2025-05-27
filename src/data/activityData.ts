export interface ActivityBlock {
  height: number;
  color: string;
}

export type ActivityDay = ActivityBlock[];

export type ActivityData = ActivityDay[];


export const activityData: ActivityData = [
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
export const days:string[] = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];