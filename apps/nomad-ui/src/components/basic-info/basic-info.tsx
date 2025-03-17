"use client";
import React, { FormEvent, useState } from "react";
import {
  Form,
  Input,
  Autocomplete,
  Button,
  AutocompleteItem,
  DateRangePicker,
  RangeValue, DateValue
} from '@heroui/react';
import {parseDate} from "@internationalized/date";
import { countries } from '@/countries';

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  trip_name: string;
  trip_duration: RangeValue<DateValue> | null;
  destination: string;
}

export const BasicInfo: React.FC = () => {
  const [_, setSubmitted] = useState<FormData | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [tripDuration, setTripDuration] = React.useState<RangeValue<DateValue> | null>({
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-08"),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data: FormData = Object.fromEntries(formData) as unknown as FormData;

    // Custom validation checks
    const newErrors: FormErrors = {};

    // // Username validation
    // if (data.name === "admin") {
    //   newErrors.name = "Nice try! Choose a different username";
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted({ ...data, trip_duration: tripDuration });
    setIsLoading(false);
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4">
        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }
            return errors.name;
          }}
          label="Name your trip"
          labelPlacement="outside"
          name="trip_name"
          placeholder="Trip name"
          size='lg'
        />

        <Autocomplete
          isRequired
          label="Destination"
          labelPlacement="outside"
          name="destination"
          placeholder="Select destination"
          allowsCustomValue
          size='lg'
        >
          {
            countries.map(({name, alpha2, emoji}) => (
              <AutocompleteItem key={alpha2} textValue={name}>{`${name} ${emoji}`}</AutocompleteItem>
            ))
          }
        </Autocomplete>

        <DateRangePicker
          isRequired
          labelPlacement='outside'
          firstDayOfWeek="mon"
          className="max-w-xs"
          label="Stay duration"
          onChange={setTripDuration}
          size='lg'
        />

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit" isLoading={isLoading} size='lg'>
            Continue
          </Button>
          <Button type="reset" variant="bordered" size='lg'>
            Reset
          </Button>
        </div>
      </div>
    </Form>
  );
};
