import { TrendingUp, Building2, CalendarDays, Handshake, LifeBuoy, Menu, PanelsLeft } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CapitalPartnersSidebar } from "@/components/CapitalPartnersSidebar";

export const InvestmentHeader = () => {
  return (
    <header className="bg-surface-elevated border-b border-border-light sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Mobile sidebar toggle */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open sidebar" className="inline-flex items-center justify-center w-9 h-9 rounded-md border hover:bg-accent transition-colors">
              <PanelsLeft className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 max-w-[85vw]">
              <SheetHeader className="px-4 py-3 border-b">
                <SheetTitle>Capital Partners</SheetTitle>
              </SheetHeader>
              <div className="overflow-auto">
                <CapitalPartnersSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-investment-gradient rounded-lg">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-base sm:text-xl font-bold text-text-primary">InvestMatch Helgeland</h1>
            <p className="hidden sm:block text-sm text-text-secondary">Connecting investors with Northern Norway's innovation ecosystem</p>
          </div>
        </div>
        
        {/* Right: Desktop nav and Mobile menu toggle */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-4">
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

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger aria-label="Open menu" className="inline-flex items-center justify-center w-9 h-9 rounded-md border hover:bg-accent transition-colors">
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 max-w-[85vw]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 grid gap-2">
                  <a href="#companies" className="group inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-text-primary transition-all hover:text-primary">
                    <Building2 className="w-4 h-4" aria-hidden="true" />
                    <span>Companies</span>
                  </a>
                  <a href="#events" className="group inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-text-secondary transition-all hover:text-primary">
                    <CalendarDays className="w-4 h-4" aria-hidden="true" />
                    <span>Events</span>
                  </a>
                  <a href="#meetings" className="group inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-text-secondary transition-all hover:text-primary">
                    <Handshake className="w-4 h-4" aria-hidden="true" />
                    <span>Meeting Arena</span>
                  </a>
                  <a href="#support" className="group inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-text-secondary transition-all hover:text-primary">
                    <LifeBuoy className="w-4 h-4" aria-hidden="true" />
                    <span>Support</span>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};