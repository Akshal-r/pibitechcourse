import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  number: string;
  title: string;
  description: string;
  delay?: string;
}

const ModuleCard = ({ number, title, description, delay = "0ms" }: ModuleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="card-hover bg-gradient-card border-border fade-in-up h-full group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
      style={{ animationDelay: delay }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Badge 
            variant="outline" 
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-primary text-primary font-semibold group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            {number}
          </Badge>
          <div className="space-y-2 flex-1">
            <h3 className="font-semibold text-card-foreground text-lg leading-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;