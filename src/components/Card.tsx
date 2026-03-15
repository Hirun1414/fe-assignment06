import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
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

      <div className="w-full h-[30%] p-[10px]">{venueName}</div>
    </InteractiveCard>
  );
}
