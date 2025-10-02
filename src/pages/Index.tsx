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

const Index = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Two Column */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo */}
          <div className="mb-12">
            <img src={logo} alt="Cloud Top G" className="h-10 md:h-12" />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-1 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl" />
                <img
                  src={heroImage}
                  alt="Cloud Engineering Excellence"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Right: Content + Form */}
            <div className="order-2 lg:order-2 space-y-8" id="waitlist-form">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium">Only 30 Slots Available</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Become a world-class{" "}
                  <span className="gradient-text">cloud engineer</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Join the Cloud Top G Cohort 2026 Waitlist — get early access, assessment prep, 
                  and exclusive launch bonuses.
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground"><strong className="text-primary">18% OFF</strong> Program Fee for waitlisters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground"><strong className="text-primary">25% OFF</strong> Application Fee during Oct 1–31</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground"><strong className="text-primary">Priority Access</strong> to program assessment</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Join the Waitlist</h2>
                  <p className="text-sm text-muted-foreground">
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
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">12 Months</div>
              <div className="text-sm text-muted-foreground">Intensive Training</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">Live</div>
              <div className="text-sm text-muted-foreground">Expert Mentorship</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">Portfolio</div>
              <div className="text-sm text-muted-foreground">Real Projects</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">Career</div>
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
            Join 200+ aspiring cloud engineers already on the waitlist
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={logo} alt="Cloud Top G" className="h-10" />
              <p className="text-sm text-muted-foreground">
                Building the next generation of world-class cloud engineers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Program</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Admissions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@cloudtopg.com" className="hover:text-primary transition-colors">
                    hello@cloudtopg.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+234 XXX XXX XXXX</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Cloud Top G. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
