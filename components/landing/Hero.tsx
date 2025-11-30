'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-white/80">New: AI LinkedIn Voice Cloning</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight"
                >
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI Outreach Tool</span> That Actually Gets Replies
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Stop sending spam. Start starting conversations. PitchGenie analyzes your prospects and writes hyper-personalized emails that convert 3x better.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        size="lg"
                        className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20"
                        onClick={() => window.open('https://app.pitchgenie.in', '_blank')}
                    >
                        Start For Free
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 h-12 text-base backdrop-blur-sm"
                    >
                        View Demo
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/40"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Cancel anytime</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
