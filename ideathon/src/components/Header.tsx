import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        {/* Left Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="PitchHaven Logo"
            className="w-10 h-10 rounded-xl"
          />
          <h2 className="text-2xl font-bold">
            Pitch-<span className="text-primary">Haven</span>
          </h2>
        </Link>

        {/* Middle Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-black">
          <Link to="#" className="text-sm font-medium transition-colors hover:text-primary">
            Discover
          </Link>
          <Link to="#" className="text-sm font-medium transition-colors hover:text-primary">
            Host Ideathon
          </Link>
          <Link to="#" className="text-sm font-medium transition-colors hover:text-primary">
            My Projects
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>

          <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90">
            Join Now
          </Button>

          <Avatar className="size-9 hidden md:block">
            <AvatarImage src="/user.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
