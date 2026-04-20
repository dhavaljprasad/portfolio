"use client";

const personalData = [
  {
    name: "Visual Storytelling",
    description:
      "I see the world like a frame, light, emotion, and meaning in every shot.",
    className: "col-span-3 sm:col-span-1",
    videoSrc:
      "https://res.cloudinary.com/dli14hm5i/video/upload/q_auto/f_auto/v1776668527/My_Video_nyfsvq.mp4",
  },
  {
    name: "A Beautiful Game",
    description:
      "Football keeps me grounded, discipline, obsession, and pure joy.",
    className: "col-span-3 sm:col-span-2",
    videoSrc:
      "https://res.cloudinary.com/dli14hm5i/video/upload/q_auto/f_auto/v1776668492/20250823_153741_1_z6plvm.mp4",
  },
  {
    name: "Dharma & Depth",
    description:
      "Spirituality grounds me — reflection, purpose, and inner peace.",
    className: "col-span-3 sm:col-span-2",
    videoSrc:
      "https://res.cloudinary.com/dli14hm5i/video/upload/q_auto/f_auto/v1776673013/Religious_brp54i.mp4",
  },
  {
    name: "Love, in my eyes",
    description: "It is the strongest force of this entire universe. Feel it!",
    className: "col-span-3 sm:col-span-1",
    videoSrc:
      "https://res.cloudinary.com/dli14hm5i/video/upload/q_auto/f_auto/v1776668520/grok-video-40da865c-a226-4c00-93cc-79e316991197_nd1wjm.mp4",
  },
];

export const PersonalSection = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-4">
      <h2 className="text-xl font-semibold text-text-primary">Personal Life</h2>
      <div className="grid w-full auto-rows-[16rem] sm:auto-rows-[18rem] md:auto-rows-[24rem] grid-cols-3 gap-4">
        {personalData.map((item, index) => (
          <div
            key={index}
            className={`group relative col-span-3 flex flex-col justify-between p-4 overflow-hidden rounded-xl bg-background-secondary ${item.className}`}
          >
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
              <video
                src={item.videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-auto">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm sm:text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
