
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("hardhat-deploy");
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/F5goXhfT-rdH9DgZ_TpKqFiDR8uAXGpp";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "f148d88139d604fd31100a77627a0388e0544d9a91ff60d1af1c9fe11dce1f50";
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      blockConfirmations: 1
    },
    localhost: {
        chainId: 1337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6
    },
  },
  solidity: {
    compilers: [{version: "0.8.18"}, {version: "0.8.0"}]
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    noColors:true,
    currency:"USD",
    coinmarketcap:COINMARKETCAP_API_KEY
  },
  namedAccounts : {
    deployer: {
      default: 0
    },
    player: {
      default: 1
    }
  }
};
