import type { ReactElement } from "react";

export interface ActivityBlock {
  height: number;
  color: string;
}

export type ActivityDay = ActivityBlock[];

export type ActivityData = ActivityDay[];
export interface TimeSlot {
  times: string[];
  backgrounds: string[];
  dot?: number;
}

export interface TimeSlots {
  [key: number]: TimeSlot;
}

export interface Day {
  name: string;
  date: number;
}
export interface MenuItem {
  label: string;
  icon: ReactElement;
  active: boolean;
}
