import Image from "next/image";

import { Review } from "../../types/reviewTypes";

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="review-slide flex flex-col w-[500px] h-[300px] box-border p-[24px] bg-secondary rounded-[50px] border border-primary">
      <div className="flex flex-row justify-center items-center">
        <Image
          src={review.image}
          alt={`${review.firstName} ${review.lastName}`}
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[30px] tracking-[0.5em] leading-[20px] font-inria text-tertiary ml-[28px]">
            {review.firstName}
          </h3>
          <h3 className="text-[30px] tracking-[0.5em] leading-[20px] font-inria text-tertiary ml-[100px]">
            {review.lastName}
          </h3>
        </div>
      </div>

      <p className="text-[15px] tracking-[0.2em] leading-[20px] font-inria text-white ml-[26px] mr-[26px] mt-[18px]">
        {review.text}
      </p>
    </div>
  );
};
