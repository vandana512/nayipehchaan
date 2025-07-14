import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  User,
  Calendar,
  MapPin,
  Phone,
  CreditCard,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function WorkerRegistration() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    aadharNumber: "",
    profilePhoto: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({ ...prev, profilePhoto: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Your digital identity has been created. Welcome to NayiPehchaan!",
    });
    navigate("/dashboard/worker");
  };

  const isStep1Valid = formData.fullName && formData.dateOfBirth && formData.phoneNumber;
  const isStep2Valid = formData.address && formData.aadharNumber;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl font-bold text-primary">Create Your Worker Profile</h1>
            <p className="text-muted-foreground">
              Join thousands of workers building their verified digital identity
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= s ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-16 h-0.5 ${step > s ? "bg-primary" : "bg-muted"}`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-card-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {step === 1 && (
                  <>
                    <User className="w-5 h-5" />
                    <span>Personal Information</span>
                  </>
                )}
                {step === 2 && (
                  <>
                    <MapPin className="w-5 h-5" />
                    <span>Address & Identity</span>
                  </>
                )}
                {step === 3 && (
                  <>
                    <Upload className="w-5 h-5" />
                    <span>Profile Photo</span>
                  </>
                )}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Full Name</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Date of Birth</span>
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        required
                      />
                    </div>
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
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address" className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>Complete Address</span>
                      </Label>
                      <Input
                        id="address"
                        placeholder="House No., Street, City, State, PIN Code"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aadharNumber" className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4" />
                        <span>Aadhar Card Number</span>
                      </Label>
                      <Input
                        id="aadharNumber"
                        placeholder="XXXX XXXX XXXX"
                        value={formData.aadharNumber}
                        onChange={(e) => handleInputChange("aadharNumber", e.target.value)}
                        maxLength={12}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Your Aadhar number is encrypted and securely stored
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="flex items-center space-x-2">
                        <Upload className="w-4 h-4" />
                        <span>Profile Photo</span>
                      </Label>
                      <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                        {formData.profilePhoto ? (
                          <div className="space-y-2">
                            <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center">
                              <User className="w-12 h-12 text-muted-foreground" />
                            </div>
                            <p className="text-sm">{formData.profilePhoto.name}</p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleFileChange(null)}
                            >
                              Change Photo
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                            <p className="text-muted-foreground">Upload your profile photo</p>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                              className="hidden"
                              id="photo-upload"
                            />
                            <Label htmlFor="photo-upload">
                              <Button type="button" variant="outline" asChild>
                                <span>Choose File</span>
                              </Button>
                            </Label>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step Navigation */}
                <div className="flex justify-between pt-6">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={
                        (step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)
                      }
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-hero-gradient">
                      Create My Identity
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
