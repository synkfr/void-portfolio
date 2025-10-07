import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ShowcaseSection } from "@/components/showcase-section";
import { SocialLinksSection } from "@/components/social-links-section";
import Spline from '@splinetool/react-spline/next';

export default function HomePage() {
  return (
    <>
      {/* Full-screen Spline background */}
      <div className="fixed inset-0 z-0">
        <Spline scene="https://prod.spline.design/60NICikYtTfmuSf1/scene.splinecode" />
      </div>

      {/* Main content */}
      <main className="relative z-20 pointer-events-none">
        <HeroSection />
        <div className="relative z-20 pointer-events-none">
          <AboutSection />
          <ShowcaseSection />
          <SocialLinksSection />
        </div>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border bg-card/50 relative z-10">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
