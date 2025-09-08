import { TrendingUp } from "lucide-react";

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
        
        <nav className="flex items-center gap-6">
          <a href="#companies" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
            Companies
          </a>
          <a href="#events" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Events
          </a>
          <a href="#meetings" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Meeting Arena
          </a>
          <a href="#support" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
};