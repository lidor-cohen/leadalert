import React from "react";
import HowItWorksCard from "@/components/Landing Page/HowItWorksCard";
import FeatureCard from "@/components/Landing Page/FeatureCard";

type Card = {
  emoji: string;
  title: string;
  description: string;
};

const FeaturesSection = () => {
  const cards: Card[] = [
    {
      emoji: "🤖",
      title: "AI חכם",
      description: "ניתוח חכם שמזהה הזדמנויות רלוונטיות",
    },

    {
      emoji: "🙈",
      title: "ממשק פשוט",
      description: "כל הלידים במקום אחד, נגישים ונוחים לעבודה.",
    },

    {
      emoji: "📋",
      title: "סיווג מותאם לעסק",
      description: "לידים מחולקים לפי קטגוריות שנבחרו מראש.",
    },

    {
      emoji: "⏰",
      title: "חסכון בזמן",
      description: "לא צריך לשוטט בין קבוצות ולחפש ידנית.",
    },

    {
      emoji: "🚀",
      title: "סריקה בזמן אמת",
      description: "פוסטים נלכדים ברגע שהם מתפרסמים.",
    },

    {
      emoji: "👨🏻‍💻",
      title: "שירות לקוחות",
      description: "פנו אלינו בימים א׳-ה׳ בין השעות 9:00-17:00.",
    },
  ];

  return (
    <section className="py-10 bg-primary max-w-7xl mx-auto text-primary-foreground flex flex-col gap-15 px-4 sm:px-6 lg:px-8 rounded-xl">
      <div className="flex flex-col gap-2 text-center">
        <h2>איך זה עובד?</h2>
        <p className="text-">כך LeadAlert מחבר אתכם ללקוחות בזמן אמת</p>
      </div>

      <div className="grid gap-x-6 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((cardData) => (
          <FeatureCard
            key={cardData.title}
            emoji={cardData.emoji}
            title={cardData.title}
            description={cardData.description}
          />
        ))}
      </div>
    </section>
  );
};
export default FeaturesSection;
