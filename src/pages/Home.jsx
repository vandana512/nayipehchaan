
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { 
  ShieldCheck, 
  UserCheck, 
  TrendingUp, 
  Users, 
  Award,
  FileCheck,
  CheckCircle2,
  UserPlus,
  Building,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Work that speaks for you
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build your verified digital identity. Track your work history. 
            Make your experience count with blockchain-powered verification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/register/worker')}
              className="bg-hero-gradient hover:opacity-90 text-white shadow-lg rounded-full px-8 py-6"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Start as Worker
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/register/company')}
              className="rounded-full px-8 py-6"
            >
              <Building className="w-5 h-5 mr-2" />
              Join as Company
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-2xl bg-card shadow-card">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Identity</h3>
              <p className="text-muted-foreground">Secure blockchain verification of your work credentials</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work History</h3>
              <p className="text-muted-foreground">Complete record of your professional journey</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card shadow-card">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-muted-foreground">Build credibility and unlock better opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Verified Workers</div>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-success" />
              </div>
              <div className="text-3xl font-bold text-success mb-2">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">50,000+</div>
              <div className="text-muted-foreground">Work Records Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">How NayiPehchaan Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to build your verified digital identity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-card shadow-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">1. Register</h3>
            <p className="text-muted-foreground">
              Create your profile with basic information and upload your documents
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card shadow-card">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileCheck className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">2. Add Experience</h3>
            <p className="text-muted-foreground">
              Record your work history and upload certificates from employers
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card shadow-card">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">3. Get Verified</h3>
            <p className="text-muted-foreground">
              Companies verify your work, creating a permanent blockchain record
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose NayiPehchaan?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tamper-Proof Records</h3>
                  <p className="text-muted-foreground">Your work history is secured on blockchain, impossible to fake or alter.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Trust</h3>
                  <p className="text-muted-foreground">Verified credentials help you stand out and gain employer confidence.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Better Opportunities</h3>
                  <p className="text-muted-foreground">Access higher-paying jobs with your proven track record.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-hero-gradient rounded-2xl shadow-card-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Your Digital Identity</h3>
                  <p className="opacity-90">Secure • Verified • Portable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Build Your Digital Identity?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of workers who have already started their verified career journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/register/worker')}
              className="bg-hero-gradient hover:opacity-90 text-white shadow-lg rounded-full px-8"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/register/company')}
              className="rounded-full px-8"
            >
              <Building className="w-5 h-5 mr-2" />
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
