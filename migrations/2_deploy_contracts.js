const Dai = artifacts.require("Dai.sol");
const PaymentProcessor = artifacts.require("PaymentProcessor.sol");

module.exports = async function (deployer, network, addresses) {
  const [admin, payer, _] = addresses;

  if(network === 'develop'){// for local development
      await deployer.deploy(Dai);// deploy to local chain
      const dai = await Dai.deployed();// Mine the dai transactions
      await dai.faucet(payer, web3.utils.toWei('10000'));// faucet functions is inherited from Dai.sol contract

      await deployer.deploy(PaymentProcessor, admin, daiAddress);
  }
  else{
      const ADMIN_ADDRESS = '';
      const DAI_ADDRESS = '';
      await deployer.deploy(PaymentProcessor, ADMIN_ADDRESS, DAI_ADDRESS);
  }
};
