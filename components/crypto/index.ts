// Export only the components we're actually using
export {
  CryptoToken,
  CryptoWallet,
  CryptoExchange,
  CryptoNetwork,
  CryptoIcon, // For backward compatibility
  PopularCryptoIcons,
  StablecoinIcons,
  DefiIcons,
  iconTypes,
  popularTokens,
  popularStablecoins,
  popularDefiTokens
} from './Web3Icons';

// For backward compatibility, also export the needed items from CryptoIcons
export {
  tokenCategories,
  getAllTokenSymbols
} from './CryptoIcons';
