"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-background">
      <div className="container mx-auto px-4 py-24 md:py-28 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 font-heading">Compliance Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            This page outlines our compliance with relevant regulations and laws governing cryptocurrency payment operations. We are incorporated in the Republic of the Marshall Islands.
          </p>

          <h2>1. Regulatory Compliance</h2>
          <p>
            As a company incorporated in the Republic of the Marshall Islands, we operate in compliance with applicable laws and regulations. We maintain regular reviews of our operations to ensure ongoing compliance with evolving regulatory requirements.
          </p>
          
          <h2>2. Anti-Money Laundering (AML) Compliance</h2>
          <p>
            We implement robust Anti-Money Laundering measures designed to prevent the use of our services for money laundering activities. These measures include:
          </p>
          <ul>
            <li>Customer identification and verification procedures</li>
            <li>Transaction monitoring systems</li>
            <li>Suspicious activity reporting</li>
            <li>Record-keeping requirements</li>
            <li>Regular staff training on AML compliance</li>
          </ul>
          
          <h2>3. Know Your Customer (KYC) Procedures</h2>
          <p>
            Our KYC procedures are designed to verify the identity of our customers and assess potential risks. We collect and verify identification information from our business customers to ensure we know who we are dealing with and to mitigate potential risks.
          </p>
          
          <h2>4. Counter-Terrorist Financing (CTF)</h2>
          <p>
            We maintain strict protocols to prevent the use of our services for terrorist financing. We screen customers and transactions against sanctions lists and take appropriate measures to identify and report suspicious activities.
          </p>
          
          <h2>5. Data Protection and Privacy</h2>
          <p>
            We comply with relevant data protection regulations and implement appropriate security measures to protect customer data. Our Privacy Policy outlines how we collect, use, and protect personal information.
          </p>
          
          <h2>6. Risk Assessment</h2>
          <p>
            We conduct regular risk assessments to identify and mitigate potential compliance risks. These assessments help us adapt our compliance program to address emerging risks and regulatory changes.
          </p>
          
          <h2>7. Ongoing Monitoring</h2>
          <p>
            We continuously monitor transactions and account activities for suspicious patterns or behaviors that may indicate money laundering, fraud, or other illegal activities.
          </p>
          
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions or concerns about our compliance policies, please contact us at:
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
