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
      
      <div className="flex">
        <CapitalPartnersSidebar />
        <div className="flex-1">
          <div id="companies">
            <CompanyGrid />
          </div>
          <div id="events">
            <EventsSection />
          </div>
          <div id="meetings">
            <MeetingArena />
          </div>
          <div id="support">
            <SupportFramework />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
