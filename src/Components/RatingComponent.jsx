import { Rating, RatingStar } from "flowbite-react";

export default function RatingComponent() {
  return (
    <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
      <p className="ml-5 text-sm font-medium text-gray-500 dark:text-gray-400">
        &nbsp; &nbsp; 4.95 out of 5
      </p>
    </Rating>
  );
}