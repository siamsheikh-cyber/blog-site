

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router";



const Contact02Page = () => (
    <div className="min-h-screen flex items-center justify-center py-16">
        <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
            <b className="asChild text-black uppercase font-bold text-sm text-center">
                <p>Create Blog</p>
            </b>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-center">
                Make whatever blog you want.
            </h2>



            {/* Form */}
            <Card className="bg-accent shadow-none py-0 w-[600px] mx-auto">
                <CardContent className="p-6 md:p-8">
                    <form>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="col-span-2 sm:col-span-1">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    placeholder="First name"
                                    id="firstName"
                                    className="mt-2 bg-white h-10 shadow-none"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    placeholder="Last name"
                                    id="lastName"
                                    className="mt-2 bg-white h-10 shadow-none"
                                />
                            </div>
                            <div className="col-span-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    className="mt-2 bg-white h-10 shadow-none"
                                />
                            </div>
                            <div className="col-span-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Message"
                                    className="mt-2 bg-white shadow-none"
                                    rows={6}
                                />
                            </div>
                            <div className="col-span-2 flex items-center gap-2">
                                <Checkbox id="acceptTerms" className="bg-background" />
                                <Label htmlFor="acceptTerms" className="gap-0">
                                    You agree to our
                                    <Link to="#" className="underline ml-1">
                                        terms and conditions
                                    </Link>
                                    <span>.</span>
                                </Label>
                            </div>
                        </div>
                        <Button className="mt-6 w-full" size="lg">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </div>

);

export default Contact02Page;
