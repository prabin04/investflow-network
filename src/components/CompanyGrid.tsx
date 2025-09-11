import { PreQualifiedCompanyCard } from "./PreQualifiedCompanyCard";
import techStartupImage from "@/assets/tech-startup.jpg";
import energyCompanyImage from "@/assets/energy-company.jpg";
import roboticsCompanyImage from "@/assets/robotics-company.jpg";
import biotechCompanyImage from "@/assets/biotech-company.jpg";

// Create simple rising graph diagrams as data URLs
const createRisingGraph = (color: string) => `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" class="w-full h-full">
  <rect width="400" height="200" fill="#f8fafc"/>
  <defs>
    <linearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.1" />
    </linearGradient>
  </defs>
  <path d="M20,180 L80,160 L140,120 L200,100 L260,80 L320,60 L380,40" 
        stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M20,180 L80,160 L140,120 L200,100 L260,80 L320,60 L380,40 L380,200 L20,200 Z" 
        fill="url(#grad)"/>
  <circle cx="380" cy="40" r="4" fill="${color}"/>
  <text x="380" y="30" text-anchor="middle" font-family="Arial" font-size="12" fill="${color}">+47%</text>
</svg>
`)}`;

const items = [
  { 
    src: techStartupImage, 
    alt: "Technology company image (placeholder)", 
    name: "NeuraTech Labs", 
    description: "AI-driven solutions empowering businesses with smarter automation.",
    videoSrc: "https://cdn.pixabay.com/video/2016/12/15/6785-195986684_large.mp4",
  },
  { 
    src: energyCompanyImage, 
    alt: "Energy company image (placeholder)", 
    name: "Voltura Energy", 
    description: "Sustainable energy provider driving the transition to a greener future.",
    videoSrc: "https://media.istockphoto.com/id/1165460558/video/social-media-marketing.mp4?s=mp4-640x640-is&k=20&c=D_s92tWBDsEXlAitNGyigZhm8j81RSFmoN_5jMXy3oM=",
  },
  { 
    src: createRisingGraph("#1c507f"), 
    alt: "Sales growth chart showing rising trend", 
    name: "Elevate Analytics", 
    description: "Data insights platform delivering measurable growth strategies.",
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  { 
    src: roboticsCompanyImage, 
    alt: "Robotics company image (placeholder)", 
    name: "Apex Robotics", 
    description: "Next-gen robotics for precision manufacturing and smart automation." 
  },
  { 
    src: biotechCompanyImage, 
    alt: "Biotech company image (placeholder)", 
    name: "Genora Biotech", 
    description: "Innovating life sciences with breakthrough genetic research." 
  },
  { 
    src: createRisingGraph("#059669"), 
    alt: "Revenue growth chart showing upward trajectory", 
    name: "Prospera Metrics", 
    description: "Financial intelligence platform powering revenue optimization." 
  },
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
            videoSrc={(item as any).videoSrc}
          />
        ))}
      </div>
    </div>
  );
};