"use client";

import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function Card({
  venueName,
  imgSrc,
  onRate,
}: {
  venueName: string;
  imgSrc: string;
  onRate: (rating: number) => void;
}) {
  const [rating, setRating] = useState<number | null>(0);

  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Card Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="w-full h-[30%] p-[10px] flex flex-col justify-between">
        <div>{venueName}</div>

        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
            onRate(newValue ?? 0);
          }}
        />
      </div>
    </InteractiveCard>
  );
}
