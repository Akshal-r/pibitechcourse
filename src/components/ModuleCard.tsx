import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  number: string;
  title: string;
  description: string;
  delay?: string;
}

const ModuleCard = ({ number, title, description, delay = "0ms" }: ModuleCardProps) => {
  return (
    <Card 
      className="card-hover bg-gradient-card border-border fade-in-up h-full"
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Badge 
            variant="outline" 
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-primary text-primary font-semibold"
          >
            {number}
          </Badge>
          <div className="space-y-2">
            <h3 className="font-semibold text-card-foreground text-lg leading-tight">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;