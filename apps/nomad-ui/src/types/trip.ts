import { DateValue, RangeValue } from '@heroui/react';

export interface Trip {
  trip_name: string;
  trip_duration: RangeValue<DateValue> | null;
  destination: string;
}

export interface Day {
  activities: Activity[]
}

export interface Activity {
  name: string;
  location: string;
  time?: string;
  allDay?: boolean;
}
