import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Trophy, 
  MapPin, 
  Clock, 
  CheckCircle, 
  User,
  Mail,
  Phone,
  GraduationCap
} from "lucide-react";
import Header from "@/components/Header";

// Import images
import techImage from "@/assets/ideathon-tech.jpg";
import aiImage from "@/assets/ideathon-ai.jpg";
import greenImage from "@/assets/ideathon-green.jpg";
import healthImage from "@/assets/ideathon-health.jpg";

// Mock detailed data
const ideathonData = {
  "1": {
    id: "1",
    title: "AI-Powered Healthcare Solutions",
    description: "Build innovative AI solutions to revolutionize healthcare delivery and patient care experiences.",
    longDescription: "Join us in creating the next generation of AI-powered healthcare solutions that will transform how we deliver medical care. This ideathon focuses on developing intelligent systems that can improve patient outcomes, streamline healthcare workflows, and make medical services more accessible to underserved populations. Participants will work on challenges ranging from diagnostic AI tools to patient management systems, telemedicine platforms, and predictive healthcare analytics.",
    image: aiImage,
    institute: "MIT Tech Labs",
    instituteLocation: "Cambridge, MA",
    deadline: "Dec 15, 2024",
    startDate: "Dec 1, 2024",
    duration: "48 hours",
    participants: 234,
    maxParticipants: 500,
    prize: "$10,000",
    category: "Healthcare",
    difficulty: "Advanced",
    requirements: [
      "Experience with machine learning frameworks (TensorFlow, PyTorch)",
      "Knowledge of healthcare data standards (FHIR, HL7)",
      "Background in software development",
      "Team of 2-4 members"
    ],
    agenda: [
      { time: "9:00 AM", activity: "Registration & Welcome", day: "Day 1" },
      { time: "10:00 AM", activity: "Problem Statement Presentation", day: "Day 1" },
      { time: "11:00 AM", activity: "Team Formation & Brainstorming", day: "Day 1" },
      { time: "12:00 PM", activity: "Lunch & Networking", day: "Day 1" },
      { time: "1:00 PM", activity: "Development Phase Begins", day: "Day 1" },
      { time: "9:00 AM", activity: "Mentor Check-ins", day: "Day 2" },
      { time: "2:00 PM", activity: "Final Presentations", day: "Day 2" },
      { time: "4:00 PM", activity: "Judging & Awards Ceremony", day: "Day 2" }
    ],
    judges: [
      { name: "Dr. Sarah Chen", role: "AI Research Director at Google Health", image: "" },
      { name: "Prof. Michael Rodriguez", role: "Healthcare Innovation, Stanford", image: "" },
      { name: "Lisa Thompson", role: "VP of Product, Teladoc", image: "" }
    ],
    sponsors: ["Google Health", "Microsoft Azure", "NVIDIA", "Teladoc Health"]
  },
  "2": {
    id: "2",
    title: "Sustainable Energy Innovation",
    description: "Create breakthrough technologies for renewable energy and sustainable living solutions.",
    longDescription: "Be part of the global movement towards sustainable energy solutions. This ideathon challenges participants to develop innovative technologies that can accelerate the adoption of renewable energy sources, improve energy efficiency, and create sustainable living solutions. Focus areas include solar technology optimization, smart grid systems, energy storage solutions, and sustainable urban planning. Work with industry experts to create solutions that can make a real impact on climate change.",
    image: greenImage,
    institute: "Stanford Green Lab",
    instituteLocation: "Stanford, CA",
    deadline: "Jan 20, 2025",
    startDate: "Jan 5, 2025",
    duration: "72 hours",
    participants: 156,
    maxParticipants: 300,
    prize: "$15,000",
    category: "Sustainability",
    difficulty: "Intermediate",
    requirements: [
      "Background in engineering, environmental science, or related field",
      "Knowledge of renewable energy systems",
      "Experience with IoT and data analytics preferred",
      "Team of 3-5 members"
    ],
    agenda: [
      { time: "8:00 AM", activity: "Registration & Breakfast", day: "Day 1" },
      { time: "9:30 AM", activity: "Keynote: Future of Sustainable Energy", day: "Day 1" },
      { time: "11:00 AM", activity: "Challenge Briefing & Team Formation", day: "Day 1" },
      { time: "1:00 PM", activity: "Lunch & Mentor Introductions", day: "Day 1" },
      { time: "2:30 PM", activity: "Ideation & Prototyping Begins", day: "Day 1" },
      { time: "10:00 AM", activity: "Progress Check-in & Workshops", day: "Day 2" },
      { time: "3:00 PM", activity: "Prototype Refinement", day: "Day 2" },
      { time: "11:00 AM", activity: "Final Presentations", day: "Day 3" },
      { time: "2:00 PM", activity: "Awards & Closing Ceremony", day: "Day 3" }
    ],
    judges: [
      { name: "Dr. Emma Wilson", role: "Clean Energy Researcher, Tesla", image: "" },
      { name: "Prof. David Kim", role: "Sustainable Technology, Stanford", image: "" },
      { name: "Alex Turner", role: "Head of Innovation, Sunrun", image: "" }
    ],
    sponsors: ["Tesla", "Sunrun", "First Solar", "Stanford Energy"]
  },
  "3": {
    id: "3",
    title: "Next-Gen EdTech Platform",
    description: "Design the future of online learning with cutting-edge educational technology.",
    longDescription: "Transform education through innovative technology solutions. This ideathon focuses on creating the next generation of educational platforms that make learning more accessible, engaging, and effective. Participants will work on challenges including personalized learning algorithms, virtual reality educational experiences, gamification of learning, assessment automation, and inclusive design for diverse learners. Partner with educators and technologists to build solutions that can scale globally.",
    image: techImage,
    institute: "Harvard Innovation Hub",
    instituteLocation: "Cambridge, MA",
    deadline: "Nov 30, 2024",
    startDate: "Nov 15, 2024",
    duration: "48 hours",
    participants: 189,
    maxParticipants: 400,
    prize: "$8,000",
    category: "Education",
    difficulty: "Beginner",
    requirements: [
      "Interest in education technology",
      "Basic programming knowledge helpful but not required",
      "Understanding of user experience design",
      "Team of 2-4 members"
    ],
    agenda: [
      { time: "9:00 AM", activity: "Welcome & Registration", day: "Day 1" },
      { time: "10:00 AM", activity: "Education Technology Trends Keynote", day: "Day 1" },
      { time: "11:30 AM", activity: "Problem Statements & Team Building", day: "Day 1" },
      { time: "1:00 PM", activity: "Lunch & Networking", day: "Day 1" },
      { time: "2:00 PM", activity: "Ideation Workshops", day: "Day 1" },
      { time: "4:00 PM", activity: "Development Begins", day: "Day 1" },
      { time: "9:00 AM", activity: "Morning Stand-ups", day: "Day 2" },
      { time: "11:00 AM", activity: "Mid-point Presentations", day: "Day 2" },
      { time: "1:00 PM", activity: "Final Development Sprint", day: "Day 2" },
      { time: "4:00 PM", activity: "Final Pitches & Judging", day: "Day 2" }
    ],
    judges: [
      { name: "Prof. Jennifer Walsh", role: "Education Technology, Harvard", image: "" },
      { name: "Mark Stevens", role: "Product Director, Khan Academy", image: "" },
      { name: "Dr. Rosa Martinez", role: "Learning Sciences, MIT", image: "" }
    ],
    sponsors: ["Khan Academy", "Coursera", "Google for Education", "Microsoft Education"]
  },
  "4": {
    id: "4",
    title: "Digital Health Monitoring",
    description: "Develop smart solutions for continuous health monitoring and preventive care.",
    longDescription: "Create the future of preventive healthcare through innovative digital monitoring solutions. This ideathon focuses on developing wearable technologies, mobile health applications, and IoT-based monitoring systems that can track vital signs, predict health issues, and provide personalized health recommendations. Participants will work with medical professionals to ensure solutions are clinically relevant and user-friendly for patients of all ages.",
    image: healthImage,
    institute: "Johns Hopkins Med",
    instituteLocation: "Baltimore, MD",
    deadline: "Feb 14, 2025",
    startDate: "Jan 30, 2025",
    duration: "60 hours",
    participants: 312,
    maxParticipants: 450,
    prize: "$12,000",
    category: "Healthcare",
    difficulty: "Intermediate",
    requirements: [
      "Background in healthcare, engineering, or computer science",
      "Knowledge of medical devices or health informatics",
      "Experience with sensor technologies preferred",
      "Team of 3-4 members"
    ],
    agenda: [
      { time: "8:30 AM", activity: "Registration & Medical Ethics Briefing", day: "Day 1" },
      { time: "10:00 AM", activity: "Digital Health Landscape Overview", day: "Day 1" },
      { time: "11:30 AM", activity: "Challenge Presentation & Team Formation", day: "Day 1" },
      { time: "1:00 PM", activity: "Lunch with Medical Professionals", day: "Day 1" },
      { time: "2:30 PM", activity: "Prototype Development Begins", day: "Day 1" },
      { time: "9:00 AM", activity: "Clinical Validation Workshop", day: "Day 2" },
      { time: "12:00 PM", activity: "Progress Presentations", day: "Day 2" },
      { time: "2:00 PM", activity: "Regulatory Compliance Session", day: "Day 2" },
      { time: "10:00 AM", activity: "Final Testing & Validation", day: "Day 3" },
      { time: "2:00 PM", activity: "Clinical Panel Presentations", day: "Day 3" },
      { time: "4:30 PM", activity: "Awards & Next Steps", day: "Day 3" }
    ],
    judges: [
      { name: "Dr. Patricia Lee", role: "Chief Medical Officer, Johns Hopkins", image: "" },
      { name: "Prof. James Wilson", role: "Biomedical Engineering, JHU", image: "" },
      { name: "Sarah Johnson", role: "VP Health Tech, Philips Healthcare", image: "" }
    ],
    sponsors: ["Johns Hopkins Medicine", "Philips Healthcare", "Fitbit", "Medtronic"]
  },
  "5": {
    id: "5",
    title: "Smart City Infrastructure",
    description: "Build intelligent systems for urban planning and smart city development.",
    longDescription: "Shape the cities of tomorrow through innovative smart infrastructure solutions. This ideathon challenges participants to develop IoT-based systems, data analytics platforms, and intelligent automation solutions that can improve urban living. Focus areas include traffic optimization, waste management, energy distribution, public safety systems, and citizen engagement platforms. Work with city planners and government officials to create solutions that can be implemented in real urban environments.",
    image: techImage,
    institute: "UC Berkeley Labs",
    instituteLocation: "Berkeley, CA",
    deadline: "Mar 10, 2025",
    startDate: "Feb 22, 2025",
    duration: "72 hours",
    participants: 198,
    maxParticipants: 350,
    prize: "$20,000",
    category: "Smart Cities",
    difficulty: "Advanced",
    requirements: [
      "Experience with IoT systems and data analytics",
      "Knowledge of urban planning principles",
      "Background in computer science or engineering",
      "Team of 4-5 members"
    ],
    agenda: [
      { time: "9:00 AM", activity: "Welcome & City Challenge Overview", day: "Day 1" },
      { time: "10:30 AM", activity: "Smart City Case Studies", day: "Day 1" },
      { time: "12:00 PM", activity: "Lunch & Government Partner Introductions", day: "Day 1" },
      { time: "1:30 PM", activity: "Team Formation & Problem Selection", day: "Day 1" },
      { time: "3:00 PM", activity: "Data Access & Development Setup", day: "Day 1" },
      { time: "9:00 AM", activity: "Progress Check with City Officials", day: "Day 2" },
      { time: "2:00 PM", activity: "Technology Integration Workshop", day: "Day 2" },
      { time: "5:00 PM", activity: "Evening Prototype Testing", day: "Day 2" },
      { time: "10:00 AM", activity: "Solution Refinement", day: "Day 3" },
      { time: "1:00 PM", activity: "Final Presentations to City Panel", day: "Day 3" },
      { time: "3:30 PM", activity: "Implementation Discussion & Awards", day: "Day 3" }
    ],
    judges: [
      { name: "Dr. Robert Chen", role: "Urban Planning, UC Berkeley", image: "" },
      { name: "Maria Gonzalez", role: "Chief Technology Officer, Oakland", image: "" },
      { name: "Prof. Alan Kumar", role: "Smart Systems, Berkeley Lab", image: "" }
    ],
    sponsors: ["City of Oakland", "Cisco", "IBM Smart Cities", "UC Berkeley"]
  }
};

const IdeathonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isJoining, setIsJoining] = useState(false);
  const [joinFormData, setJoinFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    experience: "",
    motivation: "",
    teamMembers: ""
  });

  // Get ideathon data (in real app, this would come from API)
  const ideathon = ideathonData[id as keyof typeof ideathonData] || ideathonData["1"];

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoining(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Successfully Joined!",
      description: `You've been registered for ${ideathon.title}. Check your email for confirmation details.`,
    });
    
    setIsJoining(false);
    // Reset form or close dialog
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Ideathons
        </Button>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <img 
            src={ideathon.image} 
            alt={ideathon.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-3 mb-3">
              <Badge className={getDifficultyColor(ideathon.difficulty)}>
                {ideathon.difficulty}
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                {ideathon.category}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{ideathon.title}</h1>
            <p className="text-lg text-white/90">{ideathon.institute}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Ideathon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {ideathon.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {ideathon.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ideathon.agenda.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                      <div className="text-sm font-medium text-primary min-w-[80px]">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.activity}</div>
                        <div className="text-xs text-muted-foreground">{item.day}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Judges */}
            <Card>
              <CardHeader>
                <CardTitle>Meet the Judges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ideathon.judges.map((judge, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{judge.name}</div>
                        <div className="text-sm text-muted-foreground">{judge.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Join This Ideathon</span>
                  <Trophy className="h-5 w-5 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-primary">{ideathon.prize}</div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Deadline: {ideathon.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Duration: {ideathon.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{ideathon.participants}/{ideathon.maxParticipants} participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{ideathon.instituteLocation}</span>
                  </div>
                </div>

                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(ideathon.participants / ideathon.maxParticipants) * 100}%` 
                    }}
                  />
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Join Ideathon
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Join {ideathon.title}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleJoinSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            required
                            value={joinFormData.fullName}
                            onChange={(e) => setJoinFormData(prev => ({ ...prev, fullName: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={joinFormData.email}
                            onChange={(e) => setJoinFormData(prev => ({ ...prev, email: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={joinFormData.phone}
                            onChange={(e) => setJoinFormData(prev => ({ ...prev, phone: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution *</Label>
                          <Input
                            id="institution"
                            required
                            value={joinFormData.institution}
                            onChange={(e) => setJoinFormData(prev => ({ ...prev, institution: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Relevant Experience *</Label>
                        <Textarea
                          id="experience"
                          required
                          placeholder="Describe your relevant technical skills and experience..."
                          value={joinFormData.experience}
                          onChange={(e) => setJoinFormData(prev => ({ ...prev, experience: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to join? *</Label>
                        <Textarea
                          id="motivation"
                          required
                          placeholder="Tell us what motivates you to participate in this ideathon..."
                          value={joinFormData.motivation}
                          onChange={(e) => setJoinFormData(prev => ({ ...prev, motivation: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="teamMembers">Team Members (Optional)</Label>
                        <Textarea
                          id="teamMembers"
                          placeholder="List your team members and their roles (if you already have a team)..."
                          value={joinFormData.teamMembers}
                          onChange={(e) => setJoinFormData(prev => ({ ...prev, teamMembers: e.target.value }))}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary hover:opacity-90"
                        disabled={isJoining}
                      >
                        {isJoining ? "Joining..." : "Submit Application"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Sponsors */}
            <Card>
              <CardHeader>
                <CardTitle>Sponsors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {ideathon.sponsors.map((sponsor, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/50 text-center text-sm font-medium">
                      {sponsor}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeathonDetails;