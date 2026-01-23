import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, CheckCircle } from "lucide-react";

interface WatchOnDemandFormProps {
  moduleName: string;
  moduleNumber: string;
  youtubeUrl: string;
  duration?: string;
}

const WatchOnDemandForm = ({ moduleName, moduleNumber, youtubeUrl, duration = "~45 minutes" }: WatchOnDemandFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: ""
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessDialog(true);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-[#0C4594] to-[#1a5cb8] p-6">
          <h3 className="text-xl font-bold text-white">Watch On Demand</h3>
          <p className="text-white/80 text-sm mt-1">Fill the form to access the recording</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="bg-[#38B6FF]/10 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-[#0C4594]">{moduleNumber}:</strong> {moduleName}
            </p>
            <p className="text-xs text-gray-500 mt-2">Duration: {duration}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Name (First Name, Last Name) <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="name" 
              placeholder="Enter your full name" 
              className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Business Email <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your business email" 
              className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website" className="text-gray-700">
              Company Website <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="website" 
              placeholder="https://yourcompany.com" 
              className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
              required
              value={formData.website}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Phone Number
            </Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number" 
              className="border-gray-300 focus:border-[#38B6FF] focus:ring-[#38B6FF]"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:shadow-lg text-white font-semibold py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Get Access Now"}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </div>

      {/* Success Dialog with YouTube Link */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#0C4594]">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Access Granted!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-gray-700">
              Thank you for your interest! Click the button below to watch the recording.
            </p>
            <div className="bg-[#38B6FF]/10 rounded-lg p-4">
              <p className="text-sm text-gray-700 font-medium">
                {moduleNumber}: {moduleName}
              </p>
            </div>
            <a 
              href={youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full bg-gradient-to-r from-[#38B6FF] to-[#0C4594] hover:shadow-lg text-white font-semibold py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch on YouTube
              </Button>
            </a>
            <p className="text-xs text-gray-500 text-center">
              Opens in a new tab
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WatchOnDemandForm;
