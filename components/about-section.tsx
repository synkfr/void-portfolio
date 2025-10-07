"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Video, ImageIcon, Palette, Zap, Star, Target, Rocket } from "lucide-react"

const skills = [
  { 
    name: "Video Editing", 
    icon: Video, 
    description: "I make clean, professional Video Editing.",
  },
  { 
    name: "Photo Editing", 
    icon: ImageIcon, 
    description: "I make clean, professional Photo Editing.",
  },
]

const tools = ["Adobe Photoshop", "Adobe Premiere Pro"]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">About tag</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold leading-tight"
              >
                <span className="bg-black bg-clip-text text-transparent text-stroke-white-3d">
                  About Me
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
Hey, I’m Mayank a video editor and thumbnail editor who loves making content look clean and clickable. I focus on simple edits, sharp visuals, and making every frame count. Always up for improving and creating something that stands out.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8 pointer-events-auto"
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "100%", label: "Satisfaction" },
                { number: "2Y+", label: "Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    rotateX: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Skills & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12 pointer-events-auto"
          >
            {/* Skills Grid */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl font-bold flex items-center gap-3"
              >
                <Star className="w-12 h-12 text-accent text-black" />
                <span className="text-stroke-white-3d-slime">Skills & Expertise</span>
              </motion.h3>

              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -8,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative bg-card/50 border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden transform-gpu"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* 3D depth effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        transform: 'translateZ(20px)',
                      }}
                    />
                    
                    {/* Animated gradient border */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                      style={{
                        transform: 'translateZ(-10px)',
                      }}
                    />
                    
                    <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
                      <div className="flex items-center gap-4 mb-3">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r from-black text-white shadow-lg group-hover:shadow-2xl to-black transition-all duration-500`}
                          whileHover={{ 
                            scale: 1.1,
                            rotateY: 10,
                            transition: { duration: 0.3 }
                          }}
                          style={{
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          <skill.icon className="w-6 h-6" />
                        </motion.div>
                        <motion.h4 
                          className="text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-foreground group-hover:to-foreground/70 transition-all duration-500"
                          style={{
                            transform: 'translateZ(30px)',
                          }}
                        >
                          {skill.name}
                        </motion.h4>
                      </div>
                      
                      <motion.p 
                        className="text-foreground group-hover:text-foreground/80 transition-colors duration-500 leading-relaxed"
                        style={{
                          transform: 'translateZ(20px)',
                        }}
                      >
                        {skill.description}
                      </motion.p>

                      {/*progress bar with dots */}
                      <motion.div 
                        className="flex gap-1 mt-4"
                        style={{
                          transform: 'translateZ(15px)',
                        }}
                      >
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <motion.div
                            key={dot}
                            className={`w-2 h-2 rounded-full ${
                              dot <= 4 ? `bg-black` : 'bg-muted'
                            } group-hover:scale-110 transition-transform duration-300`}
                            whileHover={{ scale: 1.3 }}
                            transition={{ delay: dot * 0.05 }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-stroke-white-3d-slime">Tools I Use</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative "
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div 
                      className="bg-muted px-5 py-3 rounded-2xl border border-border text-box-white-3d hover:border-primary/50 hover:bg-muted/80 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                      style={{
                        transform: 'translateZ(0)',
                      }}
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {tool}
                      </span>
                    </div>
                    
                    {/* 3D depth effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{
                        transform: 'translateZ(-10px)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}