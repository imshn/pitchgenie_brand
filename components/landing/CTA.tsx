'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/20 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-12 md:p-20 backdrop-blur-xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to 10x Your Pipeline?
                    </h2>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                        Join 2,000+ sales teams using PitchGenie to automate their outreach and close more deals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 text-lg font-bold"
                            onClick={() => window.open('https://app.pitchgenie.in', '_blank')}
                        >
                            Get Started Free
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/40">No credit card required • 14-day free trial</p>
                </motion.div>
            </div>
        </section>
    )
}
