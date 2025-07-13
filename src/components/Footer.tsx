import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NP</span>
              </div>
              <h3 className="text-lg font-bold text-primary">NayiPehchaan</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering gig workers with verified digital identity and work history.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">For Workers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For Companies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Verification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 NayiPehchaan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for workers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}