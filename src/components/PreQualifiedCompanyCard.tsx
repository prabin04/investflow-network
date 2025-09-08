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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="inline-flex items-center justify-center gap-2 w-full"
          >
            <TrendingUp className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="truncate">Market Potential</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="inline-flex items-center justify-center gap-2 w-full"
          >
            <BarChart3 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="truncate">Competitive Analysis</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="inline-flex items-center justify-center gap-2 w-full sm:col-span-2"
          >
            <Shield className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="truncate">Due Diligence</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};
