import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import SocialProof from '@/components/landing/SocialProof'
import ProductDemo from '@/components/landing/ProductDemo'
import Features from '@/components/landing/Features'
import HowItWorks from '@/components/landing/HowItWorks'
import FAQ from '@/components/landing/FAQ'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-emerald-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does PitchGenie's AI cold email generator work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PitchGenie uses advanced LLMs (Large Language Models) to analyze your prospect's LinkedIn profile, company website, and recent news. It then generates a unique, hyper-personalized cold email that references specific details, pain points, and shared interests, ensuring your outreach never looks like a template."
                }
              },
              {
                "@type": "Question",
                "name": "Is PitchGenie safe for LinkedIn automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PitchGenie is designed with safety as a priority. We use cloud-based execution with randomized delays and human-like behavior patterns to stay well within LinkedIn's usage limits. We also monitor your account health 24/7 to prevent any flags or restrictions."
                }
              },
              {
                "@type": "Question",
                "name": "Can I integrate PitchGenie with my CRM like Salesforce or HubSpot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. PitchGenie offers native integrations with major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho. You can automatically sync leads, conversations, and deal statuses between PitchGenie and your CRM, keeping your sales pipeline up to date without manual data entry."
                }
              },
              {
                "@type": "Question",
                "name": "What makes PitchGenie different from other sales engagement platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike traditional tools that just send templates at scale, PitchGenie focuses on 'quality at scale'. Our AI doesn't just fill in variables; it writes completely unique messages for every single prospect. This results in 3x higher reply rates compared to standard cold email software."
                }
              },
              {
                "@type": "Question",
                "name": "Does PitchGenie include email warmup?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, every PitchGenie subscription includes unlimited email warmup. We automatically interact with your email accounts to build positive sender reputation, ensuring your cold emails land in the Primary inbox and avoid the Spam folder."
                }
              },
              {
                "@type": "Question",
                "name": "How much does PitchGenie cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PitchGenie offers flexible pricing starting with a generous free tier. Our paid plans are based on the number of active leads you contact, not seats, so you can invite your whole team. Check our pricing page for detailed comparisons."
                }
              }
            ]
          })
        }}
      />
      <Navbar />
      <Hero />
      {/* <SocialProof />I sa */}
      <ProductDemo />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
