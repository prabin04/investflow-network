import { CompanyCard } from "./CompanyCard";
import techStartupImage from "@/assets/tech-startup.jpg";
import energyCompanyImage from "@/assets/energy-company.jpg";
import roboticsCompanyImage from "@/assets/robotics-company.jpg";
import biotechCompanyImage from "@/assets/biotech-company.jpg";

const companies = [
  {
    id: "1",
    name: "NeuralTech AI",
    description: "Advanced AI platform for enterprise automation and machine learning solutions",
    image: techStartupImage,
    sector: "AI/ML",
    fundingStage: "Series A"
  },
  {
    id: "2",
    name: "SolarFlow Energy",
    description: "Next-generation solar panel technology with 40% higher efficiency",
    image: energyCompanyImage,
    sector: "Clean Energy",
    fundingStage: "Seed"
  },
  {
    id: "3",
    name: "RoboManufacture",
    description: "Automated manufacturing systems for precision industrial processes",
    image: roboticsCompanyImage,
    sector: "Robotics",
    fundingStage: "Series B"
  },
  {
    id: "4",
    name: "BioGenesis Labs",
    description: "Revolutionary gene therapy platform for rare disease treatment",
    image: biotechCompanyImage,
    sector: "Biotech",
    fundingStage: "Series A"
  },
  {
    id: "5",
    name: "QuantumShield Security",
    description: "Quantum-encrypted cybersecurity solutions for enterprise networks",
    image: techStartupImage,
    sector: "Cybersecurity",
    fundingStage: "Seed"
  },
  {
    id: "6",
    name: "GreenHydro Systems",
    description: "Hydrogen fuel cell technology for sustainable transportation",
    image: energyCompanyImage,
    sector: "Clean Energy",
    fundingStage: "Series A"
  }
];

export const CompanyGrid = () => {
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Pre-Qualified Companies</h2>
        <p className="text-text-secondary">Discover vetted investment opportunities across innovative sectors</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyCard key={company.id} {...company} />
        ))}
      </div>
    </div>
  );
};