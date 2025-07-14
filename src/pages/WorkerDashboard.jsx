import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  User, Plus, FileText, Calendar, Building2, Award, Upload,
  MapPin, Phone, CheckCircle, Clock, Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";


export default function WorkerDashboard() {
  const { toast } = useToast();
  const [isAddExperienceOpen, setIsAddExperienceOpen] = useState(false);
  const [newExperience, setNewExperience] = useState<ExperienceForm>({
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    description: "",
    certificate: null
  });

  // TODO: Add UI for experience form dialog and experience list
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome, Worker</h1>
        {/* Add experience button and dialog goes here */}
        {/* List of experiences goes here */}
      </div>
      <Footer />
    </div>
  );
}



  const workHistory = [
    {
      id: 1,
      companyName: "Metro Construction Ltd.",
      jobTitle: "Site Engineer",
      duration: "Jan 2023 - Dec 2023",
      status: "verified",
      description: "Supervised construction activities, quality control, and safety compliance"
    },
    {
      id: 2,
      companyName: "BuildRight Corp",
      jobTitle: "Junior Engineer",
      duration: "Mar 2022 - Dec 2022",
      status: "pending",
      description: "Assisted in project planning and execution of residential buildings"
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Construction Safety Certificate",
      issuer: "National Safety Council",
      date: "Dec 2023",
      type: "PDF"
    },
    {
      id: 2,
      name: "Civil Engineering Diploma",
      issuer: "Technical Institute",
      date: "May 2021", 
      type: "PDF"
    }
  ];

  const handleAddExperience = () => {
    toast({
      title: "Experience Added Successfully!",
      description: "Your work experience has been submitted for verification.",
    });
    setIsAddExperienceOpen(false);
    setNewExperience({
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: "",
      certificate: null
    });


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-primary">Rajesh Kumar</h1>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Delhi, India</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified Profile
                    </Badge>
                    <Badge variant="outline">ID: NP001234</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work History */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span>My Work History</span>
                </CardTitle>
                <Dialog open={isAddExperienceOpen} onOpenChange={setIsAddExperienceOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Experience
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add New Work Experience</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          placeholder="Enter company name"
                          value={newExperience.companyName}
                          onChange={(e) => setNewExperience(prev => ({ ...prev, companyName: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input
                          id="jobTitle"
                          placeholder="Enter job title"
                          value={newExperience.jobTitle}
                          onChange={(e) => setNewExperience(prev => ({ ...prev, jobTitle: e.target.value }))}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor="startDate">Start Date</Label>
                          <Input
                            id="startDate"
                            type="date"
                            value={newExperience.startDate}
                            onChange={(e) => setNewExperience(prev => ({ ...prev, startDate: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate">End Date</Label>
                          <Input
                            id="endDate"
                            type="date"
                            value={newExperience.endDate}
                            onChange={(e) => setNewExperience(prev => ({ ...prev, endDate: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Job Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your responsibilities..."
                          value={newExperience.description}
                          onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Supporting Document (Optional)</Label>
                        <div className="border-2 border-dashed border-muted rounded-lg p-4 text-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Upload experience letter or certificate</p>
                          <input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => setNewExperience(prev => ({ ...prev, certificate: e.target.files?.[0] || null }))}
                            className="hidden"
                            id="certificate-upload"
                          />
                          <Label htmlFor="certificate-upload">
                            <Button type="button" variant="outline" size="sm" asChild className="mt-2">
                              <span>Choose File</span>
                            </Button>
                          </Label>
                        </div>
                      </div>
                      <Button onClick={handleAddExperience} className="w-full">
                        Add Experience
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="space-y-4">
                {workHistory.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-primary">{job.jobTitle}</h3>
                        <p className="text-muted-foreground flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{job.companyName}</span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.duration}</span>
                        </p>
                      </div>
                      <Badge 
                        variant={job.status === 'verified' ? 'default' : 'secondary'}
                        className={job.status === 'verified' ? 'bg-success text-success-foreground' : ''}
                      >
                        {job.status === 'verified' ? (
                          <><CheckCircle className="w-3 h-3 mr-1" /> Verified</>
                        ) : (
                          <><Clock className="w-3 h-3 mr-1" /> Pending</>
                        )}
                      </Badge>
                    </div>
                    <p className="text-sm">{job.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Profile Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Experience</span>
                  <span className="font-semibold">2 Jobs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Verified Records</span>
                  <span className="font-semibold text-success">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Certificates</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Profile Completion</span>
                  <span className="font-semibold text-primary">85%</span>
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Certificates</span>
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium text-sm">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
  }