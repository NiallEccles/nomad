'use client';

import { Trip } from '@/types/trip';
// import { Button, Card, CardBody } from "@heroui/react";
import { CalendarDate, getLocalTimeZone } from '@internationalized/date';
import { Adapter } from '@/adapter';
import { useEffect, useState } from 'react';

export const TripPlanner = () => {
  const adapter = new Adapter('local');
  const [tripData, setTripData] = useState<Trip>();
  // const [days, setDays] = useState<any[]>([1]);

  useEffect(() => {
    adapter.get().then(trip => {
      setTripData(trip)
    });
  }, []);

  // const handleClick = () => {
  //   setDays(prevState => [...prevState, 1]);
  // }
  const startDate = new CalendarDate(tripData?.trip_duration?.start.year!, tripData?.trip_duration?.start.month!, tripData?.trip_duration?.start.day!)
  const endDate = new CalendarDate(tripData?.trip_duration?.end.year!, tripData?.trip_duration?.end.month!, tripData?.trip_duration?.end.day!)
  return (
    <div className="border-5 p-5 rounded-2xl flex flex-col justify-between h-60">
      <div>
        <h1 className="text-4xl font-bold">{tripData?.trip_name}</h1>
        <h2>{tripData?.destination}</h2>
      </div>
      <div>
        <h3>{startDate.toDate(getLocalTimeZone()).toLocaleDateString()}</h3>
        <h3>{endDate.toDate(getLocalTimeZone()).toLocaleDateString()}</h3>
      </div>
      {/*{days?.map((day, i) => (*/}
      {/*  <Card key={i}>*/}
      {/*    <CardBody>*/}
      {/*      <p>Make beautiful websites regardless of your design experience.</p>*/}
      {/*    </CardBody>*/}
      {/*  </Card>*/}
      {/*))}*/}
      {/*<Button color="primary" onPressEnd={handleClick}>Button</Button>*/}
    </div>
  );
}
