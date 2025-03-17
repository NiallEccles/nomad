import { DateValue, RangeValue } from '@heroui/react';

type Environment = "local" | "prod";
type TripData = {
  trip_name: string;
  trip_duration: RangeValue<DateValue> | null;
  destination: string;
}

export class Adapter {
  env: Environment;
  constructor(env: Environment) {
    this.env = env;
  }

  public save(trip: TripData): Promise<boolean> {
    return this.saveLocal(trip);
  }

  public get(): Promise<TripData> {
    return new Promise((resolve, reject) => {
      if(localStorage.getItem('trip')) {
        return resolve(JSON.parse(localStorage.getItem('trip')!));
      }
      return reject(new Error('Not found'));
    })
  }

  private saveLocal(trip: TripData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try{
        localStorage.setItem('trip', JSON.stringify(trip));
        return resolve(true);
      } catch (error) {
        return reject(error);
      }
    })
  }
}
