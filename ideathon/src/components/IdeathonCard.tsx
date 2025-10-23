import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface IdeathonCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  institute: string;
  deadline: string;
  participants: number;
  prize: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const IdeathonCard = ({
  id,
  title,
  description,
  image,
  institute,
  deadline,
  participants,
  prize,
  category,
  difficulty,
}: IdeathonCardProps) => {
  const navigate = useNavigate();
  
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <Card 
      className="group h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/ideathon/${id}`)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white h-8 w-8"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">{institute}</span>
          </div>
          
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{deadline}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{participants}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-sm font-medium text-primary">
            <Trophy className="h-4 w-4" />
            <span>{prize}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/ideathon/${id}`);
          }}
        >
          Join Ideathon
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IdeathonCard;