//this is not actually test of truffle.
//this is a script that validating expecting functions.
//this is being excuted $node test/test.js.

const Web3 = require("web3");
const fs = require('fs');
const LendingPoolAddressesProvider = JSON.parse(fs.readFileSync("client/src/contracts/ILendingPoolAddressesProvider.json"));
const LendingPool = JSON.parse(fs.readFileSync("client/src/contracts/ILendingPool.json"));
const ERC20Token =  JSON.parse(fs.readFileSync("client/src/contracts/SafeERC20.json"));
const FlashLoaner = JSON.parse(fs.readFileSync("client/src/contracts/Flashloaner.json"));
const Util = require("../client/src/utils/utils");

require('dotenv').config();

//metamask Kovan address
const TRADERACCOUNTADDR = '0x174B3C5f95c9F27Da6758C8Ca941b8FFbD01d330';
//Kovan LendingPoolAddressesProvider Address
const LENDINGPOOLADDRESS = '0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5';
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURENDPOINT));


async function testFlashLoanReceiver(){
  /// Retrieve the LendingPool address
  // This returns 0xB36017F5aafDE1a9462959f0e53866433D373404
  const LendingPoolAddressesProviderInst = new web3.eth.Contract(LendingPoolAddressesProvider.abi, LENDINGPOOLADDRESS);
  console.log(await LendingPoolAddressesProviderInst.methods.getLendingPool().call());
  const lendingPool = await LendingPoolAddressesProviderInst.methods.getLendingPool().call();
  const LendingPoolInst = new web3.eth.Contract(LendingPool.abi, lendingPool);

  //My Smart Contract address on Kovan
  //The address of the contract receiving the funds. The receiver should implement the IFlashLoanReceiver interface.
  var receiverContract = '0xb7D66c0F997a1c61b46c94AeccB7496450807D2D';
  //This is the DAI address in Kokan and it is confirmed as working
  //The address of the principal reserve
  var reserveAddr = '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD';
  //The amount requested for this flashloan, this is amount of borrowing.
  //Currently this is 1 DAI I am borrowing.
  var loanAmountWei = web3.utils.toWei('1', 'ether');
  var byteMemoryData = '0x';

  const reserveData = await LendingPoolInst.methods.getReserveData(reserveAddr).call();
  console.log('Reserve Data: ', reserveData);

  const userAccountData = await LendingPoolInst.methods.getUserAccountData(TRADERACCOUNTADDR).call();
  console.log('userAccountData: ', userAccountData);

  /**
  * @dev allows smartcontracts to access the liquidity of the pool within one transaction,
  * as long as the amount taken plus a fee is returned.
  * NOTE There are security concerns for developers of flashloan receiver contracts
  * that must be kept into consideration. For further details please visit https://developers.aave.com
  *
  * function flashLoan(address _receiver, address _reserve, uint256 _amount, bytes memory _params)
  **/
  console.log('FlashLoan Creating tx');
  const tx =  LendingPoolInst.methods.flashLoan(receiverContract, reserveAddr, loanAmountWei, byteMemoryData);
  console.log('Sending tx');
  var rx = await Util.sendTransaction(web3, tx, TRADERACCOUNTADDR, process.env.PRIVATEKEY, lendingPool);
  console.log(rx);

  console.log('Done')
}

testFlashLoanReceiver();




/*
// Call flashloan method from FlashLoaner.sol in Kovan.
async function testFlashLoan(){

  const LendingPoolAddressesProviderInst = new web3.eth.Contract(LendingPoolAddressesProvider.abi, LENDINGPOOLADDRESS);
  console.log(await LendingPoolAddressesProviderInst.methods.getLendingPool().call());
  const lendingPool = await LendingPoolAddressesProviderInst.methods.getLendingPool().call();
  const LendingPoolInst = new web3.eth.Contract(LendingPool.abi, lendingPool);

  const FlashLoanerInst = new web3.eth.Contract(FlashLoaner.abi, '0xb7D66c0F997a1c61b46c94AeccB7496450807D2D');
  console.log('FlashLoanerInst ', FlashLoanerInst);
  const tx = await FlashLoanerInst.methods.flashloan().call();
  console.log('Sending tx: ', tx);
  //var rx = await Util.sendTransaction(web3, tx, TRADERACCOUNTADDR, process.env.PRIVATEKEY, lendingPool);
  //console.log(rx);

  console.log('Done')
}

testFlashLoan();
*/
