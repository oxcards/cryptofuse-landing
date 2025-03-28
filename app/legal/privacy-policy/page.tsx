"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-background">
      <div className="container mx-auto px-4 py-24 md:py-28 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 font-heading">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            This Privacy Policy explains how we collect, use, and share your personal information when you use our services.
          </p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to our Privacy Policy. This document outlines how we collect, use, store, and protect your information when you use our cryptocurrency payment processing services. We are incorporated in the Republic of the Marshall Islands, and we operate in compliance with applicable laws and regulations.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect information that is necessary to provide our services and ensure compliance with legal requirements. This may include:
          </p>
          <ul>
            <li>Account information (email address, password, username)</li>
            <li>Business information (company name, address, registration details)</li>
            <li>Transaction information (cryptocurrency addresses, transaction amounts, timestamps)</li>
            <li>Device and connection information (IP address, browser type, operating system)</li>
            <li>Customer support information (communications, issue reports)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To process cryptocurrency transactions</li>
            <li>To communicate with you about our services</li>
            <li>To improve our services and develop new features</li>
            <li>To detect, prevent, and address technical issues and fraudulent activities</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul>
            <li>With service providers who help us deliver our services</li>
            <li>When required by law, regulation, or legal process</li>
            <li>To protect our rights, property, or safety, or that of our users or others</li>
            <li>In connection with a business transaction such as a merger, acquisition, or asset sale</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. International Data Transfers</h2>
          <p>
            As we are registered in the Republic of the Marshall Islands, your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in compliance with applicable laws.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as:
          </p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing of your personal information</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided at the end of this policy.
          </p>

          <h2>8. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, collect information about how you use our services, and improve our offerings. You can manage your cookie preferences through your browser settings.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
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
