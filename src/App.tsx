import PriorityExample from "./components/connectors/PriorityExample";
import MetaMaskCard from "./components/connectors/MetaMaskCard";
import WalletConnectCard from "./components/connectors/WalletConnectCard";
import WalletLinkCard from "./components/connectors/WalletLinkCard";
import NetworkCard from "./components/connectors/NetworkCard";

function App() {
  return (
    <>
      <PriorityExample />
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          fontFamily: "sans-serif",
        }}
      >
        <MetaMaskCard />
        <WalletConnectCard />
        <WalletLinkCard />
        <NetworkCard />
      </div>
    </>
  );
}

export default App;
