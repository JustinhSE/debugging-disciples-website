import { Card } from '@/components/ui/card';
import { cn } from "@/lib/utils"
import { Marquee } from './ui/marquee';
import { useNavigate } from 'react-router-dom';
const reviews = [
  {
    name: "James Fei-Baffoe",
    title: "Junior Computer Science Student",
    body: "It’s been a blessing to be a part of this community!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Daniel Ogundare",
    title: "Software Engineer",
    body: "I like the vibes, the conversations, the lessons learned, and the bible studies - they make the place feel so welcoming.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Zaire Meachem",
    title: "Data Scientist",
    body: "It’s an incredible space to communicate, discuss, and connect with like minded people.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Samuel Oyeneyin",
    title: "Software Engineer",
    body: "It's been a blessing to be apart of this community. Excited to see it's continued growth and grateful for the people I've met.",
    img: "https://avatar.vercel.sh/justin",
  },
  {
    name: "Roberson Robertson",
    title: "Software Engineer",
    body: "Amazing community and glory to God for it 🙏🏽",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Sujar Henry",
    title: "Senior Computer Science Student",
    body: "Super grateful to God to be a part of this community, it’s been an awesome time!",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  title,
  body,
}: {
  img: string
  name: string
  title: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{title}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
    </div>
  )
}

const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="py-5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              What Our Brothers Say
            </span>
          </h2>
        </div>       

        {/* Text Testimonials Section */}
        <div className="relative flex flex-col items-center justify-center min-h-[300px]">
          <MarqueeDemo />
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
