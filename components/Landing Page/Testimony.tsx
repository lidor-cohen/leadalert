import React from "react";
import Image from "next/image";

const Testimony = ({
  image,
  name,
  text,
}: {
  image: string;
  name: string;
  text: string;
}) => {
  return (
    <div
      dir="rtl"
      className="p-6 bg-primary flex items-center gap-8 rounded-full mx-5 shadow-xl text-primary-foreground w-sm"
    >
      <Image
        src={image}
        alt={"testimony person image"}
        width={100}
        height={100}
        className="rounded-full aspect-square object-cover"
      />

      <div className="flex flex-col gap-2">
        <h3>{name}</h3>
        <p>"{text}"</p>
      </div>
    </div>
  );
};
export default Testimony;
