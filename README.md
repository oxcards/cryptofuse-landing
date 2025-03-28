# CryptoFuse - Next-Gen Crypto Payment Gateway

<div align="center">
  <img src="/public/logo-solid.svg" alt="CryptoFuse Logo" width="120" />
  <h3>Modern Cryptocurrency Payment Solutions</h3>
</div>

## 🚀 Overview

CryptoFuse is a modern, secure cryptocurrency payment gateway built with Next.js 14, React, TypeScript, and Tailwind CSS. It enables businesses to seamlessly integrate crypto payments into their websites and applications with support for 50+ cryptocurrencies.

## ✨ Features

- **Multi-Currency Support**: Accept Bitcoin, Ethereum, Solana, and 50+ other cryptocurrencies
- **Real-Time Conversion**: Automatic conversion to your preferred fiat currency
- **Low Fees**: Competitive transaction fees with volume-based discounts
- **Enterprise Security**: Multi-signature wallets and cold storage for maximum security
- **Developer-Friendly**: Simple API with SDKs for popular programming languages
- **Real-Time Dashboard**: Monitor transactions and analytics in real-time

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Icons**: [@web3icons/react](https://www.npmjs.com/package/@web3icons/react) for cryptocurrency icons
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Light/Dark Mode**: Implemented with [next-themes](https://github.com/pacocoursey/next-themes)

## 🧩 Project Structure

```
/
├── app/                # Next.js 14 app router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   ├── signup-success/  # Success page after form submission
│   └── legal/          # Legal pages
├── components/         # React components
│   ├── crypto/         # Cryptocurrency-related components
│   ├── sections/       # Website sections (Hero, Features, etc.)
│   └── ui/             # shadcn/ui components
├── public/             # Static assets
└── styles/             # Global CSS
```

## 📋 Component Structure

- **components/crypto/**: Contains all cryptocurrency-related components
  - **CryptoIcons.tsx**: Component for displaying various cryptocurrency icons
  - **Web3Icons.tsx**: Wrapper for @web3icons/react library icons
- **components/sections/**: Main site sections
- **components/ui/**: Shadcn UI components

## 🔍 Key Features Overview

1. **Orbital Animation System**
   - Cryptocurrency icons orbit around a central logo
   - Multiple orbit paths with different speeds
   - Smooth animations with customized delays

2. **Theme Switching**
   - Light and dark mode support
   - Persistent theme preferences
   - Optimized contrast in both modes

3. **Responsive Design**
   - Mobile-first approach
   - Optimized layouts for all screen sizes
   - Touch-friendly interactions

4. **Crypto Icon Integration**
   - 50+ cryptocurrency icons
   - Token categorization (popular, stablecoins, DeFi)
   - Consistent styling and interactions

5. **Form Integration**
   - Direct integration with Tally form for user signups
   - Custom success page after form submission
   - Seamless user experience from landing page to signup

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cryptofuse.git

# Navigate to the project directory
cd cryptofuse

# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see the application running.

## 🚀 Deployment

CryptoFuse supports automated deployment to Cloudflare Pages through GitHub Actions:

### GitHub Actions Deployment

When you push to the `main` branch, GitHub Actions automatically:
1. Sets up the Node.js environment
2. Ensures package-lock.json exists (creates it if missing)
3. Installs dependencies
4. Builds the Next.js application
5. Deploys to Cloudflare Pages

### Local Deployment

For manual deployment from your local machine:

```bash
# Deploy to production
npm run deploy

# Deploy to preview branch
npm run deploy:preview
```

Before pushing changes to GitHub, run the precommit script to ensure your package-lock.json is properly tracked:

```bash
npm run precommit
```

The site will be deployed to `cryptofuse.pages.dev` by default.

## 🔧 Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000  # For local development
# NEXT_PUBLIC_APP_URL=https://cryptofuse.pages.dev  # For production
```

## 🤖 External Integration

CryptoFuse integrates with Tally for user signups and data collection:

- Direct links to Tally forms for user registration
- Custom success page after form submission
- Secure data collection for business onboarding
- No additional backend required for initial user acquisition

This provides a seamless experience for users while allowing efficient data collection.

## 🎨 Design Guidelines

- **Colors**: Primary blue (#3B82F6), dark blue (#1E40AF)
- **Typography**: Outfit for body text, Space Grotesk for headings
- **Spacing**: Based on 4px grid system (4px, 8px, 16px, etc.)
- **Border Radius**: Consistent rounded corners (4px, 8px, 12px)
- **Shadows**: Subtle elevation with blue accents

## 📖 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contact

For inquiries, please contact [support@cryptofuse.io](mailto:support@cryptofuse.io).
# Project specific note
# Another project note
