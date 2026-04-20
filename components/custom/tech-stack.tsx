"use client";
import { Marquee } from "../ui/marquee";

const topRowData = [
  {
    label: "HTML",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562717/HTML5_o4phkh.png",
  },
  {
    label: "CSS",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562717/CSS3_zcbx9d.png",
  },
  {
    label: "JavaScript",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562716/JavaScript_cvxw0s.png",
  },
  {
    label: "NextJs",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562711/NextJs_asqtz7.png",
  },
  {
    label: "TailwindCSS",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562716/Tailwind_CSS_ws36pu.png",
  },
  {
    label: "NodeJs",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562716/Node.js_v3k3rd.png",
  },
  {
    label: "Python",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562715/Python_gdlwel.png",
  },
  {
    label: "MongoDB",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562715/MongoDB_gax4aq.png",
  },
  {
    label: "GitHub",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562712/GitHub_dsses1.png",
  },
];

const bottomRowData = [
  {
    label: "FastAPI",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562714/FastAPI_urfowa.png",
  },
  {
    label: "PostgreSQL",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562714/PostgresSQL_hsxa2g.png",
  },
  {
    label: "Redis",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562713/Redis_eisx1x.png",
  },
  {
    label: "Vercel",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562711/Vercel_hyvnev.png",
  },
  {
    label: "OpenAI SDK",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562712/OpenAI_k99r6g.png",
  },
  {
    label: "GoogleAI SDK",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562712/GoogleGemini_hn4exc.png",
  },
  {
    label: "Pinecone",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562712/Pinecone_vasb9k.png",
  },
  {
    label: "Postman",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562714/Postman_kgsrin.png",
  },
  {
    label: "Figma",
    image:
      "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776562712/Figma_givqia.png",
  },
];

export const TechStackSection = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-2">
      <h2 className="text-xl font-semibold text-text-primary">
        Technology & Tools
      </h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {topRowData.map((item) => (
            <TechCard key={item.label} item={item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {bottomRowData.map((item) => (
            <TechCard key={item.label} item={item} />
          ))}
        </Marquee>

        <div className="from-background-primary pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background-primary pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </div>
  );
};

type TechItem = {
  label: string;
  image: string;
};

export const TechCard = ({ item }: { item: TechItem }) => {
  return (
    <div className="w-28 h-28 bg-background-secondary rounded-lg flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">
      <img
        src={item.image}
        alt={item.label}
        className="h-14 w-14 object-contain"
      />

      <span className="text-xs text-text-secondary text-center">
        {item.label}
      </span>
    </div>
  );
};
