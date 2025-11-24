'use client'

import { motion } from 'framer-motion'

const companies = [
    "Acme Corp", "GlobalTech", "Nebula", "Vertex", "Horizon", "Pinnacle"
]

const testimonials = [
    {
        quote: "PitchGenie doubled our reply rate in the first week. The AI personalization is indistinguishable from a human.",
        author: "Sarah Jenkins",
        role: "VP of Sales at TechFlow",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        quote: "Finally, an outreach tool that doesn't feel like spam. Our SDRs are booking 3x more meetings.",
        author: "Michael Chen",
        role: "Founder at GrowthLabs",
        image: "https://i.pravatar.cc/150?u=michael"
    },
    {
        quote: "The LinkedIn automation features are a game changer. It's like having an extra SDR on the team.",
        author: "Jessica Williams",
        role: "Head of Marketing at ScaleUp",
        image: "https://i.pravatar.cc/150?u=jessica"
    }
]

export default function SocialProof() {
    return (
        <section className="py-24 bg-black border-y border-white/5">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-8">Trusted by 1000+ innovative teams</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        {companies.map((company, idx) => (
                            <span key={idx} className="text-xl md:text-2xl font-bold text-white">{company}</span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 relative"
                        >
                            <div className="absolute -top-4 left-8 text-6xl text-emerald-500/20 font-serif">"</div>
                            <p className="text-white/80 mb-6 relative z-10 leading-relaxed">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                                    {/* Placeholder for avatar if image fails */}
                                    <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-amber-500" />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{t.author}</div>
                                    <div className="text-sm text-white/40">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
