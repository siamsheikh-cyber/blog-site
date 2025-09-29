import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    BadgeDollarSign,
    Bike,
    BookHeart,
    BriefcaseBusiness,
    Calendar,
    ChevronRight,
    ClockIcon,
    Cpu,
    FlaskRound,
    HeartPulse,
    Scale,
} from "lucide-react";

import { Button } from "../ui/button";


const categories = [
    {
        name: "Technology",
        totalPosts: 10,
        icon: Cpu,
    },
    {
        name: "Business",
        totalPosts: 5,
        icon: BriefcaseBusiness,
    },
    {
        name: "Finance",
        totalPosts: 8,
        icon: BadgeDollarSign,
    },
    {
        name: "Health",
        totalPosts: 12,
        icon: HeartPulse,
    },
    {
        name: "Lifestyle",
        totalPosts: 15,
        icon: BookHeart,
    },
    {
        name: "Politics",
        totalPosts: 20,
        icon: Scale,
    },
    {
        name: "Science",
        totalPosts: 25,
        icon: FlaskRound,
    },
    {
        name: "Sports",
        totalPosts: 30,
        icon: Bike,
    },
];

const Blog03Page = () => {
    return (
        <div className="max-w-(--breakpoint-xl) mx-auto py-10 lg:py-16 px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-12">
            {/* Blogs */}
            <div className="flex-1">
                <h2 className="fire-text text-2xl py-3 px-5 font-bold relative inline-block">
                    Our Blogs
                </h2>
                {/* <h2 className="text-2xl py-3 px-5 font-extrabold our-blogs-fire-text">
                    Our Blogs
                </h2> */}


                {/* এখানে grid ব্যবহার করেছি height এক রাখার জন্য */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <Card
                            key={i}
                            className="flex flex-col h-full shadow-sm overflow-hidden rounded-lg border"
                        >
                            {/* Image section */}
                            <div className="aspect-video bg-muted rounded-t-lg" />

                            {/* Content section */}
                            <CardContent className="flex flex-col flex-1 p-6">
                                <div className="mt-auto flex items-center gap-6 text-muted-foreground text-sm font-medium pt-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        <ClockIcon className="h-4 w-4" /> 5 min read
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Calendar className="h-4 w-4" /> Nov 20, 2024
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold tracking-tight">
                                    A beginner&apos;s guide to blockchain for engineers
                                </h3>
                                <div>
                                    <Button
                                        size="sm"
                                        className="mt-6 shadow-none group transition-all"
                                        variant="outline"
                                    >
                                        Read more{" "}
                                        <ChevronRight className="ml-1 h-4 w-4 transition-all group-hover:ml-3" />
                                    </Button>

                                </div>



                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            {/* Sidebar */}
            <aside className="sticky top-8 shrink-0 lg:w-64 md:w-56 sm:w-48 w-full">
                <h3 className="text-xl font-semibold tracking-tight">Categories</h3>
                <div className="mt-4 flex flex-col gap-2">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="flex items-center justify-between gap-2 bg-muted px-3 py-2 rounded-md bg-opacity-15 dark:bg-opacity-25"
                        >
                            <div className="flex items-center gap-2">
                                <category.icon className="h-5 w-5" />
                                <span className="font-medium">{category.name}</span>
                            </div>
                            <Badge className="px-1.5 rounded-full bg-foreground/7 text-foreground">
                                {category.totalPosts}
                            </Badge>
                        </div>
                    ))}
                </div>
            </aside>

        </div>
    );
};

export default Blog03Page;
