import { CompanyCard } from "@/components/CompanyCard";
import type { Company } from "@/lib/schemas/company";
import companiesSeed from "../../data/companies_seed.json";

const Companies = () => {
  const companies = (companiesSeed as unknown as Company[]) || [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Companies</h1>
        <p className="text-text-secondary">Browse verified entries. Placeholders are clearly marked.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((c) => (
          <CompanyCard
            key={c.id}
            slug={c.slug}
            name={c.name}
            logo_url={c.logo_url ?? undefined}
            tagline={c.tagline ?? undefined}
            industries={c.industries ?? []}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
