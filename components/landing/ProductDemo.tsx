'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function ProductDemo() {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="demo">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[128px] opacity-20" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-white/80">See it in action</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Write Personalised Emails <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            in Seconds, Not Hours
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto"
                    >
                        Experience the power of our AI engine. Just tell us who you're contacting and what you're selling.
                    </motion.p>
                </div>

                {/* Demo Interface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden"
                >
                    {/* Top Bar (Mac style) */}
                    <div className="h-10 bg-neutral-900/50 border-b border-white/5 flex items-center px-4 gap-2 relative z-10">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="flex-1 text-center text-xs text-white/20 font-mono">
                            pitchgenie.app
                        </div>
                    </div>

                    {/* Video Container */}
                    <div className="relative aspect-video bg-neutral-900 group">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                        >
                            <source src="/demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play Button Overlay (Visible when video is not playing or as a visual indicator) */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                            </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
