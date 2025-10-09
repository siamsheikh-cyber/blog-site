
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom"

import { MdOutlineArticle } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    date: "অক্টোবর 12,2018",
    image: "img1.jpg",
    text: "ডিরেক্টেড ইভোলিউশন: যে প্রক্রিয়া জিতেছে ২০১৮ সালের নোবেল পুরস্কার",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/directed-evolution-the-process-which-won-the-2018-nobel-prize-in-chemistry",
    linkForImg: "/page/evoleushon"
  },
  {
    id: 2,
    date: "অক্টোবর 12,2018",
    image: "img2.jpg",
    text: "সাপের বিষের বিরুদ্ধে প্রাকৃতিক প্রতিরক্ষা যেভাবে গড়ে উঠেছে কিছু প্রাণীর দেহে",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/animals-that-are-immune-to-snake-venom"
  },
  {
    id: 3,
    date: "অক্টোবর 12,2018",
    image: "img3.jpg",
    text: "ডেথ ভ‍্যালির রহস্যময় পাথর",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/death-valley-sailing-rock"
  },
  {
    id: 4,
    date: "অক্টোবর 12,2018",
    image: "img4.jpg",
    text: "পৃথিবীর বরফ গলা ঠেকাতে কাচ প্রযুক্তির নতুন কৌশল: সম্ভাবনা ও সমস্যা",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/geo-engineering-to-stop-ice-melting"
  },
  {
    id: 5,
    date: "অক্টোবর 12,2018",
    image: "img5.jpg",
    text: "যেভাবে চরম উষ্ণতা ক্ষতি করে মানব আচরণের",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/extreme-heat-climate-change-human-behavior"
  },
  {
    id: 6,
    date: "অক্টোবর 12,2018",
    image: "img6.jpg",
    text: "অ্যাপোলো ১৩ চন্দ্রাভিযান: দুর্ঘটনা মোকাবেলার গল্প || পর্ব ৭",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/apollo-13-accident-part-7"
  },
  {
    id: 7,
    date: "অক্টোবর 12,2018",
    image: "img7.jpg",
    text: "প্রাণীদের উপর লাভ হরমোনের চমকপ্রদ প্রভাব",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/facts-about-the-love-hormon-on-animals"
  },
  {
    id: 8,
    date: "অক্টোবর 12,2018",
    image: "img8.jpg",
    text: "আবিষ্কারের জন্য অনুশোচনায় ভোগা আবিষ্কারকেরা",
    avatar: <MdOutlineArticle />,
    link: "https://archive.roar.media/bangla/main/science/inventors-who-regrets-for-their-inventions"
  },

];

const BlogCart = () => (
  <div className="container mx-[8px] min-h-screen flex justify-center items-center py-12  px-6">
    <div>
      <h2 className="mb-14 text-5xl text-purple-400 md:text-6xl font-semibold text-center tracking-[-0.03em]">
        নানা রহস্য
      </h2>
      <div className="max-w-(--breakpoint-xl) mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 rounded-xl p-6 mx-[3px] break-inside-avoid shadow-[0px_0px_16px_0px_rgba(0,0,0,0.1)]"
          >
            <div className="flex flex-col">
              <Link to={`${testimonial.linkForImg}`}>
                <img src={`../public/${testimonial.image}`} alt="" />
              </Link>
            </div>
            <p className="mt-5 text-[17px]">{testimonial.text}</p>
            <div className="flex gap-2.5 items-center ">
              {testimonial.avatar}
              <Button variant="ghost" size="icon" asChild>
                <Link to={`${testimonial.link}`} target="_blank">
                  Article
                </Link>
              </Button>
              <span className="text-[10px]">{testimonial.date}</span>
            </div>
          </div>

        ))}
      </div>
    </div>
  </div>
);


;

export default BlogCart;
