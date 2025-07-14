import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Building2, FileText, MapPin, Phone, Mail, User, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CompanyRegistration() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    registrationNumber: "",
    industry: "",
    address: "",
    contactPersonName: "",
    phoneNumber: "",
    email: ""
  });

  const handleInputChange = (field, value) => {

    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Company Registration Successful!",
      description: "Welcome to NayiPehchaan! You can now start verifying workers.",
    });
    navigate('/dashboard/company');
  };

  const industries = [
    "Construction",
    "Manufacturing",
    "Logistics & Transportation",
    "Food & Hospitality",
    "Retail",
    "IT Services",
    "Healthcare",
    "Education",
    "Agriculture",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl font-bold text-primary">Register Your Company</h1>
            <p className="text-muted-foreground">
              Join our network of trusted companies and start verifying worker credentials
            </p>
          </div>

          <Card className="shadow-card-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <span>Company Information</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4" />
                      <span>Company Name</span>
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber" className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Registration Number</span>
                    </Label>
                    <Input
                      id="registrationNumber"
                      placeholder="Company registration no."
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4" />
                    <span>Industry</span>
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Company Address</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="Complete business address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Contact Person Details</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactPersonName" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Contact Person Name</span>
                      </Label>
                      <Input
                        id="contactPersonName"
                        placeholder="Full name of contact person"
                        value={formData.contactPersonName}
                        onChange={(e) => handleInputChange('contactPersonName', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Phone Number</span>
                        </Label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>Email Address</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="company@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> By registering, you agree to verify worker credentials honestly 
                    and maintain the integrity of the platform. False verifications may result in account suspension.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-hero-gradient">
                  Register Company
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}