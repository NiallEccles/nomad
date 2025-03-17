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

  public save(trip: TripData): void {
    console.log(this.env);
    if(this.env === 'local') {
      this.saveLocal(trip);
    }
  }

  private saveLocal(trip: TripData): void {
    localStorage.setItem('trip', JSON.stringify(trip));
  }
}
