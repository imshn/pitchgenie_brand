'use client'

import { motion } from 'framer-motion'

const steps = [
    {
        num: "01",
        title: "Connect Your Accounts",
        desc: "Link your email and LinkedIn accounts in seconds. We support G Suite, Outlook, and all major providers."
    },
    {
        num: "02",
        title: "Define Your Audience",
        desc: "Use our search filters or upload your own leads. Our AI enriches data to find the perfect contact info."
    },
    {
        num: "03",
        title: "Launch Campaign",
        desc: "Sit back as PitchGenie writes and sends personalized messages. Watch the replies roll in."
    }
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 bg-black relative">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            From Cold Lead to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Booked Meeting</span>
                        </h2>
                        <div className="space-y-12">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="flex gap-6"
                                >
                                    <div className="text-5xl font-bold text-white/10">{step.num}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/60 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                            {/* Abstract UI representation */}
                            <div className="space-y-4">
                                <div className="h-8 w-1/3 bg-white/10 rounded animate-pulse" />
                                <div className="h-32 w-full bg-white/5 rounded border border-white/5 p-4">
                                    <div className="flex gap-4 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/20" />
                                        <div className="space-y-2">
                                            <div className="h-2 w-24 bg-white/20 rounded" />
                                            <div className="h-2 w-16 bg-white/10 rounded" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-white/10 rounded" />
                                        <div className="h-2 w-5/6 bg-white/10 rounded" />
                                        <div className="h-2 w-4/6 bg-white/10 rounded" />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="h-10 w-32 bg-primary rounded-lg opacity-80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
