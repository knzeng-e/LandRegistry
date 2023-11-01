require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		compilers: [
			{
				version: "0.8.20",
				settings: {
					optimizer: {
						enabled: true,
						runs: 10000,
					},
				},
			},
		],
	},
	networks: {
		volta: {
			url: process.env.VOLTA_RPC_URL
				? process.env.VOLTA_RPC_URL
				: "https://volta-rpc.energyweb.org",
			chainId: 73799,
			accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
		},
	},
};
