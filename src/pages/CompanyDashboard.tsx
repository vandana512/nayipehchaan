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
  Search, 
  Plus, 
  Users, 
  CheckCircle, 
  Clock, 
  Building2, 
  FileText,
  User,
  Phone,
  MapPin,
  Calendar,
  Eye,
  UserCheck,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CompanyDashboard() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    workerId: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  const workers = [
    {
      id: "NP001234",
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      location: "Delhi, India",
      totalExperience: "2 years",
      verifiedJobs: 1,
      pendingVerifications: 1,
      lastActive: "2 days ago",
      certificates: ["Construction Safety", "Civil Engineering Diploma"]
    },
    {
      id: "NP001235", 
      name: "Priya Sharma",
      phone: "+91 87654 32109",
      location: "Mumbai, India",
      totalExperience: "3 years",
      verifiedJobs: 2,
      pendingVerifications: 0,
      lastActive: "1 day ago",
      certificates: ["Project Management", "Quality Control"]
    }
  ];

  const pendingVerifications = [
    {
      id: 1,
      workerId: "NP001234",
      workerName: "Rajesh Kumar",
      jobTitle: "Junior Engineer",
      company: "BuildRight Corp",
      duration: "Mar 2022 - Dec 2022",
      description: "Assisted in project planning and execution of residential buildings",
      submittedDate: "2024-01-15"
    }
  ];

  const handleVerifyWork = (verificationId: number, action: 'approve' | 'reject') => {
    toast({
      title: action === 'approve' ? "Work Experience Verified!" : "Verification Rejected",
      description: action === 'approve' 
        ? "The worker's experience has been successfully verified." 
        : "The verification request has been rejected.",
    });
  };

  const handleAddEmployee = () => {
    toast({
      title: "Employee Experience Added!",
      description: "Work experience has been added to the worker's profile.",
    });
    setIsAddEmployeeOpen(false);
    setNewEmployee({
      workerId: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: ""
    });
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Company Header */}
        <div className="mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-primary">Metro Construction Ltd.</h1>
                  <p className="text-muted-foreground">Construction & Infrastructure</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <span>Reg: CIN123456789</span>
                    <span>•</span>
                    <span>Delhi, India</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{workers.length}</div>
                    <div className="text-sm text-muted-foreground">Registered Workers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{pendingVerifications.length}</div>
                    <div className="text-sm text-muted-foreground">Pending Verifications</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Workers Management */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Registered Workers</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      placeholder="Search workers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 w-64"
                    />
                  </div>
                  <Dialog open={isAddEmployeeOpen} onOpenChange={setIsAddEmployeeOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Experience
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Add Worker Experience</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="workerId">Worker ID</Label>
                          <Input
                            id="workerId"
                            placeholder="Enter worker ID (e.g., NP001234)"
                            value={newEmployee.workerId}
                            onChange={(e) => setNewEmployee(prev => ({ ...prev, workerId: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle">Job Title</Label>
                          <Input
                            id="jobTitle"
                            placeholder="Enter job title"
                            value={newEmployee.jobTitle}
                            onChange={(e) => setNewEmployee(prev => ({ ...prev, jobTitle: e.target.value }))}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-2">
                            <Label htmlFor="startDate">Start Date</Label>
                            <Input
                              id="startDate"
                              type="date"
                              value={newEmployee.startDate}
                              onChange={(e) => setNewEmployee(prev => ({ ...prev, startDate: e.target.value }))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="endDate">End Date</Label>
                            <Input
                              id="endDate"
                              type="date"
                              value={newEmployee.endDate}
                              onChange={(e) => setNewEmployee(prev => ({ ...prev, endDate: e.target.value }))}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Job Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe the worker's responsibilities..."
                            value={newEmployee.description}
                            onChange={(e) => setNewEmployee(prev => ({ ...prev, description: e.target.value }))}
                          />
                        </div>
                        <Button onClick={handleAddEmployee} className="w-full">
                          Add Experience Record
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredWorkers.map((worker) => (
                  <div key={worker.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary">{worker.name}</h3>
                            <p className="text-sm text-muted-foreground">ID: {worker.id}</p>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span>{worker.phone}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{worker.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Profile
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                      <div className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-semibold text-primary">{worker.totalExperience}</div>
                        <div className="text-muted-foreground">Experience</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-semibold text-success">{worker.verifiedJobs}</div>
                        <div className="text-muted-foreground">Verified</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-semibold text-orange-500">{worker.pendingVerifications}</div>
                        <div className="text-muted-foreground">Pending</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-semibold">{worker.certificates.length}</div>
                        <div className="text-muted-foreground">Certificates</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Verifications */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Pending Verifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingVerifications.map((verification) => (
                  <div key={verification.id} className="border rounded-lg p-3 space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">{verification.jobTitle}</h4>
                      <p className="text-xs text-muted-foreground">
                        Worker: {verification.workerName} ({verification.workerId})
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{verification.duration}</span>
                      </p>
                      <p className="text-xs">{verification.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-success hover:bg-success/90"
                        onClick={() => handleVerifyWork(verification.id, 'approve')}
                      >
                        <UserCheck className="w-3 h-3 mr-1" />
                        Verify
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleVerifyWork(verification.id, 'reject')}
                      >
                        <X className="w-3 h-3 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Bulk Verification
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="w-4 h-4 mr-2" />
                  Company Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}