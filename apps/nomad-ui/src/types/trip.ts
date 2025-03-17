import { DateValue, RangeValue } from '@heroui/react';

export interface Trip {
  trip_name: string;
  trip_duration: RangeValue<DateValue> | null;
  destination: string;
}
