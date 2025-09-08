import { InvestmentHeader } from "@/components/InvestmentHeader";
import { CapitalPartnersSidebar } from "@/components/CapitalPartnersSidebar";
import { CompanyGrid } from "@/components/CompanyGrid";
import { EventsSection } from "@/components/EventsSection";
import { SupportFramework } from "@/components/SupportFramework";
import { MeetingArena } from "@/components/MeetingArena";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <InvestmentHeader />
      
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block">
          <CapitalPartnersSidebar />
        </div>
        <div className="flex-1">
          <div id="companies" className="bg-surface-elevated bg-pattern-stripes">
            <CompanyGrid />
          </div>
          <div id="events" className="bg-surface-subtle bg-pattern-dots">
            <EventsSection />
          </div>
          <div id="meetings" className="bg-white">
            <MeetingArena />
          </div>
          <div id="support" className="bg-accent/30">
            <SupportFramework />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
