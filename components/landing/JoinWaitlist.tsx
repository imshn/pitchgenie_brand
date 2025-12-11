'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, ArrowRight, Mail, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface JoinWaitlistProps {
    children?: React.ReactNode;
}

export default function JoinWaitlist({ children }: JoinWaitlistProps) {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            // Service used: Web3Forms (Free, no sign-up required for Key)
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "8ebcbaf7-57e6-4027-bde3-7a7109dca8c7", // TODO: Get free key from https://web3forms.com/
                    email,
                    subject: "New PitchGenie Waitlist Signup",
                    from_name: "PitchGenie Waitlist"
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success')
                setEmail('')
            } else {
                setStatus('error')
                setErrorMessage(data.message || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Network error. Please try again.')
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children || (
                    <Button
                        size="lg"
                        className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20"
                    >
                        Join the waiting list
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                )}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[480px] p-0 bg-transparent border-none shadow-none overflow-hidden text-white">

                {/* Backdrop Blur & Premium Border Container */}
                <div className="relative bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                    {/* Decorative Gradient Blob */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-[64px] pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/30 rounded-full blur-[64px] pointer-events-none" />

                    <div className="p-8 relative z-10">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(34,197,94,0.4)]">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                                    <p className="text-white/60 max-w-xs mx-auto mb-6">
                                        We've saved your spot. Watch your inbox for your exclusive invite key.
                                    </p>
                                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 uppercase tracking-widest font-medium">
                                        Position: #2,492
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <DialogHeader className="mb-8 text-left">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                                <Sparkles className="w-5 h-5 text-primary" />
                                            </div>
                                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Early Access</span>
                                        </div>
                                        <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                                            Claim Your Access
                                        </DialogTitle>
                                        <DialogDescription className="text-white/60 mt-2 text-base leading-relaxed">
                                            Be among the first to experience the future of AI outreach.
                                            <span className="text-primary/60 block mt-1">✨ Priority access ending soon.</span>
                                        </DialogDescription>
                                    </DialogHeader>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-white/80 text-sm font-medium">Work Email</Label>
                                            <div className="relative group">
                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-primary transition-colors" />
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="name@company.com"
                                                    className="pl-11 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:bg-white/10 transition-all rounded-xl"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-12 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]"
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                    <span>Reserving Spot...</span>
                                                </div>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Join Waitlist <ArrowRight className="w-4 h-4" />
                                                </span>
                                            )}
                                        </Button>

                                        {status === 'error' && (
                                            <p className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                                                {errorMessage}
                                            </p>
                                        )}

                                        <div className="flex items-center justify-center gap-3 text-xs text-white/30 pt-2">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-[#0A0A0A] overflow-hidden">
                                                        <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-purple-500' : i === 2 ? 'from-blue-500' : 'from-green-500'} to-transparent opacity-50`} />
                                                    </div>
                                                ))}
                                            </div>
                                            <p>Join 2,000+ others waiting</p>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
