import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const WaitlistForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "+234",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive emails about the program.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);
    
    // Add consent as a proper form field
    formDataToSend.set("consent", consent ? "true" : "false");

    try {
      const response = await fetch("https://formspree.io/f/mdkwzdzn", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Welcome to the Waitlist! 🎉",
          description: "Check your email for next steps.",
        });
        
        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <input type="hidden" name="_subject" value="CTG Waitlist Signup" />
      
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium text-black">
          Full Name <span className="text-primary">*</span>
        </Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Enter your full name"
          className="h-12 bg-white text-black placeholder:text-black/70 border-border focus:border-primary focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-black">
          Email Address <span className="text-primary">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
          className="h-12 bg-white text-black placeholder:text-black/70 border-border focus:border-primary focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-sm font-medium text-black">
          Phone Number <span className="text-primary">*</span>
        </Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          required
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          placeholder="+234 XXX XXX XXXX"
          className="h-12 bg-white text-black placeholder:text-black/70 border-border focus:border-primary focus:ring-primary"
        />
      </div>

      <div className="flex items-start gap-3 py-2">
        <button
          type="button"
          role="checkbox"
          aria-checked={consent}
          onClick={() => setConsent(!consent)}
          className={`
            mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-all
            ${consent ? "bg-primary border-primary" : "border-muted-foreground bg-transparent"}
          `}
        >
          {consent && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
        </button>
        {/* Hidden input to ensure form data includes consent */}
        <input type="hidden" name="consent" value={consent ? "true" : "false"} />
        <label 
          onClick={() => setConsent(!consent)}
          className="text-sm text-black cursor-pointer leading-tight"
        >
          I agree to receive emails about Cloud Top G admissions, assessments, and program updates. <span className="text-primary">*</span>
        </label>
      </div>

      <Button
        type="submit"
        variant="premium"
        size="lg"
        disabled={isSubmitting}
        className="w-full group"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>

      <p className="text-xs text-center text-black/60">
        No spam — unsubscribe anytime.{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
};
