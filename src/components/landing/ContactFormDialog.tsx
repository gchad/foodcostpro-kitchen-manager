import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis").max(50, "50 caractères max"),
  lastName: z.string().trim().min(1, "Le nom est requis").max(50, "50 caractères max"),
  email: z.string().trim().email("Email invalide").max(255, "255 caractères max"),
  restaurant: z.string().trim().min(1, "Le nom du restaurant est requis").max(100, "100 caractères max"),
  message: z.string().trim().min(1, "Le message est requis").max(2000, "2000 caractères max"),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactFormDialogProps {
  children: React.ReactNode;
}

const ContactFormDialog = ({ children }: ContactFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    restaurant: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      setForm({ firstName: "", lastName: "", email: "", restaurant: "", message: "" });
      setErrors({});
      toast.success("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading">Nous contacter</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                placeholder="Jean"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName">Nom</Label>
              <Input
                id="lastName"
                placeholder="Dupont"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
              {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jean@restaurant.fr"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="restaurant">Nom du restaurant</Label>
            <Input
              id="restaurant"
              placeholder="Le Bistrot Parisien"
              value={form.restaurant}
              onChange={(e) => handleChange("restaurant", e.target.value)}
            />
            {errors.restaurant && <p className="text-xs text-destructive">{errors.restaurant}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Comment pouvons-nous vous aider ?"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full bg-gradient-accent hover:opacity-90 text-white border-0" disabled={submitting}>
            {submitting ? "Envoi en cours…" : "Envoyer le message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
