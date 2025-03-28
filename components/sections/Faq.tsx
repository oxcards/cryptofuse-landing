"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const Faq = () => {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 mb-5">
            <span className="mr-2 text-xl">❓</span> FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about CryptoFuse and cryptocurrency payments.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border px-6 mb-4 shadow-sm border-blue-100 dark:border-blue-900/20 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300">
              <AccordionTrigger className="text-lg font-medium py-4 font-heading">
                How secure is CryptoFuse?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                CryptoFuse uses enterprise-grade security with multi-signature wallets, cold storage for 95% of
                funds, regular third-party security audits, end-to-end encryption, and two-factor authentication for
                all accounts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border px-6 mb-4 shadow-sm border-blue-100 dark:border-blue-900/20 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300">
              <AccordionTrigger className="text-lg font-medium py-4 font-heading">
                Which cryptocurrencies do you support?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                We support all major cryptocurrencies including Bitcoin, Ethereum, Litecoin, Ripple, Solana,
                Cardano, and many more. We're constantly adding support for new cryptocurrencies based on market
                demand and security considerations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border px-6 mb-4 shadow-sm border-blue-100 dark:border-blue-900/20 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300">
              <AccordionTrigger className="text-lg font-medium py-4 font-heading">
                How long do transactions take to process?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                Transaction times vary depending on the cryptocurrency and network congestion. Bitcoin transactions
                typically take 10-60 minutes, while Ethereum transactions usually take 15 seconds to 5 minutes. Our
                system provides real-time updates on transaction status.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border px-6 mb-4 shadow-sm border-blue-100 dark:border-blue-900/20 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300">
              <AccordionTrigger className="text-lg font-medium py-4 font-heading">
                What are the transaction fees?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  CryptoFuse offers enterprise-grade competitive pricing with a flexible fee structure tailored to your business needs and transaction volume.
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li><span className="font-medium">Standard tier:</span> Perfect for small to medium-sized businesses just getting started with crypto payments</li>
                  <li><span className="font-medium">Business tier:</span> Optimized for growing businesses with moderate transaction volumes</li>
                  <li><span className="font-medium">Enterprise tier:</span> Custom solutions with premium support for high-volume businesses</li>
                </ul>
                <p>
                  We pride ourselves on transparent pricing with no hidden fees. Network fees are displayed in real-time before confirming each transaction. Our systems continuously optimize for the lowest network fees possible while maintaining fast settlement times. Contact our sales team for a personalized quote tailored to your specific business requirements.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border px-6 mb-4 shadow-sm border-blue-100 dark:border-blue-900/20 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300">
              <AccordionTrigger className="text-lg font-medium py-4 font-heading">
                How do I integrate CryptoFuse with my website?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                Integration is simple with our comprehensive API. Our support team is available to assist with
                custom integrations. Most websites can be integrated in less than an hour with just a few lines of
                code.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
