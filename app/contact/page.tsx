'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-black selection:bg-emerald-500/30">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left Side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for new partnerships
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let's Scale Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-500">Outreach Together</span>
              </h1>

              <p className="text-lg text-white/60 mb-12 leading-relaxed max-w-md">
                Have questions about enterprise plans, integrations, or custom AI models? Our team is ready to help you close more deals.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-white/60 text-sm mb-1">For general inquiries and support</p>
                    <a href="mailto:hello@pitchgenie.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">support@pitchgenie.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                    <p className="text-white/60 text-sm">313001 Udaipur, Rajasthan<br />India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                    <Clock className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Response Time</h3>
                    <p className="text-white/60 text-sm">We usually respond within 2 hours during business days.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-amber-500/5 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60 mb-8">We'll get back to you as soon as possible.</p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-white/10 hover:bg-white/5 text-white"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">First Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Company Website</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                        placeholder="company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">How can we help?</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                        placeholder="Tell us about your outreach goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
