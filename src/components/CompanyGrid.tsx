import { PreQualifiedCompanyCard } from "./PreQualifiedCompanyCard";
import techStartupImage from "@/assets/tech-startup.jpg";
import energyCompanyImage from "@/assets/energy-company.jpg";
import roboticsCompanyImage from "@/assets/robotics-company.jpg";
import biotechCompanyImage from "@/assets/biotech-company.jpg";

const items = [
  { src: techStartupImage, alt: "Technology company image (placeholder)", name: null, description: null },
  { src: energyCompanyImage, alt: "Energy company image (placeholder)", name: null, description: null },
  { src: roboticsCompanyImage, alt: "Robotics company image (placeholder)", name: null, description: null },
  { src: biotechCompanyImage, alt: "Biotech company image (placeholder)", name: null, description: null },
];

export const CompanyGrid = () => {
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Pre-Qualified Companies</h2>
        <p className="text-text-secondary">Discover vetted investment opportunities across innovative sectors</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <PreQualifiedCompanyCard
            key={idx}
            imageSrc={item.src}
            imageAlt={item.alt}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};