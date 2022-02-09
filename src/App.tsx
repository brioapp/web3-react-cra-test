// import PriorityExample from "./components/connectors/PriorityExample";
// import MetaMaskCard from "./components/connectors/MetaMaskCard";
// import WalletConnectCard from "./components/connectors/WalletConnectCard";
// import WalletLinkCard from "./components/connectors/WalletLinkCard";
// import NetworkCard from "./components/connectors/NetworkCard";

import React, { Suspense } from "react";
// import loadable from '@loadable/component'

// const PriorityExample = loadable(
//   () => import("./components/connectors/PriorityExample")
// );
// const MetaMaskCard = loadable(
//   () => import("./components/connectors/MetaMaskCard")
// );
// const WalletConnectCard = loadable(
//   () => import("./components/connectors/WalletConnectCard")
// );
// const WalletLinkCard = loadable(
//   () => import("./components/connectors/WalletLinkCard")
// );
// const NetworkCard = loadable(
//   () => import("./components/connectors/NetworkCard")
// );

const PriorityExample = React.lazy(
  () => import("./components/connectors/PriorityExample")
);
const MetaMaskCard = React.lazy(
  () => import("./components/connectors/MetaMaskCard")
);
const WalletConnectCard = React.lazy(
  () => import("./components/connectors/WalletConnectCard")
);
const WalletLinkCard = React.lazy(
  () => import("./components/connectors/WalletLinkCard")
);
const NetworkCard = React.lazy(
  () => import("./components/connectors/NetworkCard")
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;
