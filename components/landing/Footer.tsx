import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-16">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            PitchGenie
                        </Link>
                        <p className="text-white/60 max-w-sm leading-relaxed">
                            The #1 AI outreach tool for modern sales teams. Automate your cold email and LinkedIn campaigns with hyper-personalization.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2025 PitchGenie. All rights reserved.</p>
                    <div className="flex gap-8 items-center">
                        <Link href="https://twitter.com/pitchgenie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="https://linkedin.com/company/pitchgenie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
