import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = ({ icon: Icon, title, description, delay = "0ms" }: FeatureCardProps) => {
  return (
    <Card 
      className="card-hover bg-gradient-card border-border fade-in-up text-center h-full"
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-6 space-y-4">
        <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-medium">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-card-foreground text-lg">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;