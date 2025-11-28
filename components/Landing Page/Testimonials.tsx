import React from "react";
import Marquee from "react-fast-marquee";
import Testimony from "@/components/Landing Page/Testimony";

type Testimonial = {
  image: string;
  name: string;
  text: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      image: "/testimonials/lidor.jpg",
      name: "לידור כהן",
      text: "כבר פי 2 יותר לקוחות ממה שהיה לי לפני חודש.. מדהים",
    },
    {
      image: "/testimonials/eliav.png",
      name: "אליאב גלנט",
      text: "שווה כל שקל, ואין לי הרבה שקלים לבזבז",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 text-center">
        <h2>איך זה עובד?</h2>
        <p className="text-muted-foreground">
          כך LeadAlert מחבר אתכם ללקוחות בזמן אמת
        </p>
      </div>

      <div
        dir="ltr"
        className="flex flex-col gap-10 justify-center items-center"
      >
        <Marquee
          speed={100}
          autoFill
          gradient
          gradientColor="oklch(0.9821 0 0)"
        >
          {testimonials.map((testimony) => (
            <Testimony
              key={testimony.name}
              image={testimony.image}
              name={testimony.name}
              text={testimony.text}
            />
          ))}
        </Marquee>

        <Marquee
          speed={100}
          autoFill
          gradient
          gradientColor="oklch(0.9821 0 0)"
          direction="right"
        >
          {testimonials.map((testimony) => (
            <Testimony
              key={testimony.name}
              image={testimony.image}
              name={testimony.name}
              text={testimony.text}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
export default Testimonials;
