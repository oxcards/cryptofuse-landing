"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-background">
      <div className="container mx-auto px-4 py-24 md:py-28 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 font-heading">Cookie Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            This Cookie Policy explains how CryptoFuse ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why do we use cookies?</h2>
          <p>
            We use cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. 
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to this Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Where can I get further information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at privacy@cryptofuse.io.
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
