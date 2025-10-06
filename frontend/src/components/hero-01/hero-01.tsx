
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";


const Hero02 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter bg-gradient-to-r from-[#12C85B] via-[#6C62FF] to-yellow-500 bg-clip-text text-transparent">
          ইতিহাস, বিজ্ঞান ও মানুষের গল্প
        </h1>
        <p className="mt-6 md:text-lg">
          অতীতের কাহিনি থেকে বর্তমানের অর্জন — এক ছাঁটে বিশ্লেষণ ও অনুপ্রেরণা।
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            className="relative overflow-hidden cursor-pointer mt-6 py-3.5 px-6 border-2 border-orange-500 text-orange-500 font-bold rounded-lg group transition-all"
            variant="outline"
          >
            <span className="relative z-10 flex items-center">
              সর্বশেষ পড়ুন
              <ArrowUpRight className="size-5 ml-1 h-4 w-4 transition-all group-hover:ml-3" />
            </span>

            {/* 🔥 আগুনের লেয়ার */}
            <span className="absolute inset-0 bg-gradient-to-t from-orange-600 via-yellow-400 to-transparent opacity-70 animate-flame"></span>
          </Button>


          <Button
            className="relative overflow-hidden cursor-pointer mt-6 py-3.5 px-6 border-2 border-orange-500 text-orange-500 font-bold rounded-lg group transition-all"
            variant="outline"
          >
            <span className="relative z-10 flex items-center">
              বিষয়ভিত্তিক অন্বেষণ
              <CirclePlay className="size-5 ml-1 h-4 w-4 transition-all group-hover:ml-3" />
            </span>

            {/* 🔥 আগুনের লেয়ার */}
            <span className="absolute inset-0 bg-gradient-to-t from-orange-600 via-yellow-400 to-transparent opacity-70 animate-flame"></span>
          </Button>






        </div>
      </div>
    </div>
  );
};

export default Hero02;
