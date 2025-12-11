"use client";

import Image from "next/image";
import { Database, Palette, BookOpen } from "lucide-react";

const workExperience = [
  {
    role: "Teaching Assistant - Oracle Database Administrator",
    company: "Universitas Tarumanagara",
    period: "Aug 2025 - Present",
    description:
      "Assisted lecturers in delivering material on Oracle Database Administrator. Guided students in SQL querying, system administration, and database management using Oracle Database 23ai on Oracle Linux 8.",
    icon: Database,
    logo: "/images/untar.png",
  },
  {
    role: "Freelance Book Layout & Graphic Designer",
    company: "PT. Gudang Kreasi Idea",
    period: "Jan 2023 - Jun 2023",
    description:
      "Designed and structured textbook layouts for various grade levels (elementary, and junior high).",
    icon: BookOpen,
    logo: "/images/gki.png",
  },
  {
    role: "Graphic Designer & Multimedia Content Creator Intern",
    company: "TechConnect (formerly Sinar Mas Mining)",
    period: "Jan 2022 - Jun 2022",
    description:
      "Designed digital content for internal and external campaigns (YouTube, TikTok, Reels). Created visual and written materials for various Sinarmas Mining subsidiaries including Nanovest, Berau Coal, and TechConnect Academy.",
    icon: Palette,
    logo: "/images/techconnect.png",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="px-8 border-t py-28 lg:py-32 lg:px-24 xl:px-28 border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 lg:mb-20">
          <div className="mb-4 text-sm tracking-widest text-blue-400">
            PROFESSIONAL EXPERIENCE
          </div>
          <h2 className="mb-4 text-4xl leading-tight lg:text-5xl">
            Work Experience
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="p-8 transition-all border bg-gradient-to-br rounded-3xl backdrop-blur-xl border-white/10 from-neutral-900/50 to-neutral-950/50 hover:border-cyan-500/30 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center overflow-hidden transition-transform border w-14 h-14 rounded-2xl bg-cyan-500/10 border-cyan-500/20 group-hover:scale-110">
                  {exp.logo ? (
                    <div className="relative flex items-center justify-center w-full h-full p-2">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-contain"
                        sizes="56px"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-cyan-500/10">
                      <exp.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  )}
                </div>
                <span className="px-3 py-1 text-xs border rounded-full bg-white/5 text-neutral-500 border-white/10">
                  {exp.period}
                </span>
              </div>
              <h3 className="mb-2 text-2xl">{exp.role}</h3>
              <p className="mb-4 text-neutral-400">{exp.company}</p>
              <p className="text-sm leading-relaxed text-neutral-500">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}