const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config()

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      // gas: 20000000,
      network_id: "*",
      skipDryRun: true
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(process.env.PRIVATEKEY, process.env.INFURENDPOINT);
      },
      network_id: 42,
      gasPrice: 20000000000, // 20 GWEI
      gas: 3716887 // gas limit, set any number you want
    },
    // mainnet: {
    //   provider: new HDWalletProvider(process.env.KEY, "https://mainnet.infura.io/" + process.env.INFURA_API_KEY),
    //   network_id: 1,
    //   gas: 5000000,
    //   gasPrice: 5000000000 // 5 Gwei
    // }
  },
  compilers: {
    solc: {
      version: "0.5.16",
      settings: {
        evmVersion: "constantinople"
      }
    }
  }
}
