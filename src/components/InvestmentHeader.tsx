import { TrendingUp, Building2, CalendarDays, Handshake, LifeBuoy } from "lucide-react";

export const InvestmentHeader = () => {
  return (
    <header className="bg-surface-elevated border-b border-border-light">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-investment-gradient rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary">InvestMatch Helgeland</h1>
            <p className="text-sm text-text-secondary">Connecting investors with Northern Norway's innovation ecosystem</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-4">
          <a href="#companies" className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-text-primary transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Building2 className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
            <span>Companies</span>
          </a>
          <a href="#events" className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-text-secondary transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <CalendarDays className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
            <span>Events</span>
          </a>
          <a href="#meetings" className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-text-secondary transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Handshake className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
            <span>Meeting Arena</span>
          </a>
          <a href="#support" className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-text-secondary transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <LifeBuoy className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
            <span>Support</span>
          </a>
        </nav>
      </div>
    </header>
  );
};