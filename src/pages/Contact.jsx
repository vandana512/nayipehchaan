
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  Clock,
  HeadphonesIcon,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'worker'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      userType: 'worker'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@nayipehchaan.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Mumbai, Maharashtra, India",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Chat Support",
      description: "Always here to help"
    }
  ];

  const faqItems = [
    {
      question: "How do I verify my work experience?",
      answer: "Upload your work certificates and ask your previous employers to verify them through our platform."
    },
    {
      question: "Is my data secure on the blockchain?",
      answer: "Yes, we use advanced encryption and blockchain technology to ensure your data is secure and tamper-proof."
    },
    {
      question: "How much does it cost to use NayiPehchaan?",
      answer: "Basic identity creation is free for workers. Premium features are available at affordable rates."
    },
    {
      question: "Can companies verify my credentials instantly?",
      answer: "Yes, once your credentials are blockchain-verified, employers can verify them instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Get in <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions? Need help? We're here to support you on your journey to verified digital identity.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-card-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-primary font-medium mb-1">{info.details}</p>
              <p className="text-muted-foreground text-sm">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    I am a *
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="worker">Worker/Gig Worker</option>
                    <option value="company">Company/Employer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us more about your question or concern..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-hero-gradient hover:opacity-90 text-white rounded-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Quick answers to common questions about NayiPehchaan.
                </p>
              </div>

              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index} className="p-6 rounded-xl bg-card shadow-card">
                    <div className="flex items-start space-x-3 mb-3">
                      <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center space-x-3 mb-3">
                  <HeadphonesIcon className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-primary">Need More Help?</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Can't find what you're looking for? Our support team is available 24/7 to help you.
                </p>
                <Button variant="outline" className="rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
