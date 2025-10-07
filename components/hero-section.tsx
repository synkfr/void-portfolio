"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">exmaple tag</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-black bg-clip-text text-transparent text-stroke-white-3d">
                  Portfolio
                </span>
              </motion.h1>

              {/* Profession */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                  What you are?
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create clean, eye-catching videos and thumbnails that actually get clicks. I focus on simple, sharp visuals and edits that keep people watching.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => {
                  document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full border-2 border-border hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2Y+</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Space for Spline Robot */}
          <motion.div
            className="relative h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Animated background elements that complement the robot */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Orbital elements */}
              <motion.div
                className="absolute w-96 h-96 border border-primary/10 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-64 h-64 border border-secondary/10 rounded-full"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 2 === 0 ? 'bg-primary/40' : 'bg-secondary/40'
                }`}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i * 10)}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background gradient overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-secondary/5 to-transparent blur-3xl" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-sm font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}