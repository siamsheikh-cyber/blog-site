import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Search, SunIcon } from "lucide-react";
import { ModeToggle } from "../darkmode/mode-toggle";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Input } from "../ui/input";



const Navbar02Page = () => {
  return (
    <div className=" bg-muted">
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
              <AlertDialog>
                <AlertDialogTrigger className="flex items-center justify-center cursor-pointer"><Search className="cursor-pointer" /></AlertDialogTrigger>

                <AlertDialogContent className="w-[400px] px-3">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Search in blog</AlertDialogTitle>
                    <AlertDialogDescription>

                      <Input placeholder="Search here...."></Input>

                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <div className="flex flex-row mr-auto gap-3">
                      <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                      <AlertDialogAction className="cursor-pointer">Search</AlertDialogAction>
                    </div>
                  </AlertDialogFooter>

                </AlertDialogContent>

              </AlertDialog>
              {/* <Search /> */}
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
