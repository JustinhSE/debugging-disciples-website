import { cn } from "@/lib/utils"
import { Marquee } from './ui/marquee';

const reviews = [
  {
    name: "James Fei-Baffoe",
    title: "Junior Computer Science Student",
    body: "It's been a blessing to be a part of this community!",
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
    body: "It's an incredible space to communicate, discuss, and connect with like minded people.",
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
    body: "Super grateful to God to be a part of this community, it's been an awesome time!",
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
        "relative h-full w-72 cursor-pointer overflow-hidden border p-6",
        "border-white/8 bg-tech-darker/60 hover:border-gold/25 transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <img className="rounded-full" width="36" height="36" alt={`${name} profile photo`} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-mist font-sans">
            {name}
          </figcaption>
          <p className="text-xs font-light text-stone/70 font-sans">{title}</p>
        </div>
      </div>
      <blockquote className="text-sm text-stone/80 leading-relaxed font-sans font-light">
        "{body}"
      </blockquote>
    </figure>
  )
}

function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={`first-${i}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={`second-${i}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-tech-dark"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-tech-dark"></div>
    </div>
  )
}

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold/40" />
            <span className="section-label">Testimonials</span>
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-mist leading-tight">
            What Our <span className="italic text-gold">Brothers</span> Say
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[300px]">
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
