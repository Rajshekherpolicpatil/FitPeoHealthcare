export interface TimeSlot {
  times: string[];
  backgrounds: string[];
  dot?: number; // Optional property since not all time slots have dots
}

export interface TimeSlots {
  [key: number]: TimeSlot;
}

export interface Day {
  name: string;
  date: number;
}

// Usage example with your data:
export const timeSlots: TimeSlots = {
  0: {
    times: ["10:00", "11:00", "12:00"],
    backgrounds: [],
  },
  1: {
    times: ["08:00", "09:00", "10:00"],
    backgrounds: ["", "bg-blue-900 text-white", ""],
  },
  2: {
    times: ["12:00", "", "13:00"],
    backgrounds: [],
  },
  3: {
    times: ["10:00", "11:00", ""],
    backgrounds: ["", "bg-blue-900 opacity-50 text-white", ""],
    dot: 1,
  },
  4: {
    times: ["", "14:00", "16:00"],
    backgrounds: [],
  },
  5: {
    times: ["12:00", "14:00", "15:00"],
    backgrounds: ["bg-blue-900 opacity-50 text-white", "", ""],
    dot: 0,
  },
  6: {
    times: ["09:00", "10:00", "11:00"],
    backgrounds: ["bg-blue-900  text-white", "", ""],
    dot: 0,
  },
};

export const days: Day[] = [
  { name: "Mon", date: 25 },
  { name: "Tues", date: 26 },
  { name: "Wed", date: 27 },
  { name: "Thurs", date: 28 },
  { name: "Fri", date: 29 },
  { name: "Sat", date: 30 },
  { name: "Sun", date: 31 },
];