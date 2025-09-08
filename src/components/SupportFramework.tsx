import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Users, TrendingUp, Award, Building } from "lucide-react";

const supportServices = [
  {
    icon: Shield,
    title: "Due Diligence Support",
    description: "Comprehensive vetting process ensuring investment-ready companies meet our quality standards."
  },
  {
    icon: Users,
    title: "Expert Consultation", 
    description: "Access to seasoned business advisors and industry experts throughout the investment process."
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "In-depth regional market research and competitive landscape analysis for informed decisions."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous certification process ensuring only viable, scalable businesses reach our platform."
  }
];

const certificationBadges = [
  "Kunnskapsparken Verified",
  "Due Diligence Complete", 
  "Regional Growth Ready",
  "Expert Backed"
];

export const SupportFramework = () => {
  return (
    <div className="p-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-investment-gradient rounded-lg">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary">Kunnskapsparken Helgeland</h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Your trusted partner in connecting regional innovation with strategic investment. 
            Every company on our platform is backed by our comprehensive support framework.
          </p>
        </div>

        {/* Support Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {supportServices.map((service, index) => (
            <Card key={index} className="bg-surface-elevated border-border-light shadow-card hover:shadow-elevated transition-all duration-200">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <CardTitle className="text-lg text-text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-secondary text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Process */}
        <Card className="bg-surface-elevated border-border-light shadow-card">
          <CardHeader>
            <CardTitle className="text-xl text-text-primary flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Our Certification Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">What We Evaluate</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Business model viability and scalability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Financial health and growth potential
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Management team competency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Market opportunity and competitive position
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Regional impact and sustainability
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-primary mb-3">Certification Badges</h4>
                <div className="flex flex-wrap gap-2">
                  {certificationBadges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-text-secondary mt-3">
                  Companies displaying these badges have successfully completed our comprehensive 
                  vetting process and are actively supported by our expert team.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};