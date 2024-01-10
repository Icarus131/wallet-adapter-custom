import { useWallet } from "@solana/wallet-adapter-react";
import { SalmonWalletAdapter } from "@solana/wallet-adapter-wallets";
import { SnapWalletAdapter } from "@drift-labs/snap-wallet-adapter";

const EclipseWallets = () => {
  const { select, wallets, publicKey, disconnect } = useWallet();

  return !publicKey ? (
    <div>
      {wallets.filter(
        (wallet) =>
          (wallet.adapter.name == "Salmon" &&
            wallet.readyState === "Installed") ||
          wallet.adapter.name == "Connect by Drift",
      ).length > 0 ? (
        wallets
          .filter(
            (wallet) =>
              (wallet.adapter.name == "Salmon" &&
                wallet.readyState === "Installed") ||
              wallet.adapter.name == "Connect by Drift",
          )
          .map((wallet) => (
            <div key={wallet.adapter.name}>
              <button
                className="btn btn-outline btn-accent"
                key={wallet.adapter.name}
                onClick={() => select(wallet.adapter.name)}
              >
                <img
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  width="24px"
                  height="24px"
                ></img>
                {wallet.adapter.name === "Connect by Drift"
                  ? "Metamask"
                  : wallet.adapter.name}
              </button>
              <div className="divider"></div>
            </div>
          ))
      ) : (
        <h2>
          No wallet found. Please download an Eclipse supported Solana wallet
        </h2>
      )}
    </div>
  ) : (
    <div>
      <h2>{publicKey.toBase58()}</h2>
      <button className="btn btn-outline btn-accent" onClick={disconnect}>
        Disconnect wallet
      </button>
    </div>
  );
};

export default EclipseWallets;
