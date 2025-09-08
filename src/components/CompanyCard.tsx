import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3 } from "lucide-react";

interface CompanyCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  sector: string;
  fundingStage: string;
}

export const CompanyCard = ({ name, description, image, sector, fundingStage }: CompanyCardProps) => {
  return (
    <Card className="bg-surface-elevated border-border-light shadow-card hover:shadow-elevated transition-all duration-200 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={`${name} company`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md">
              {sector}
            </span>
          </div>
          <p className="text-sm text-text-secondary mb-2">{description}</p>
          <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
            {fundingStage}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="insight" size="sm" className="flex-1">
            <TrendingUp className="w-4 h-4" />
            Market Potential
          </Button>
          <Button variant="insight" size="sm" className="flex-1">
            <BarChart3 className="w-4 h-4" />
            Competitive Analysis
          </Button>
          <Button variant="insight" size="sm" className="w-full">
            <Shield className="w-4 h-4" />
            Due Diligence Report
          </Button>
        </div>
      </div>
    </Card>
  );
};