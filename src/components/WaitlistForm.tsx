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

  const PAYMENT_PAGE_URL = "https://paystack.shop/pay/ctg-c26-waitlist";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate consent
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive emails about the program.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Step 1: Submit to Formspree first (capture lead)
      const body = new FormData();
      body.set("email", formData.email);
      body.set("fullName", formData.fullName);
      body.set("phoneNumber", formData.phoneNumber);
      body.set("consent", consent ? "true" : "false");
      body.set("_subject", "CTG Waitlist (Redirect to Paystack)");

      await fetch("https://formspree.io/f/mdkwzdzn", {
        method: "POST",
        body,
        headers: { Accept: "application/json" }
      });

      // Step 2: Redirect to Paystack Payment Page with prefill params
      const paymentUrl = new URL(PAYMENT_PAGE_URL);
      paymentUrl.searchParams.set("email", formData.email);
      paymentUrl.searchParams.set("full_name", formData.fullName);
      paymentUrl.searchParams.set("phone", formData.phoneNumber);
      
      window.location.href = paymentUrl.toString();
    } catch (error) {
      console.error("Error submitting to Formspree:", error);
      
      // Graceful fallback: redirect to thank-you page
      toast({
        title: "Submission recorded",
        description: "Redirecting to payment...",
      });
      
      // Still try to redirect to payment page
      try {
        const paymentUrl = new URL(PAYMENT_PAGE_URL);
        paymentUrl.searchParams.set("email", formData.email);
        paymentUrl.searchParams.set("full_name", formData.fullName);
        paymentUrl.searchParams.set("phone", formData.phoneNumber);
        window.location.href = paymentUrl.toString();
      } catch {
        // Final fallback
        window.location.href = `/thank-you?ref=pending`;
      }
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
