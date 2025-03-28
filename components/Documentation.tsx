import React from 'react';
import { CryptoFuseLogo } from './cryptofuse-logo';
import { CryptoFuseLogoVariant } from './logo-variants';

import {
  Overview,
  Features,
  Installation,
  QuickStart,
  Components,
  IconVariants,
  AgentGuidelines,
  CommonUseCases
} from './docs';

export function Documentation() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="flex flex-col items-center mb-8">
        <CryptoFuseLogo className="w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold text-center">CryptoFuse Web3 Icons Integration</h1>
      </header>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Logo Variants</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center">
            <CryptoFuseLogoVariant variant="default" className="w-16 h-16" />
            <span className="mt-2 text-sm">Default</span>
          </div>
          <div className="flex flex-col items-center">
            <CryptoFuseLogoVariant variant="light" className="w-16 h-16" />
            <span className="mt-2 text-sm">Light</span>
          </div>
          <div className="flex flex-col items-center">
            <CryptoFuseLogoVariant variant="dark" className="w-16 h-16" />
            <span className="mt-2 text-sm">Dark</span>
          </div>
          <div className="flex flex-col items-center">
            <CryptoFuseLogoVariant variant="outline" className="w-16 h-16" />
            <span className="mt-2 text-sm">Outline</span>
          </div>
          <div className="flex flex-col items-center">
            <CryptoFuseLogoVariant variant="gradient" className="w-16 h-16" />
            <span className="mt-2 text-sm">Gradient</span>
          </div>
          <div className="flex flex-col items-center">
            <CryptoFuseLogoVariant variant="monochrome" className="w-16 h-16" />
            <span className="mt-2 text-sm">Monochrome</span>
          </div>
        </div>
      </div>

      <Overview />
      <Features />
      <Installation />
      <QuickStart />
      <Components />
      <IconVariants />
      <AgentGuidelines />
      <CommonUseCases />

      <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
      </footer>
    </div>
  );
}
