import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const upcomingEvents = [
  {
    id: "1",
    title: "Investor Pitch Night - Q1 2024",
    date: "March 15, 2024",
    time: "18:00 - 21:00",
    location: "Kunnskapsparken Helgeland, Mo i Rana",
    attendees: 25,
    type: "Pitch Event",
    description: "Join us for an evening of compelling startup pitches from our pre-qualified companies seeking Series A funding."
  },
  {
    id: "2", 
    title: "Clean Energy Investment Forum",
    date: "March 22, 2024",
    time: "09:00 - 16:00",
    location: "Virtual Event",
    attendees: 45,
    type: "Forum",
    description: "Deep dive into renewable energy opportunities in Northern Norway with industry experts and regional companies."
  },
  {
    id: "3",
    title: "Due Diligence Workshop",
    date: "April 5, 2024", 
    time: "13:00 - 17:00",
    location: "Kunnskapsparken Helgeland, Mo i Rana",
    attendees: 15,
    type: "Workshop",
    description: "Learn best practices for evaluating investment opportunities with our expert consultants."
  },
  {
    id: "4",
    title: "Regional Innovation Showcase",
    date: "April 18, 2024",
    time: "10:00 - 18:00", 
    location: "Helgeland Business Center",
    attendees: 60,
    type: "Showcase",
    description: "Annual showcase of Helgeland's most promising startups and scale-ups seeking investment."
  }
];

export const EventsSection = () => {
  return (
    <div className="p-6 bg-surface-subtle">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Upcoming Events</h2>
        <p className="text-text-secondary">Join our curated investment events and networking opportunities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="bg-surface-elevated border-border-light shadow-card hover:shadow-elevated transition-all duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-text-primary mb-1">{event.title}</CardTitle>
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md">
                    {event.type}
                  </span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-text-secondary">{event.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} expected attendees</span>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button variant="investment" size="sm" className="flex-1">
                  Register
                </Button>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};