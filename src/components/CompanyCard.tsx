import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CompanyCardProps {
  slug: string;
  name: string;
  logo_url?: string | null;
  tagline?: string | null;
  industries?: string[];
}

export const CompanyCard = ({ slug, name, logo_url, tagline, industries = [] }: CompanyCardProps) => {
  const hasTagline = (tagline ?? "").trim().length > 0;
  const hasIndustries = Array.isArray(industries) && industries.length > 0;

  return (
    <Link
      to={`/companies/${slug}`}
      aria-label={`View company profile for ${name}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
    >
      <Card className="bg-surface-elevated border-border-light transition-all duration-200 overflow-hidden hover:shadow-elevated">
        {logo_url ? (
          <div className="aspect-video overflow-hidden relative">
            <img
              src={logo_url}
              alt={`${name} logo`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : null}

        <div className="p-6">
          <h3 className="text-lg font-semibold text-text-primary">{name}</h3>

          {hasTagline ? (
            <p className="text-sm text-text-secondary mt-1 line-clamp-1">{tagline}</p>
          ) : (
            <p className="text-sm text-text-secondary mt-1 italic">TBD</p>
          )}

          {hasIndustries ? (
            <div className="flex flex-wrap gap-2 mt-3" aria-label="Industries">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                >
                  {industry}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Card>
    </Link>
  );
};