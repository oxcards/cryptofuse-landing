import React from 'react';

export function Features() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="text-blue-600 mr-2">🔥</span>
          <span><strong>Complete Web3 Iconography</strong>: 100+ cryptocurrency tokens, wallets, exchanges, and networks</span>
        </li>
        <li className="flex items-center">
          <span className="text-blue-600 mr-2">🎨</span>
          <span><strong>Multiple Icon Variants</strong>: Branded, solid, outline, gradient, and light variants</span>
        </li>
        <li className="flex items-center">
          <span className="text-blue-600 mr-2">📱</span>
          <span><strong>Responsive Components</strong>: Icons work in all screen sizes and resolutions</span>
        </li>
        <li className="flex items-center">
          <span className="text-blue-600 mr-2">🎯</span>
          <span><strong>Simple API</strong>: Easy-to-use components with consistent interfaces</span>
        </li>
        <li className="flex items-center">
          <span className="text-blue-600 mr-2">🔄</span>
          <span><strong>2025 Ready</strong>: Updated with the latest tokens and platforms</span>
        </li>
      </ul>
    </section>
  );
}
