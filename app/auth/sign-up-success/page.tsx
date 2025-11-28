import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">ההרשמה בוצעה בהצלחה!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                נרשמת בהצלחה ל-LeadAlert, אנא בדוק/י את המייל שלך על מנת לאמת את
                החשבון לפני ההתחברות אליו
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
