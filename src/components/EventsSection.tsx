import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

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

const SignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
});

type SignupForm = z.infer<typeof SignupSchema>;

export const EventsSection = () => {
  const [status, setStatus] = useState<string | null>(null);

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
              
              <SignupInline eventId={event.id} onStatus={setStatus} />
            </CardContent>
          </Card>
        ))}
      </div>

      {status ? (
        <div className="mt-4 text-sm text-muted-foreground" role="status" aria-live="polite">{status}</div>
      ) : null}
    </div>
  );
};

const SignupInline = ({ eventId, onStatus }: { eventId: string; onStatus: (s: string) => void }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SignupForm>({
    resolver: zodResolver(SignupSchema),
    defaultValues: { name: "", email: "", company: "", jobTitle: "", consent: false },
  });

  const onSubmit = async (values: SignupForm) => {
    onStatus("");
    try {
      const res = await fetch(`/api/events/${eventId}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        const errorText = data?.details?.map((d: any) => d.message).join(", ") || data?.error || "Signup failed";
        onStatus(`Error: ${errorText}`);
      } else {
        onStatus("Signup successful");
        reset();
      }
    } catch {
      onStatus("Network error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-end" aria-label="Quick signup form">
      <div>
        <Input aria-label="Name" placeholder="Name*" {...register("name" as const)} />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Input aria-label="Email" placeholder="Email*" type="email" {...register("email" as const)} />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Input aria-label="Company" placeholder="Company" {...register("company" as const)} />
      </div>
      <div>
        <Input aria-label="Job title" placeholder="Job title" {...register("jobTitle" as const)} />
      </div>
      <label className="flex items-center gap-2 text-sm sm:col-span-2 mt-1">
        <Checkbox {...register("consent" as const)} />
        <span>I agree to be contacted about this event</span>
      </label>
      {errors.consent && <p className="text-xs text-red-600 sm:col-span-2">{errors.consent.message}</p>}
      <div className="sm:col-span-2 mt-1">
        <Button type="submit" variant="investment" size="sm" disabled={isSubmitting}>Sign up</Button>
      </div>
    </form>
  );
};