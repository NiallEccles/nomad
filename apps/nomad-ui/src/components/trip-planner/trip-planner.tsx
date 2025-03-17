'use client';

import { Trip } from '@/types/trip';
import { CalendarDate, getLocalTimeZone } from '@internationalized/date';
import { Adapter } from '@/adapter';
import { useEffect, useState } from 'react';


export const TripPlanner = () => {
  const adapter = new Adapter('local');
  const [tripData, setTripData] = useState<Trip>();

  useEffect(() => {
    adapter.get().then(trip => {
      setTripData(trip)
    });
  }, []);
  const startDate = new CalendarDate(tripData?.trip_duration?.start.year!, tripData?.trip_duration?.start.month!, tripData?.trip_duration?.start.day!)
  const endDate = new CalendarDate(tripData?.trip_duration?.end.year!, tripData?.trip_duration?.end.month!, tripData?.trip_duration?.end.day!)
  return (
    <div>
      <h1 className='text-lg font-bold'>{tripData?.trip_name}</h1>
      <h2>{tripData?.destination}</h2>
      <h3>{startDate.toDate(getLocalTimeZone()).toLocaleDateString()}</h3>
      <h3>{endDate.toDate(getLocalTimeZone()).toLocaleDateString()}</h3>
    </div>
  )
}
