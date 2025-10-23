import { useState } from "react";
import { Search, Filter, ArrowRight, Users, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import IdeathonCard from "@/components/IdeathonCard";

// Import generated images
import techImage from "@/assets/ideathon-tech.jpg";
import aiImage from "@/assets/ideathon-ai.jpg";
import greenImage from "@/assets/ideathon-green.jpg";
import healthImage from "@/assets/ideathon-health.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for ideathons
  const ideathons = [
    {
      id: "1",
      title: "AI-Powered Healthcare Solutions",
      description: "Build innovative AI solutions to revolutionize healthcare delivery and patient care experiences.",
      image: aiImage,
      institute: "MIT Tech Labs",
      deadline: "Dec 15, 2024",
      participants: 234,
      prize: "$10,000",
      category: "Healthcare",
      difficulty: "Advanced" as const,
    },
    {
      id: "2", 
      title: "Sustainable Energy Innovation",
      description: "Create breakthrough technologies for renewable energy and sustainable living solutions.",
      image: greenImage,
      institute: "Stanford Green Lab",
      deadline: "Jan 20, 2025",
      participants: 156,
      prize: "$15,000",
      category: "Sustainability",
      difficulty: "Intermediate" as const,
    },
    {
      id: "3",
      title: "Next-Gen EdTech Platform",
      description: "Design the future of online learning with cutting-edge educational technology.",
      image: techImage,
      institute: "Harvard Innovation Hub",
      deadline: "Nov 30, 2024",
      participants: 189,
      prize: "$8,000",
      category: "Education",
      difficulty: "Beginner" as const,
    },
    {
      id: "4",
      title: "Digital Health Monitoring",
      description: "Develop smart solutions for continuous health monitoring and preventive care.",
      image: healthImage,
      institute: "Johns Hopkins Med",
      deadline: "Feb 14, 2025",
      participants: 312,
      prize: "$12,000",
      category: "Healthcare",
      difficulty: "Intermediate" as const,
    },
    {
      id: "5",
      title: "Smart City Infrastructure",
      description: "Build intelligent systems for urban planning and smart city development.",
      image: techImage,
      institute: "UC Berkeley Labs",
      deadline: "Mar 10, 2025",
      participants: 198,
      prize: "$20,000",
      category: "Smart Cities",
      difficulty: "Advanced" as const,
    },
    {
      id: "6",
      title: "Climate Change Solutions",
      description: "Innovative approaches to combat climate change through technology and policy.",
      image: greenImage,
      institute: "Oxford Climate Lab",
      deadline: "Apr 05, 2025",
      participants: 267,
      prize: "$18,000",
      category: "Climate",
      difficulty: "Advanced" as const,
    },
    {
      id: "7",
      title: "Mental Health Tech",
      description: "Digital solutions for mental health support and wellness platforms.",
      image: healthImage,
      institute: "Yale Wellness Center",
      deadline: "Jan 08, 2025",
      participants: 143,
      prize: "$9,000",
      category: "Healthcare",
      difficulty: "Beginner" as const,
    },
    {
      id: "8",
      title: "Blockchain for Good",
      description: "Harness blockchain technology for social impact and transparency initiatives.",
      image: techImage,
      institute: "MIT Blockchain Lab",
      deadline: "Feb 28, 2025",
      participants: 221,
      prize: "$14,000",
      category: "Blockchain",
      difficulty: "Intermediate" as const,
    },
  ];

  const filteredIdeathons = ideathons.filter(ideathon =>
    ideathon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ideathon.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ideathon.institute.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-sm px-4 py-2">
              Join the innovation revolution
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              PITCH YOUR IDEAS,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                CONNECT WITH INNOVATORS
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover cutting-edge ideathons from top institutes worldwide. 
              Build, compete, and transform your ideas into reality.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search ideathons, categories, institutes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
                />
                <Button 
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-primary hover:bg-white/90 h-10 w-10"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">10K+ Participants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span className="text-sm">$500K+ Prizes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">50+ Active Ideathons</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
      </section>

      {/* Filters and Results */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Featured Ideathons
                <span className="text-muted-foreground text-lg ml-2">
                  ({filteredIdeathons.length} results)
                </span>
              </h2>
              <p className="text-muted-foreground">
                Discover innovative challenges from leading institutes worldwide
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <select className="px-3 py-2 border rounded-md text-sm bg-background">
                <option>Sort by: Deadline</option>
                <option>Sort by: Prize Amount</option>
                <option>Sort by: Participants</option>
                <option>Sort by: Recently Added</option>
              </select>
            </div>
          </div>

          {/* Ideathon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIdeathons.map((ideathon) => (
              <IdeathonCard key={ideathon.id} {...ideathon} />
            ))}
          </div>

          {filteredIdeathons.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No ideathons found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16 px-4 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Host Your Own Ideathon?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of institutes already using PitchHaven to discover and nurture the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Host an Ideathon
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

// import { useState } from "react";
// import { Search } from "lucide-react";
// import Header from "@/components/Header";
// import IdeathonCard from "@/components/IdeathonCard";

// // Import generated images
// import techImage from "@/assets/ideathon-tech.jpg";
// import aiImage from "@/assets/ideathon-ai.jpg";
// import greenImage from "@/assets/ideathon-green.jpg";
// import healthImage from "@/assets/ideathon-health.jpg";

// const Index = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Mock data for ideathons
//   const ideathons = [
//     {
//       id: "1",
//       title: "AI-Powered Healthcare Solutions",
//       description:
//         "Build innovative AI solutions to revolutionize healthcare delivery and patient care experiences.",
//       image: aiImage,
//       institute: "MIT Tech Labs",
//       deadline: "Dec 15, 2024",
//       participants: 234,
//       prize: "$10,000",
//       category: "Healthcare",
//       difficulty: "Advanced" as const,
//     },
//     {
//       id: "2",
//       title: "Sustainable Energy Innovation",
//       description:
//         "Create breakthrough technologies for renewable energy and sustainable living solutions.",
//       image: greenImage,
//       institute: "Stanford Green Lab",
//       deadline: "Jan 20, 2025",
//       participants: 156,
//       prize: "$15,000",
//       category: "Sustainability",
//       difficulty: "Intermediate" as const,
//     },
//     {
//       id: "3",
//       title: "Next-Gen EdTech Platform",
//       description:
//         "Design the future of online learning with cutting-edge educational technology.",
//       image: techImage,
//       institute: "Harvard Innovation Hub",
//       deadline: "Nov 30, 2024",
//       participants: 189,
//       prize: "$8,000",
//       category: "Education",
//       difficulty: "Beginner" as const,
//     },
//     {
//       id: "4",
//       title: "Digital Health Monitoring",
//       description:
//         "Develop smart solutions for continuous health monitoring and preventive care.",
//       image: healthImage,
//       institute: "Johns Hopkins Med",
//       deadline: "Feb 14, 2025",
//       participants: 312,
//       prize: "$12,000",
//       category: "Healthcare",
//       difficulty: "Intermediate" as const,
//     },
//     {
//       id: "5",
//       title: "Smart City Infrastructure",
//       description:
//         "Build intelligent systems for urban planning and smart city development.",
//       image: techImage,
//       institute: "UC Berkeley Labs",
//       deadline: "Mar 10, 2025",
//       participants: 198,
//       prize: "$20,000",
//       category: "Smart Cities",
//       difficulty: "Advanced" as const,
//     },
//     {
//       id: "6",
//       title: "Climate Change Solutions",
//       description:
//         "Innovative approaches to combat climate change through technology and policy.",
//       image: greenImage,
//       institute: "Oxford Climate Lab",
//       deadline: "Apr 05, 2025",
//       participants: 267,
//       prize: "$18,000",
//       category: "Climate",
//       difficulty: "Advanced" as const,
//     },
//     {
//       id: "7",
//       title: "Mental Health Tech",
//       description: "Digital solutions for mental health support and wellness platforms.",
//       image: healthImage,
//       institute: "Yale Wellness Center",
//       deadline: "Jan 08, 2025",
//       participants: 143,
//       prize: "$9,000",
//       category: "Healthcare",
//       difficulty: "Beginner" as const,
//     },
//     {
//       id: "8",
//       title: "Blockchain for Good",
//       description:
//         "Harness blockchain technology for social impact and transparency initiatives.",
//       image: techImage,
//       institute: "MIT Blockchain Lab",
//       deadline: "Feb 28, 2025",
//       participants: 221,
//       prize: "$14,000",
//       category: "Blockchain",
//       difficulty: "Intermediate" as const,
//     },
//   ];

//   const filteredIdeathons = ideathons.filter(
//     (ideathon) =>
//       ideathon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       ideathon.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       ideathon.institute.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       {/* Hero Section (screenshot style) */}
//       <section className="flex flex-col items-center justify-center text-center bg-[#7C3AED] py-20 px-6">
//         {/* Main Heading */}
//         <h1 className="text-5xl font-extrabold text-white text-center leading-tight">
//           PITCH YOUR PROJECT
//         </h1>
//         <h2 className="text-5xl font-extrabold text-white text-center leading-tight mt-2">
//           CONNECT WITH INNOVATORS
//         </h2>
//         <p className="text-lg text-white text-center mt-4">
//           Launch Your Vision, Build Your Network, and Scale Your Innovation.
//         </p>

//         {/* Search Bar */}
//         <div className="w-full max-w-2xl">
//           <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg">
//             <Search className="text-gray-500 h-5 w-5 mr-3" />
//             <input
//               type="text"
//               placeholder="Search Startups"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="flex-1 outline-none text-gray-800 placeholder-gray-500 text-base font-medium"
//             />
//             <button className="bg-black text-white rounded-full p-3 hover:bg-gray-800 transition">
//               <Search className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="section_container">
//         <p className="text-30-semibold mb-6">
//           {searchQuery
//             ? `Search Results for: "${searchQuery}"`
//             : `Featured Ideathons`}
//         </p>

//         {filteredIdeathons.length > 0 ? (
//           <ul className="card_grid">
//             {filteredIdeathons.map((ideathon) => (
//               <IdeathonCard key={ideathon.id} {...ideathon} />
//             ))}
//           </ul>
//         ) : (
//           <p className="no-results">No ideathons found</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Index;
