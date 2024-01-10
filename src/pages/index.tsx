import dynamic from "next/dynamic";
const EclipseWallets = dynamic(() => import("../components/Wallets"), { ssr: false });

export default function IndexPage() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Custom Wallets</h1>
            <div className="divider divider-error">Compatible Wallets</div>
            <div className="divider"></div>
            <EclipseWallets />
          </div>
        </div>
      </div>
    </div>
  );
}
