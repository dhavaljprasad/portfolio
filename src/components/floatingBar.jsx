"use client";

import {
  FaHome,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const socialLinks = [
  {
    name: "Home",
    icon: <FaHome size={24} />,
    action: () => window.location.reload(),
  },
  {
    name: "Github",
    icon: <FaGithub size={24} />,
    link: "https://github.com/dhavaljprasad",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    link: "https://linkedin.com/in/dhaval-j-prasad",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter size={24} />,
    link: "https://x.com/dhavaljprasad",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    link: "https://instagram.com/dhavaljprasad",
  },
  {
    name: "Pinterest",
    icon: <FaPinterest size={24} />,
    link: "https://pinterest.com/dhavaljprasad",
  },
  {
    name: "Threads",
    icon: <FaThreads size={24} />,
    link: "https://threads.net/dhavaljprasad",
  },
  {
    name: "Email",
    icon: <MdOutlineMailOutline size={24} />,
    action: () => (window.location.href = "mailto:dhavaljprasad@gmail.com"),
  },
];

export default function FloatingBar() {
  return (
    <div
      className="w-auto h-auto flex items-center justify-center gap-4 fixed bottom-0 rounded-2xl
        bg-white/10 backdrop-blur-md border border-white/20 mb-8 p-4"
    >
      {socialLinks.map((item, i) => (
        <div
          key={i}
          className="cursor-pointer text-white hover:scale-110 transition-transform duration-200"
          onClick={() => {
            if (item.action) {
              item.action();
            } else if (item.link) {
              window.open(item.link, "_blank", "noopener,noreferrer");
            }
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
