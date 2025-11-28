import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const HowItWorksCard = ({
  tag,
  title,
  description,
  image,
}: {
  tag: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="border-2 overflow-hidden border-accent max-w-xs h-[30rem] rounded-2xl space-y-2 shadow-xl">
      <div className="p-8 flex flex-col justify-between gap-2 text-center bg-primary-foreground dark:bg-primary-foreground/10">
        <Badge className="mx-auto bg-accent">{tag}</Badge>
        <h3>{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="relative h-[18rem]">
        <Image
          src={image}
          alt={`${title} image`}
          fill
          className="object-cover absolute inset-0 top-0"
        />
      </div>
    </div>
  );
};

export default HowItWorksCard;
