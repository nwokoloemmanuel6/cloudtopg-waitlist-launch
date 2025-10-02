import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Logo */}
        <Link to="/" className="inline-block">
          <img src={logo} alt="Cloud Top G" className="h-12" />
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: October 2024</p>

          <div className="space-y-6 text-foreground/90">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p>
                When you join our waitlist, we collect your name, email address, and phone number
                to communicate with you about Cloud Top G program updates, admissions, and assessments.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Send you program updates and important announcements</li>
                <li>Notify you about assessment dates and application windows</li>
                <li>Share exclusive early-bird offers and bonuses</li>
                <li>Communicate admission decisions and next steps</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p>
                We use industry-standard security measures to protect your personal information.
                Your data is stored securely and never shared with third parties without your consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unsubscribe from our emails at any time</li>
                <li>Request access to your personal data</li>
                <li>Request deletion of your information</li>
                <li>Update your contact preferences</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@cloudtopg.com" className="text-primary hover:underline">
                  hello@cloudtopg.com
                </a>
              </p>
            </section>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <Link to="/" className="text-primary hover:underline">
            ← Back to Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
