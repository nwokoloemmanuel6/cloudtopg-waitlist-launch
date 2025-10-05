import { WaitlistForm } from "@/components/WaitlistForm";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Globe, 
  Users, 
  Code, 
  Shield, 
  Rocket,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import logo from "@/assets/logo.svg";
import heroImage from "@/assets/hero-image.jpg";

// Manually update this number when needed
const MANUAL_SLOTS_AVAILABLE = 30;

const Index = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Two Column */}
      <section className="relative overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-14 py-12">
          {/* Logo */}
          <div className="mb-12">
            <img src={logo} alt="Cloud Top G" className="h-10 md:h-12" />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Image with Overlaid Text */}
            <div className="order-1 lg:order-1 flex">
              <div className="relative w-full min-h-[600px] lg:min-h-0 flex-1">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl" />
                {/* White accent border/glow */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10" />
                <img
                  src={heroImage}
                  alt="Cloud Engineering Excellence"
                  className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
                />
                {/* Bottom gradient overlay for text readability - only at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl" />
                
                {/* Overlaid Content - anchored to bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10 flex flex-col justify-end">
                  <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                      Become a world-class{" "}
                      <span className="text-primary drop-shadow-lg">cloud engineer</span>
                    </h1>

                    <p className="text-base md:text-lg text-white/90 max-w-xl drop-shadow-md">
                      Join the Cloud Top G Cohort 2026 Waitlist — get early access, assessment prep, 
                      and exclusive launch bonuses.
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                        <span className="text-white drop-shadow-md"><strong className="text-primary">18% OFF</strong> Program Fee for waitlisters</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                        <span className="text-white drop-shadow-md"><strong className="text-primary">25% OFF</strong> Application Fee during Oct 1–31</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                        <span className="text-white drop-shadow-md"><strong className="text-primary">Priority Access</strong> to program assessment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Only */}
            <div className="order-2 lg:order-2 mr-4 lg:mr-6 xl:mr-8 pl-0" id="waitlist-form">
              <div className="relative bg-white border border-border rounded-2xl w-full max-w-[700px] ml-auto p-8 lg:p-10 shadow-xl">
                {/* Only 30 Slots Badge - Mobile: centered above title, Desktop: top-right */}
                <div className="flex justify-center lg:justify-end mb-4 lg:mb-0 lg:absolute lg:top-3 lg:right-3" aria-live="polite">
                  <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 animate-pulse">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium text-primary">Only {MANUAL_SLOTS_AVAILABLE} Slots Available</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 text-black">Join the Waitlist</h2>
                  <p className="text-sm text-black/70">
                    Secure your spot and lock in exclusive bonuses
                  </p>
                </div>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud Top G */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Cloud Top G</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform into a globally competitive cloud engineer through hands-on learning and premium mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hands-On Projects</h3>
              <p className="text-muted-foreground">
                Build real-world cloud infrastructure. Deploy production-grade applications. 
                Graduate with a portfolio that proves your expertise to global employers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Opportunities</h3>
              <p className="text-muted-foreground">
                Master AWS, Azure, and GCP. Learn the skills that top tech companies demand. 
                Open doors to remote opportunities and international careers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Mentorship</h3>
              <p className="text-muted-foreground">
                Live sessions with industry experts. Accountability partners who keep you on track. 
                Join a community that pushes you to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Snapshot */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">9 Months</div>
              <div className="text-sm text-muted-foreground">Intensive Training</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">Live</div>
              <div className="text-sm text-muted-foreground">Expert Mentorship</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">Portfolio</div>
              <div className="text-sm text-muted-foreground">Real Projects</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">Career</div>
              <div className="text-sm text-muted-foreground">Ready Graduate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA with Countdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Time is <span className="gradient-text">Running Out</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Waitlist closes October 31, 2024. Lock in your bonuses now.
            </p>
          </div>

          <CountdownTimer />

          <Button onClick={scrollToForm} variant="premium" size="lg" className="text-lg">
            Join Waitlist Now
            <Rocket className="w-5 h-5" />
          </Button>

          <p className="text-sm text-muted-foreground">
            Join aspiring cloud engineers already on the waitlist
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <img src={logo} alt="Cloud Top G" className="h-10 mx-auto" />
            <p className="text-sm text-muted-foreground">
              Building the next generation of world-class cloud engineers.
            </p>
            <div className="pt-6 text-sm text-muted-foreground">
              <p>&copy; 2024 Cloud Top G. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
