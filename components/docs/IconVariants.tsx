import React from 'react';

export function IconVariants() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Icon Variants</h2>
      <p className="mb-4">All components support the following variants:</p>
      
      <ul className="mb-4 space-y-1 list-disc pl-6">
        <li><code>branded</code>: Original brand colors and design (default)</li>
        <li><code>solid</code>: Solid colors</li>
        <li><code>outline</code>: Outline style</li>
        <li><code>gradient</code>: Gradient colors</li>
        <li><code>light</code>: Light colors</li>
      </ul>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <pre className="text-sm text-gray-800">
          <code>
{`<CryptoToken token="eth" variant="branded" size={64} />
<CryptoToken token="eth" variant="solid" size={64} />
<CryptoToken token="eth" variant="outline" size={64} />
<CryptoToken token="eth" variant="gradient" size={64} />
<CryptoToken token="eth" variant="light" size={64} />`}
          </code>
        </pre>
      </div>
    </section>
  );
}
