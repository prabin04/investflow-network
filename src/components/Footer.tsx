import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SubscribeSchema = z.object({ email: z.string().email("Valid email required") });

type SubscribeForm = z.infer<typeof SubscribeSchema>;

const Footer = () => {
  const [status, setStatus] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SubscribeForm>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: SubscribeForm) => {
    setStatus("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus(data?.error || "Subscription failed");
      } else {
        setStatus("Subscribed");
        reset();
      }
    } catch {
      setStatus("Network error");
    }
  };

  return (
    <footer className="mt-16 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">Investflow Network</h3>
          <p className="text-sm text-muted-foreground mt-2">TBD</p>
        </div>
        <nav className="space-y-2">
          <h4 className="text-sm font-medium">Quick links</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><Link to="/companies/capital-partners" className="hover:underline">Capital Partners</Link></li>
            <li><Link to="/" className="hover:underline">Companies</Link></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><Link to="/" className="hover:underline">About</Link></li>
            <li><Link to="/" className="hover:underline">Blog</Link></li>
          </ul>
        </nav>
        <div>
          <h4 className="text-sm font-medium">Newsletter</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex gap-2">
            <Input aria-label="Email" placeholder="Email" type="email" {...register("email" as const)} />
            <Button type="submit" size="sm" disabled={isSubmitting}>Subscribe</Button>
          </form>
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
          {status && <p className="text-xs text-muted-foreground mt-1" role="status" aria-live="polite">{status}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
