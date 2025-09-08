import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import type { Company } from "@/lib/schemas/company";
// Import seed data (no fabrication). In production, replace with real API.
// Vite bundler supports importing JSON modules.
import companiesSeed from "../../data/companies_seed.json";

const isNonEmptyString = (value?: string | null): value is string => !!value && value.trim().length > 0;

const CompanyProfile = () => {
  const { slug } = useParams();

  const company: Company | undefined = useMemo(() => {
    if (!slug) return undefined;
    const list = (companiesSeed as unknown as Company[]) || [];
    return list.find((c) => c.slug === slug);
  }, [slug]);

  if (!company) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Company not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">We couldn't find that company.</p>
        <Link to="/" className="mt-4 inline-block text-primary underline">Go back</Link>
      </div>
    );
  }

  const {
    name,
    hero_image_url,
    logo_url,
    tagline,
    description,
    website_url,
    contact_email,
    industries = [],
    location,
  } = company;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {isNonEmptyString(hero_image_url) ? (
        <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
          <img
            src={hero_image_url as string}
            alt={`${name} hero`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="mt-6 flex items-start gap-4">
        {isNonEmptyString(logo_url) ? (
          <img
            src={logo_url as string}
            alt={`${name} logo`}
            className="w-16 h-16 object-contain rounded bg-muted"
            loading="lazy"
          />
        ) : null}
        <div>
          <h1 className="text-3xl font-semibold">{name}</h1>
          {isNonEmptyString(tagline) ? (
            <p className="text-muted-foreground mt-1">{tagline}</p>
          ) : (
            <p className="text-muted-foreground mt-1 italic">TBD</p>
          )}
          {isNonEmptyString(location) ? (
            <p className="text-sm text-muted-foreground mt-1">{location}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        {isNonEmptyString(description) ? (
          <p className="leading-7 text-sm sm:text-base">{description}</p>
        ) : (
          <p className="leading-7 text-sm sm:text-base italic">Description coming soon</p>
        )}
      </div>

      {Array.isArray(industries) && industries.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-sm font-medium text-muted-foreground">Industries</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {industries.map((ind) => (
              <span key={ind} className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                {ind}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-3">
        {isNonEmptyString(website_url) ? (
          <a
            href={website_url as string}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Visit site
          </a>
        ) : null}
        {isNonEmptyString(contact_email) ? (
          <a
            href={`mailto:${contact_email}`}
            className="inline-flex items-center px-4 py-2 rounded-md border hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Contact
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default CompanyProfile;
