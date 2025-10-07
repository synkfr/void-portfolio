"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Image } from "lucide-react"

type FilterType = "all" | "videos" | "thumbnails"

const videos = [
  { id: 1, title: "Video Edits", embedId: "9sAspnoQhEg", category: "videos" as const },
  { id: 2, title: "Video Edits", embedId: "6GR6OF2tix0", category: "videos" as const },
  { id: 3, title: "Video Edits", embedId: "mbOFE3w65mA", category: "videos" as const },
]

const thumbnails = [
  { id: 4, title: "Thumbnail", image: "https://www.dropbox.com/scl/fi/b0dllm29kovx7w9icbnmw/thumnail-2.png?rlkey=gxadl62p2jy0o4bkib6gro3s0&st=8kfs3j79&dl=1", category: "thumbnails" as const },
  { id: 5, title: "Thumbnail", image: "https://www.dropbox.com/scl/fi/zlfu3owwtonmyfbo7b8fb/9sAspnoQhEg-HD.jpg?rlkey=epurd3ml90sxxoafuhzxtd1l0&st=2x6hu1j4&dl=1", category: "thumbnails" as const },
  { id: 6, title: "Thumbnail", image: "https://www.dropbox.com/scl/fi/v1rftpd188dvqqd7eje4a/eQZ6GDa1yTs-HD.jpg?rlkey=3wezv3lrkbq1jho9227h95hny&st=5vti7cij&dl=1", category: "thumbnails" as const },
  { id: 7, title: "Thumbnail", image: "https://www.dropbox.com/scl/fi/uaggo0o1xqdpws8q0qsk6/thumnial.png?rlkey=7wctgkgs8hveo4lx9yccn744v&st=xgussbi0&dl=1", category: "thumbnails" as const },
]

export function ShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState<FilterType>("all")

  const allItems = [...videos, ...thumbnails]
  const filteredItems = filter === "all" ? allItems : allItems.filter((item) => item.category === filter)

  return (
    <section id="showcase" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight text-stroke-white-3d">
            My <span className="text-black">Work</span>
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto mb-8 font-semibold">
            Explore my portfolio of video edits and thumbnail designs.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pointer-events-auto">
            {[
              { type: "all" as FilterType, label: "All Work" },
              { type: "videos" as FilterType, label: "Videos" },
              { type: "thumbnails" as FilterType, label: "Thumbnails" },
            ].map((btn) => (
              <button
                key={btn.type}
                onClick={() => setFilter(btn.type)}
                className={`uppercase font-bold border-4 border-black px-8 py-3 shadow-[6px_6px_0_#000] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${
                  filter === btn.type
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {btn.type === "videos" && <Play className="inline w-4 h-4 mr-2" />}
                {btn.type === "thumbnails" && <Image className="inline w-4 h-4 mr-2" />}
                {btn.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pointer-events-auto"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="brutalist-card bg-white border-4 border-black shadow-[10px_10px_0_#000] p-4 flex flex-col"
            >
              {/* Media */}
              <div className="aspect-video border-2 border-black mb-4 overflow-hidden">
                {item.category === "videos" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.embedId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="font-black text-xl mb-2 border-b-2 border-black pb-2">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
