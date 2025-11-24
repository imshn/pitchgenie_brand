'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How does PitchGenie's AI cold email generator work?",
        answer: "PitchGenie uses advanced LLMs (Large Language Models) to analyze your prospect's LinkedIn profile, company website, and recent news. It then generates a unique, hyper-personalized cold email that references specific details, pain points, and shared interests, ensuring your outreach never looks like a template."
    },
    {
        question: "Is PitchGenie safe for LinkedIn automation?",
        answer: "Yes, PitchGenie is designed with safety as a priority. We use cloud-based execution with randomized delays and human-like behavior patterns to stay well within LinkedIn's usage limits. We also monitor your account health 24/7 to prevent any flags or restrictions."
    },
    // {
    //     question: "Can I integrate PitchGenie with my CRM like Salesforce or HubSpot?",
    //     answer: "Absolutely. PitchGenie offers native integrations with major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho. You can automatically sync leads, conversations, and deal statuses between PitchGenie and your CRM, keeping your sales pipeline up to date without manual data entry."
    // },
    {
        question: "What makes PitchGenie different from other sales engagement platforms?",
        answer: "Unlike traditional tools that just send templates at scale, PitchGenie focuses on 'quality at scale'. Our AI doesn't just fill in variables; it writes completely unique messages for every single prospect. This results in 3x higher reply rates compared to standard cold email software."
    },
    {
        question: "Does PitchGenie include email warmup?",
        answer: "Yes, every PitchGenie subscription includes unlimited email warmup. We automatically interact with your email accounts to build positive sender reputation, ensuring your cold emails land in the Primary inbox and avoid the Spam folder."
    },
    {
        question: "How much does PitchGenie cost?",
        answer: "PitchGenie offers flexible pricing starting with a generous free tier. Our paid plans are based on the number of active leads you contact, not seats, so you can invite your whole team. Check our pricing page for detailed comparisons."
    }
]

export default function FAQ() {
    return (
        <section className="py-24 bg-black border-t border-white/5" id="faq">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-white/60">
                        Everything you need to know about the #1 AI outreach tool.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:bg-white/10 transition-colors">
                            <AccordionTrigger className="text-white hover:no-underline hover:text-emerald-400 text-left text-lg font-medium py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
