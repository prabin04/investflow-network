import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Calendar, MessageSquare, Users, Clock, ArrowRight } from "lucide-react";

const meetingSpaces = [
  {
    id: "1",
    name: "Executive Boardroom",
    type: "Premium Virtual Room",
    capacity: "Up to 8 participants",
    features: ["HD Video", "Screen Sharing", "Recording", "Whiteboard"],
    availability: "Available Now",
    nextSlot: "Today 15:00"
  },
  {
    id: "2", 
    name: "Investor Lounge",
    type: "Networking Space",
    capacity: "Up to 20 participants", 
    features: ["Breakout Rooms", "Chat", "File Sharing", "Polls"],
    availability: "Available Now",
    nextSlot: "Today 16:30"
  },
  {
    id: "3",
    name: "Due Diligence Suite",
    type: "Secure Conference Room",
    capacity: "Up to 12 participants",
    features: ["End-to-End Encryption", "Document Vault", "Recording", "Compliance"],
    availability: "Scheduled",
    nextSlot: "Tomorrow 10:00"
  }
];

const upcomingMeetings = [
  {
    id: "1",
    title: "NeuralTech AI - Series A Discussion",
    time: "Today 14:00",
    participants: ["TechVentures AS", "Nordic Capital", "Kunnskapsparken Advisor"],
    type: "Investment Review"
  },
  {
    id: "2",
    title: "SolarFlow Energy - Technical Deep Dive", 
    time: "Tomorrow 11:00",
    participants: ["Green Investment Fund", "Energy Expert", "CTO SolarFlow"],
    type: "Due Diligence"
  },
  {
    id: "3",
    title: "Regional Startup Showcase Prep",
    time: "Friday 09:00", 
    participants: ["All Portfolio Companies", "Investment Committee"],
    type: "Group Session"
  }
];

export const MeetingArena = () => {
  return (
    <div className="p-6 bg-surface-subtle">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Meeting Arena</h2>
        <p className="text-text-secondary">Secure virtual spaces for investment discussions and networking</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Available Meeting Spaces */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Available Meeting Spaces</h3>
          <div className="space-y-4">
            {meetingSpaces.map((space) => (
              <Card key={space.id} className="bg-surface-elevated border-border-light shadow-card hover:shadow-elevated transition-all duration-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-text-primary">{space.name}</CardTitle>
                      <p className="text-sm text-text-secondary">{space.type}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                      space.availability === "Available Now" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {space.availability}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Users className="w-4 h-4" />
                    <span>{space.capacity}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Clock className="w-4 h-4" />
                    <span>Next available: {space.nextSlot}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {space.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="investment" size="sm" className="flex-1">
                      <Video className="w-4 h-4" />
                      Join Room
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4" />
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Upcoming Meetings</h3>
          <div className="space-y-4">
            {upcomingMeetings.map((meeting) => (
              <Card key={meeting.id} className="bg-surface-elevated border-border-light shadow-card hover:shadow-elevated transition-all duration-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-text-primary">{meeting.title}</h4>
                      <p className="text-sm text-text-secondary">{meeting.time}</p>
                    </div>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md">
                      {meeting.type}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm font-medium text-text-primary mb-1">Participants:</p>
                    <div className="flex flex-wrap gap-1">
                      {meeting.participants.map((participant, index) => (
                        <span key={index} className="text-xs text-text-secondary bg-surface-subtle px-2 py-1 rounded">
                          {participant}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageSquare className="w-4 h-4" />
                      Details
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-surface-elevated border-border-light shadow-card">
              <CardContent className="p-4 text-center">
                <MessageSquare className="w-8 h-8 text-accent-foreground mx-auto mb-2" />
                <p className="text-sm text-text-secondary mb-3">
                  Need to schedule a custom meeting or consultation?
                </p>
                <Button variant="investment" size="sm">
                  Contact Advisor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};