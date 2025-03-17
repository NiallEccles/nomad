'use client';

import { Trip } from '@/types/trip';
// import {useDateFormatter,parseAbsoluteToLocal} from "@react-aria/i18n";
import { CalendarDate, getLocalTimeZone } from '@internationalized/date';


export const TripPlanner = () => {
  const localTrip = localStorage.getItem('trip')
  const basicDetails: Trip | undefined = localTrip ? JSON.parse(localTrip) : undefined;
  const startDate = new CalendarDate(basicDetails?.trip_duration?.start.year!, basicDetails?.trip_duration?.start.month!, basicDetails?.trip_duration?.start.day!)
  const endDate = new CalendarDate(basicDetails?.trip_duration?.end.year!, basicDetails?.trip_duration?.end.month!, basicDetails?.trip_duration?.end.day!)
  return (
    <div>
      <h1 className='text-lg font-bold'>{basicDetails?.trip_name}</h1>
      <h2>{basicDetails?.destination}</h2>
      <h3>{startDate.toDate(getLocalTimeZone()).toLocaleDateString()}</h3>
      <h3>{endDate.toDate(getLocalTimeZone()).toLocaleDateString()}</h3>
    </div>
  )
}
