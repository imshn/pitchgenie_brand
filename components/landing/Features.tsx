'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Zap, BarChart3, Users, Globe } from 'lucide-react'

const features = [
    {
        title: "AI Cold Email Generator",
        description: "Generate hyper-personalized emails that get replies. Our AI analyzes prospect data to craft the perfect hook.",
        icon: Mail,
        className: "md:col-span-2",
        gradient: "from-primary/20 to-primary/10"
    },
    {
        title: "LinkedIn Automation",
        description: "Scale your LinkedIn outreach safely. Auto-connect, follow-up, and endorse skills.",
        icon: Linkedin,
        className: "md:col-span-1",
        gradient: "from-secondary/20 to-secondary/10"
    },
    {
        title: "Smart Sequences",
        description: "Build multi-channel campaigns that adapt based on prospect behavior.",
        icon: Zap,
        className: "md:col-span-1",
        gradient: "from-primary/20 to-secondary/20"
    },
    {
        title: "Deep Analytics",
        description: "Track open rates, reply rates, and positive sentiment analysis in real-time.",
        icon: BarChart3,
        className: "md:col-span-2",
        gradient: "from-secondary/20 to-primary/20"
    },
    {
        title: "Team Collaboration",
        description: "Share templates, leads, and insights with your entire sales team.",
        icon: Users,
        className: "md:col-span-1",
        gradient: "from-primary/20 to-primary/10"
    },
    {
        title: "Global Data Enrichment",
        description: "Automatically enrich leads with verified emails, phone numbers, and social profiles.",
        icon: Globe,
        className: "md:col-span-2",
        gradient: "from-secondary/20 to-secondary/10"
    }
]

export default function Features() {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="features">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything You Need to Scale</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Powerful features designed to help you close more deals with less effort.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors overflow-hidden ${feature.className}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
