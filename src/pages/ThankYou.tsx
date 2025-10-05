import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Calendar, Gift } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Link, useSearchParams } from "react-router-dom";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const paymentRef = searchParams.get("ref");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8 py-12">
        {/* Logo */}
        <Link to="/" className="inline-block">
          <img src={logo} alt="Cloud Top G" className="h-12 mx-auto" />
        </Link>

        {/* Success Icon */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
          <div className="relative bg-card border-2 border-primary rounded-full p-6 inline-block">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            You're on the <span className="gradient-text">Waitlist</span>!
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Welcome to the Cloud Top G Cohort 2026 journey. Your bonuses are locked in.
          </p>
          {paymentRef && (
            <div className="bg-card/50 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground">Payment Reference</p>
              <p className="text-lg font-mono font-semibold text-primary break-all">{paymentRef}</p>
            </div>
          )}
        </div>

        {/* Bonuses Locked */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4 max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold">18% OFF Program Fee</div>
              <div className="text-sm text-muted-foreground">Early bird discount secured</div>
            </div>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold">25% OFF Application Fee</div>
              <div className="text-sm text-muted-foreground">Limited-time offer applied</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">What Happens Next?</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 space-y-2">
              <Mail className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold">Check Your Email</h3>
              <p className="text-sm text-muted-foreground">
                We've sent you a confirmation with important details
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-2">
              <Calendar className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold">Assessment Prep</h3>
              <p className="text-sm text-muted-foreground">
                You'll receive assessment guidance before program launch
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button asChild variant="outline" size="lg">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground pt-4">
          Questions? Email us at{" "}
          <a href="mailto:hello@cloudtopg.com" className="text-primary hover:underline">
            hello@cloudtopg.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
