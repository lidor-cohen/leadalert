import React from "react";
import HowItWorksCard from "@/components/Landing Page/HowItWorksCard";

const HowItWorksSection = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 text-center">
        <h2>איך זה עובד?</h2>
        <p className="text-muted-foreground">
          כך LeadAlert מחבר אתכם ללקוחות בזמן אמת
        </p>
      </div>

      <div className="flex justify-between">
        <HowItWorksCard
          tag="אוטומטי"
          title="סריקת קבוצות"
          description="LeadAlert עובר על קבוצות Facebook ו-WhatsApp ומאתר פוסטים רלוונטיים."
          image="/how-it-works-1.png"
        />

        <HowItWorksCard
          tag="שימוש ב-AI"
          title="ניתוח פוסטים חכם"
          description="המערכת מזהה פוסטים שמייצרים הזדמנויות עסקיות ומסווגת אותם לקטגוריות."
          image="/how-it-works-2.webp"
        />

        <HowItWorksCard
          tag="מיידיות"
          title="חיבור לידים מיידי"
          description="כל פוסט מתאים לעסק שלכם נשלח אליכם מיד – בלי לחפש, בלי להחמיץ."
          image="/how-it-works-3.png"
        />
      </div>
    </section>
  );
};
export default HowItWorksSection;
