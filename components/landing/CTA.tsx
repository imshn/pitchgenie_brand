'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import JoinWaitlist from './JoinWaitlist'

export default function CTA() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] opacity-30 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-[32px] p-12 md:p-24 relative overflow-hidden group hover:border-white/20 transition-colors duration-500"
                >
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-white/80">Limited Beta Access</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">10x Your Pipeline?</span>
                        </h2>

                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join 2,000+ sales teams using PitchGenie to automate their outreach, personalize messages at scale, and close more deals.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <JoinWaitlist>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-black hover:bg-zinc-200 px-10 h-14 text-lg font-bold shadow-xl shadow-white/10 transition-all hover:scale-105"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </JoinWaitlist>
                        </div>

                        <p className="mt-8 text-sm text-white/40 flex items-center justify-center gap-4">
                            <span>No credit card required</span>
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <span>Free plan available</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
