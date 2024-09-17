# OneID Name Service
OneID is your universal identity to the digital world, offering a unified multichain identity across 100+ blockchains. We're committed to simplifying access to diverse networks and managing Web3 identities, thereby improving user convenience. Our focus extends beyond creating on-chain identities; we're passionate about empowering users to explore the digital world effortlessly with a single, universal identity.

# ONEID, ONE CLICK
With our cutting-edge procedure, you can streamline your digital identity management with a single click. Your ID will be connected to 100+ supported blockchains, and you will never have to manually connect each address again.

Access [OneID](https://www.oneid.xyz/) and enjoy your journey!!!

# OneID Snap
The OneID Snap is a package that supports users in easily transferring Tokens across 100+ blockchains on Metamask without any concerns of address and blockchain.

# For Developers
### Snaps is pre-release software
To interact with the OneID Snap, you will need to install MetaMask Flask, a canary distribution for developers that provides access to upcoming features.

### Getting Started
Clone the [OneID Snap](https://github.com/coin98/connect-snap) Connect your Github account  and set up the development environment:

```
yarn install

// run command to build & start dev server
npx mm-snap watch
```

This runs a local development server listening on http://localhost:8080, change port custom in **snap.config.ts**. Navigate to your browser where MetaMask Flask is connected and start command add snap into metamask. This will open a prompt within MetaMask Flask to install the OneID Snap.
```
window.ethereum.request({
    "method": "wallet_requestSnaps",
    "params": {
        "local:http://localhost:8080": {}
    }
})
```

Once installed, you can send token to any wallet, any Blockchain by using a OneID Service that is linked to a wallet address. 

![Snap OneID](https://inventory.coin98.com/images/oneid_snap.png)

To purchase your OneID name, go to the OneID | Your Universal Identity in the Digital World