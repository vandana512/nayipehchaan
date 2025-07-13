import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UserPlus, Building2 } from "lucide-react";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">NP</span>
          </div>
          <h1 className="text-xl font-bold text-primary">NayiPehchaan</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => navigate('/register/worker')} className="hidden sm:flex">
            <UserPlus className="w-4 h-4 mr-2" />
            Worker Login
          </Button>
          <Button onClick={() => navigate('/register/company')}>
            <Building2 className="w-4 h-4 mr-2" />
            Company Login
          </Button>
        </div>
      </div>
    </header>
  );
}