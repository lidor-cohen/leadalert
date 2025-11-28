import React from "react";

const FeatureCard = ({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative bg-card p-8 rounded-xl text-card-foreground flex flex-col gap-2 justify-center items-center">
      <div className="bg-card absolute inset-0 m-auto -top-30 shadow-md aspect-square w-10 flex justify-center items-center rounded-full">
        {emoji}
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3>{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
