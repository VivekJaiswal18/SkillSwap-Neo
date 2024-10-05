import { Chain } from 'wagmi/chains'

export const neoxchain: Chain = {
  id: 12227332,
  name: 'NeoX T4',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'GAS',
  },
  rpcUrls: {
    public: { http: ['https://neoxt4seed1.ngd.network'] },
    default: { http: ['https://neoxt4seed1.ngd.network'] },
  },
  blockExplorers: {
    default: { name: 'xt4scan', url: 'https://xt4scan.ngd.network/' },
  },
  testnet: true
};