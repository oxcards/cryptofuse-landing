import React from 'react';

export function Installation() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Installation</h2>
      <p className="mb-4">Ensure you have <code>@web3icons/react</code> installed in your project:</p>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <pre className="text-sm text-gray-800">
          <code>
{`npm install @web3icons/react
# or
yarn add @web3icons/react
# or
pnpm add @web3icons/react`}
          </code>
        </pre>
      </div>
    </section>
  );
}
