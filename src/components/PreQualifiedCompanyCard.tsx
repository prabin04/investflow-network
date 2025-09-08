import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3 } from "lucide-react";

interface PreQualifiedCompanyCardProps {
  imageSrc: string;
  imageAlt: string;
  name?: string | null;
  description?: string | null;
}

export const PreQualifiedCompanyCard = ({ imageSrc, imageAlt, name, description }: PreQualifiedCompanyCardProps) => {
  const displayName = (name ?? "").trim().length > 0 ? name : "TBD";
  const displayDescription = (description ?? "").trim().length > 0 ? description : "TBD";

  return (
    <Card className="bg-surface-elevated border-border-light shadow-card hover:shadow-elevated transition-all duration-200 overflow-hidden">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-text-primary">{displayName}</h3>
          <p className="text-sm text-text-secondary mt-1 line-clamp-2">{displayDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="flex-1 min-w-[140px]">
            <TrendingUp className="w-4 h-4 mr-2" />
            Market Potential
          </Button>
          <Button variant="outline" size="sm" className="flex-1 min-w-[140px]">
            <BarChart3 className="w-4 h-4 mr-2" />
            Competitive Analysis
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            <Shield className="w-4 h-4 mr-2" />
            Due Diligence
          </Button>
        </div>
      </div>
    </Card>
  );
};
