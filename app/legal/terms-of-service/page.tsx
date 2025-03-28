"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-background">
      <div className="container mx-auto px-4 py-24 md:py-28 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 font-heading">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            This Terms of Service agreement governs your use of our cryptocurrency payment processing services.
          </p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to our Terms of Service. By accessing or using our cryptocurrency payment processing services, you agree to be bound by these Terms. We are incorporated in the Republic of the Marshall Islands and provide cryptocurrency payment processing services to businesses worldwide.
          </p>

          <h2>2. Definitions</h2>
          <p>
            Throughout these Terms, the following definitions apply:
          </p>
          <ul>
            <li>"We," "us," "our" refers to the cryptocurrency payment processing service incorporated in the Republic of the Marshall Islands.</li>
            <li>"Services" refers to the cryptocurrency payment processing services, APIs, and related tools we provide.</li>
            <li>"User," "you," or "your" refers to any individual or entity using our Services.</li>
            <li>"Cryptocurrency" refers to digital currencies such as Bitcoin, Ethereum, and other supported digital assets.</li>
            <li>"Transaction" refers to the process of sending, receiving, or converting cryptocurrencies using our Services.</li>
          </ul>

          <h2>3. Account Registration and Security</h2>
          <p>
            To use certain features of our Services, you may need to create an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and update your account information</li>
            <li>Keep your account credentials secure</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Be solely responsible for all activities that occur under your account</li>
          </ul>

          <h2>4. Services Description</h2>
          <p>
            We provide cryptocurrency payment processing services that allow businesses to accept, manage, and process cryptocurrency payments. Our Services may include:
          </p>
          <ul>
            <li>Cryptocurrency payment acceptance</li>
            <li>Currency conversion</li>
            <li>Transaction management and reporting</li>
            <li>API integration for websites and applications</li>
            <li>Wallet services for storing cryptocurrencies</li>
          </ul>

          <h2>5. Fees and Payments</h2>
          <p>
            We charge fees for the use of our Services, which may vary depending on the type and volume of transactions. Fee details are available on our website or through direct communication. We reserve the right to change our fees with appropriate notice.
          </p>

          <h2>6. User Responsibilities</h2>
          <p>
            You agree to:
          </p>
          <ul>
            <li>Comply with all applicable laws and regulations</li>
            <li>Obtain all necessary permits, licenses, and approvals required for your business</li>
            <li>Not use our Services for illegal activities, including money laundering, terrorist financing, or fraud</li>
            <li>Not attempt to circumvent any security measures or systems</li>
            <li>Not interfere with the proper functioning of our Services</li>
          </ul>

          <h2>7. Compliance with Laws</h2>
          <p>
            You are responsible for compliance with all applicable laws and regulations in your jurisdiction. We are incorporated in the Republic of the Marshall Islands and comply with applicable laws in that jurisdiction. You must not use our Services in a way that would violate any applicable law or regulation.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All intellectual property related to our Services, including trademarks, copyrights, and patents, remains our property. We grant you a limited, non-exclusive, non-transferable license to use our Services for their intended purpose.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our Services.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from any claims, damages, liabilities, costs, or expenses (including reasonable attorneys' fees) arising from your use of our Services or your violation of these Terms.
          </p>

          <h2>11. Term and Termination</h2>
          <p>
            These Terms remain in effect until terminated. We may suspend or terminate your access to our Services at any time for any reason, including if we believe you have violated these Terms. You may also terminate these Terms by ceasing to use our Services.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time to reflect changes in our Services, legal requirements, or for other reasons. We will notify you of any material changes, and your continued use of our Services after the changes take effect constitutes your acceptance of the revised Terms.
          </p>

          <h2>13. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of the Marshall Islands. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of the Republic of the Marshall Islands.
          </p>

          <h2>14. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Email: contact@cryptofuse.io<br />
            Address: Republic of the Marshall Islands
          </p>

          <p className="text-sm mt-8">
            Last updated: January 1, 2025
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            asChild
          >
            <Link href="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
