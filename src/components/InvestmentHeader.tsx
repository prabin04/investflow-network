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
            <h1 className="text-xl font-bold text-text-primary">InvestMatch</h1>
            <p className="text-sm text-text-secondary">Connecting investors with vetted companies</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Analytics
          </a>
        </nav>
      </div>
    </header>
  );
};