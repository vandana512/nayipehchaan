import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  UserRound, 
  Calendar, 
  MapPin, 
  Phone, 
  CreditCard, 
  Camera,
  ArrowRight,
  ArrowLeft,
  Upload,
  CheckCircle2
} from "lucide-react";

export default function WorkerRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    phoneNumber: '',
    aadharNumber: '',
    profilePhoto: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/dashboard/worker');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserRound className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">Personal Information</h2>
              <p className="text-muted-foreground">Tell us about yourself</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <UserRound className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="rounded-full"
                />
              </div>

              <div>
                <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date of Birth
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="rounded-full"
                />
              </div>

              <div>
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Address
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="rounded-full"
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">Identity Verification</h2>
              <p className="text-muted-foreground">Secure your digital identity</p>
            </div>

            <div>
              <Label htmlFor="aadharNumber" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Aadhar Card Number
              </Label>
              <Input
                id="aadharNumber"
                type="text"
                placeholder="Enter your 12-digit Aadhar number"
                value={formData.aadharNumber}
                onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                className="rounded-full"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Your Aadhar number is encrypted and stored securely
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">Profile Photo</h2>
              <p className="text-muted-foreground">Add a professional photo</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-muted-foreground/50">
                {formData.profilePhoto ? (
                  <img
                    src={URL.createObjectURL(formData.profilePhoto)}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <Upload className="w-8 h-8 text-muted-foreground" />
                )}
              </div>
              
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputChange('profilePhoto', e.target.files[0])}
                className="hidden"
                id="profilePhoto"
              />
              <Label
                htmlFor="profilePhoto"
                className="cursor-pointer inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                <Camera className="w-4 h-4" />
                Choose Photo
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-2xl shadow-card p-8">
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      stepNumber <= step
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {stepNumber < step ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      stepNumber
                    )}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-16 h-0.5 ml-2 transition-colors ${
                        stepNumber < step ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className="rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {step === 3 ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-hero-gradient hover:opacity-90 text-white rounded-full"
                >
                  Create My Identity
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="rounded-full"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
