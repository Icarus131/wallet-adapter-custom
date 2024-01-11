import { useWallet } from "@solana/wallet-adapter-react";

const EclipseWallets = () => {
  const { select, wallets, publicKey, disconnect } = useWallet();

  const supportedWalletNames = ["Salmon", "Connect by Drift",];

  const supportedWallets = wallets.filter((wallet) => {
    if (supportedWalletNames.includes(wallet.adapter.name)) {
      if (wallet.adapter.name === "Connect by Drift") {
        return true;
      }
      return wallet.readyState === "Installed";
    }
    return false;
  });

  return !publicKey ? (
    <div>
      {supportedWallets.length > 0 ? (
        supportedWallets.map((wallet) => (
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
                ? "MetaMask"
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
