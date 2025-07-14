
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { 
  ShieldCheck, 
  FileCheck, 
  TrendingUp, 
  Users, 
  Award,
  Smartphone,
  Globe,
  Lock,
  CheckCircle2,
  Star,
  Zap,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Features() {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      icon: ShieldCheck,
      title: "Blockchain Verification",
      description: "Your work history is permanently recorded on blockchain, making it tamper-proof and universally verifiable."
    },
    {
      icon: FileCheck,
      title: "Digital Work Records",
      description: "Maintain a complete digital portfolio of your work experience, certificates, and achievements."
    },
    {
      icon: TrendingUp,
      title: "Career Growth Tracking",
      description: "Track your professional journey and showcase your career progression to potential employers."
    },
    {
      icon: Users,
      title: "Company Network",
      description: "Connect with verified companies and build lasting professional relationships."
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Get your skills certified by employers and training institutes with blockchain-backed certificates."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Access your digital identity anywhere, anytime with our mobile-optimized platform."
    }
  ];

  const additionalFeatures = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Your verified identity works across borders and industries"
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "You control who sees your data and when"
    },
    {
      icon: CheckCircle2,
      title: "Instant Verification",
      description: "Employers can verify your credentials in seconds"
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Build your reputation with employer ratings and reviews"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in minutes with our simple onboarding process"
    },
    {
      icon: Eye,
      title: "Transparent Process",
      description: "Every verification is trackable and auditable"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Powerful Features for 
            <span className="bg-hero-gradient bg-clip-text text-transparent"> Digital Identity</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how NayiPehchaan transforms the way gig workers build and showcase their professional identity
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Core Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build a verified digital professional identity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-card shadow-card hover:shadow-card-lg transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose NayiPehchaan?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for gig workers with features that matter most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 hover:bg-card transition-all duration-300">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of workers building their verified digital identity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/register/worker')}
              className="bg-hero-gradient hover:opacity-90 text-white shadow-lg rounded-full px-8"
            >
              Start Building Identity
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/register/company')}
              className="rounded-full px-8"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
