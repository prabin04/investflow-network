import { InvestmentHeader } from "@/components/InvestmentHeader";
import { CapitalPartnersSidebar } from "@/components/CapitalPartnersSidebar";
import { CompanyGrid } from "@/components/CompanyGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <InvestmentHeader />
      
      <div className="flex">
        <CapitalPartnersSidebar />
        <CompanyGrid />
      </div>
    </div>
  );
};

export default Index;
