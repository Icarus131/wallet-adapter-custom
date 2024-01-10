import "@/styles/globals.css";
import type { AppProps } from "next/app";
import head from "next/head";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { SalmonWalletAdapter } from "@solana/wallet-adapter-wallets";
import { SnapWalletAdapter } from "@drift-labs/snap-wallet-adapter";
import { clusterApiUrl } from "@solana/web3.js";

export default function App({ Component, pageProps }: AppProps) {
  const driftSnapWalletAdapter = new SnapWalletAdapter();

  const wallets = useMemo(
    () => [new SalmonWalletAdapter(), new SnapWalletAdapter()],
    [],
  );

  const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <Component {...pageProps} />
              </WalletProvider>
            </ConnectionProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
