'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="container px-4 mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-primary-foreground">
                        P
                    </div>
                    <span className="text-xl font-bold text-white">PitchGenie</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">How it Works</Link>
                    <Link href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</Link>
                    <Button
                        variant="ghost"
                        className="text-white hover:text-white hover:bg-white/10"
                        onClick={() => window.open('https://app.pitchgenie.in', '_blank')}
                    >
                        Log In
                    </Button>
                    <Button
                        className="rounded-full bg-white text-black hover:bg-white/90"
                        onClick={() => window.open('https://app.pitchgenie.in', '_blank')}
                    >
                        Get Started
                    </Button>
                </div>

                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-4 flex flex-col gap-4">
                    <Link href="#features" className="text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                    <Link href="#how-it-works" className="text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
                    <Link href="#pricing" className="text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                    <Button className="w-full" onClick={() => window.open('https://app.pitchgenie.in', '_blank')}>Get Started</Button>
                </div>
            )}
        </nav>
    )
}
