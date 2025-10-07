"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Share2, Mail, MessageCircle, Users, Zap, ArrowRight } from "lucide-react"

const socialLinks = [
  { 
    name: "Instagram", 
    icon: Share2, 
    handle: "@Thevoid679",
    description: "Behind-the-scenes & updates",
    action: "Follow",
    url: "https://www.instagram.com/thevoid679?utm_source=ig_web_button_share_sheet&igsh=djBxOHRlbXJmdGt3",
    compact: true
  },
  { 
    name: "YouTube", 
    icon: MessageCircle, 
    handle: "@THEVOIDGAMES",
    description: "Tutorials & content",
    action: "Subscribe",
    url: "https://www.youtube.com/@THEVOIDGAMES-d6m",
    compact: true
  },
  { 
    name: "Discord", 
    icon: Users, 
    handle: "Community",
    description: "Join our creative server",
    action: "Join",
    url: "https://discord.gg/Xnm3p7bv",
    compact: true
  },
  { 
    name: "Email", 
    icon: Mail, 
    handle: "hello@example.com",
    description: "Collaborations & inquiries",
    action: "Contact",
    url: "mailto:hello@gmail.com",
    compact: true
  },
]

export function SocialLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500/10 border border-gray-500/20 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Get In Touch</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold leading-tight"
              >
                <span className="bg-black bg-clip-text text-transparent text-stroke-white-3d">
                  Let's Connect
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
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to bring your vision to life? Let's collaborate and create something extraordinary together. 
                Connect with me through any of these platforms.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Community</span>
                </div>
                <p className="text-gray-600">
                  Join our Discord for tips and collaboration
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side - Compact Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 pointer-events-auto"
          >
            {/* Social Links Grid */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold flex items-center gap-3"
              >
                <Share2 className="w-8 h-8 text-gray-700" />
                <span className="text-gray-900 text-stroke-white-3d">Connect With Me</span>
              </motion.h3>

              {/* Compact 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative bg-white/70 border border-gray-200 rounded-xl p-4 backdrop-blur-sm hover:border-gray-400 transition-all duration-300 cursor-pointer overflow-hidden transform-gpu block min-h-[120px]"
                    style={{
                      transformStyle: 'preserve-3d',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      {/* Top section - Icon and Platform name */}
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className="p-2 rounded-lg bg-black text-white shadow-sm group-hover:shadow-md transition-all duration-300"
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <social.icon className="w-4 h-4" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 truncate">
                            {social.name}
                          </h4>
                          <p className="text-xs text-gray-500 truncate">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                      
                      {/* Middle section - Description */}
                      <p className="text-xs text-gray-600 leading-tight mb-2 line-clamp-2">
                        {social.description}
                      </p>
                      
                      {/* Bottom section - Action */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {social.action}
                        </span>
                        <ArrowRight className="w-3 h-3 text-gray-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}