
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { 
  Target, 
  Heart, 
  Users, 
  Globe,
  TrendingUp,
  Shield,
  Handshake,
  Lightbulb
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe every worker deserves recognition for their contributions and the opportunity to build a better future."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Built on blockchain technology to ensure transparency, security, and immutable records of work history."
    },
    {
      icon: Handshake,
      title: "Inclusion",
      description: "Creating opportunities for all workers, regardless of their background or current employment status."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Using cutting-edge technology to solve real-world problems faced by the gig economy workforce."
    }
  ];

  const stats = [
    { number: "50M+", label: "Gig Workers in India" },
    { number: "30%", label: "GDP Contribution by Gig Economy" },
    { number: "90%", label: "Workers Without Verified Records" },
    { number: "2025", label: "Our Target Year for 1M Users" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">NayiPehchaan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bridging the gap between gig workers and formal recognition through blockchain-powered digital identity
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower gig workers and laborers by providing them with a verified digital identity that validates their work experience, skills, and contributions to the economy.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that every job matters, every skill counts, and every worker deserves recognition. Through blockchain technology, we're creating a permanent, tamper-proof record of professional achievements.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-hero-gradient rounded-2xl shadow-card-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Empowering Workers</h3>
                  <p className="opacity-90">Building dignity through recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">The Challenge We're Solving</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="text-2xl font-bold text-destructive mb-4">The Problem</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gig workers lack verified records of their work history
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Employers can't easily verify worker credentials
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Skills and experience often go unrecognized
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Limited access to better job opportunities
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-success/5 border border-success/20">
              <h3 className="text-2xl font-bold text-success mb-4">Our Solution</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Blockchain-verified work history and credentials
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Instant verification for employers and workers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Digital portfolio showcasing skills and achievements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Access to verified job opportunities and career growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-card-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">The Impact We're Making</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the gig economy landscape in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-card shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl mb-8 opacity-90">
              A world where every worker's contribution is recognized, verified, and valued. Where opportunities are accessible to all, regardless of background or current status.
            </p>
            <p className="text-lg opacity-80">
              We envision a future where digital identity empowers workers to build sustainable careers, access better opportunities, and contribute meaningfully to the global economy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
