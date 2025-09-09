import { Building2, Users, TrendingUp, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const capitalPartners = [
  { id: 1, name: "Sequoia Capital", type: "VC Fund", icon: Building2 },
  { id: 2, name: "Andreessen Horowitz", type: "VC Fund", icon: Building2 },
  { id: 3, name: "Angel Investors Network", type: "Angel Group", icon: Users },
  { id: 4, name: "TPG Growth", type: "PE Fund", icon: Briefcase },
  { id: 5, name: "First Round Capital", type: "VC Fund", icon: TrendingUp },
];

export const CapitalPartnersSidebar = () => {
  const fundingLogos = [
    { src: "/Innovation_Norway_Logo.png", alt: "Innovation Norway logo" },
    { src: "/skatt.png", alt: "Skattefunn logo" },
    { src: "/siva.png", alt: "SIVA logo" },
    { src: "/edih.png", alt: "EDIH logo" },
  ];

  return (
    <div className="w-72 max-w-full bg-surface-subtle border-r border-border-light p-6 md:sticky md:top-0 md:h-[calc(100vh-64px)] overflow-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Capital Partners</h2>
        <div className="space-y-3">
          {capitalPartners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <Card key={partner.id} className="p-4 bg-surface-elevated border-border-light shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary text-sm">{partner.name}</h3>
                    <p className="text-xs text-text-secondary">{partner.type}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      
      <div>
        <h3 className="text-base font-semibold text-text-primary mb-3">Partners & Funding Programs</h3>
        <div className="space-y-2">
          <div className="p-3 bg-surface-elevated rounded-lg border border-border-light">
            <p className="text-sm font-medium text-text-primary">SBIR Innovation Fund</p>
            <p className="text-xs text-text-secondary">Government Grant Program</p>
          </div>
          <div className="p-3 bg-surface-elevated rounded-lg border border-border-light">
            <p className="text-sm font-medium text-text-primary">R&D Tax Incentives</p>
            <p className="text-xs text-text-secondary">Tax Credit Program</p>
          </div>
          <div className="p-3 bg-surface-elevated rounded-lg border border-border-light">
            <p className="text-sm font-medium text-text-primary">Clean Energy Initiative</p>
            <p className="text-xs text-text-secondary">Federal Grant Program</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-text-primary mb-3">Norwegian & EU Partners</h4>
          <div className="grid grid-cols-2 gap-3">
            {fundingLogos.map((logo) => (
              <div key={logo.src} className="p-2 bg-white rounded border border-border-light flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="max-h-8 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};