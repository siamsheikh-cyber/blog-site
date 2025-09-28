import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Search, SunIcon } from "lucide-react";
import { ModeToggle } from "../darkmode/mode-toggle";

const Navbar02Page = () => {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">

          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />


          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden  rounded-3xl sm:inline-flex">
              Sign In
            </Button>
            <Button className=" rounded-full " size="icon">
              <Search />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <ModeToggle />
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav >
    </div >
  );
};

export default Navbar02Page;
