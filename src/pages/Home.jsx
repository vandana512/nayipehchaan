import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  FileText, 
  Building2, 
  UserCheck,
  ArrowRight,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Verified Work History",
      description: "Every job and project you complete gets verified and stored securely on the blockchain"
    },
    {
      icon: Award,
      title: "Digital Certificates",
      description: "Upload and manage your skill certificates, experience letters, and achievements"
    },
    {
      icon: Users,
      title: "Trusted by Companies",
      description: "Leading companies use our platform to verify worker credentials and experience"
    }
  ];

  const benefits = [
    "Get your verified work record",
    "Digital Identity made easy", 
    "Empowering your work journey",
    "Build trust with employers"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                  Work that <span className="bg-hero-gradient bg-clip-text text-transparent">speaks</span> for you
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Build your verified digital identity. Track your work experience. 
                  Make your contributions legitimate and valuable with blockchain-powered verification.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/register/worker')}
                  className="bg-hero-gradient hover:opacity-90 transition-opacity"
                >
                  <UserCheck className="w-5 h-5 mr-2" />
                  Start as Worker
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/register/company')}
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Join as Company
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient opacity-20 rounded-2xl blur-3xl animate-float"></div>
              <img 
                src={heroImage} 
                alt="Digital workers platform" 
                className="relative rounded-2xl shadow-card-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Why Choose NayiPehchaan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building a future where every worker's contribution is recognized, 
              verified, and valued in the digital economy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-card-lg transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to build your verified work identity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Register with your basic information and upload your identification documents
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold">Add Work Experience</h3>
              <p className="text-muted-foreground">
                Upload certificates, experience letters, and get verification from companies
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold">Build Your Reputation</h3>
              <p className="text-muted-foreground">
                Share your verified profile with employers and earn better opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-muted-foreground">Verified Workers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Trusted Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <div className="text-muted-foreground">Work Records</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Verification Success</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Build Your Digital Work Identity?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of workers who are already building their verified career profiles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/register/worker')}
                className="bg-hero-gradient hover:opacity-90 transition-opacity"
              >
                <UserCheck className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}