# Flashloaner
Flashloan Smart Contract based on Aave.



## Receipt Output of flashloan
```javascript
receipt {
  blockHash: '0x7b2164fbe39244e6991119fcec7fadadf5ee1da1a6ae38121b6bc77a6be0d05c',
  blockNumber: 17321942,
  contractAddress: null,
  cumulativeGasUsed: 778072,
  from: '0x174b3c5f95c9f27da6758c8ca941b8ffbd01d330',
  gasUsed: 198358,
  logs: [
    {
      address: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      blockHash: '0x7b2164fbe39244e6991119fcec7fadadf5ee1da1a6ae38121b6bc77a6be0d05c',
      blockNumber: 17321942,
      data: '0x00000000000000000000000000000000000000000000000000005af3107a4000',
      logIndex: 21,
      removed: false,
      topics: [Array],
      transactionHash: '0xde375a00cef4016fda6151f24b906f0d9589a6a114fa4d2003383b881454f7e8',
      transactionIndex: 3,
      transactionLogIndex: '0x0',
      type: 'mined',
      id: 'log_6d7d9742'
    },
    {
      address: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      blockHash: '0x7b2164fbe39244e6991119fcec7fadadf5ee1da1a6ae38121b6bc77a6be0d05c',
      blockNumber: 17321942,
      data: '0x00000000000000000000000000000000000000000000000000005b448e1a6c00',
      logIndex: 22,
      removed: false,
      topics: [Array],
      transactionHash: '0xde375a00cef4016fda6151f24b906f0d9589a6a114fa4d2003383b881454f7e8',
      transactionIndex: 3,
      transactionLogIndex: '0x1',
      type: 'mined',
      id: 'log_ada3e3a1'
    },
    {
      address: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      blockHash: '0x7b2164fbe39244e6991119fcec7fadadf5ee1da1a6ae38121b6bc77a6be0d05c',
      blockNumber: 17321942,
      data: '0x00000000000000000000000000000000000000000000000000000018727cda00',
      logIndex: 23,
      removed: false,
      topics: [Array],
      transactionHash: '0xde375a00cef4016fda6151f24b906f0d9589a6a114fa4d2003383b881454f7e8',
      transactionIndex: 3,
      transactionLogIndex: '0x2',
      type: 'mined',
      id: 'log_39133014'
    },
    {
      address: '0x95D1189Ed88B380E319dF73fF00E479fcc4CFa45',
      blockHash: '0x7b2164fbe39244e6991119fcec7fadadf5ee1da1a6ae38121b6bc77a6be0d05c',
      blockNumber: 17321942,
      data: '0x00000000000000000000000000000000000000000000011acbbe84e331dae1020000000000000000000000000000000000000000004a75a80d3cc1b95e5b8470000000000000000000000000000000000000000000108cdf4f6c5da7f62dc2380000000000000000000000000000000000000000033b2fa52dc21f797d3cd5380000000000000000000000000000000000000000033cb0cb1798452ef38b95d5',
      logIndex: 24,
      removed: false,
      topics: [Array],
      transactionHash: '0xde375a00cef4016fda6151f24b906f0d9589a6a114fa4d2003383b881454f7e8',
      transactionIndex: 3,
      transactionLogIndex: '0x3',
      type: 'mined',
      id: 'log_ae98e34f'
    },
    {
      address: '0x580D4Fdc4BF8f9b5ae2fb9225D584fED4AD5375c',
      blockHash: '0x7b2164fbe39244e6991119fcec7fadadf5ee1da1a6ae38121b6bc77a6be0d05c',
      blockNumber: 17321942,
      data: '0x00000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000000000517da02c0000000000000000000000000000000000000000000000000000000018727cda00000000000000000000000000000000000000000000000000000000005e693b4c',
      logIndex: 25,
      removed: false,
      topics: [Array],
      transactionHash: '0xde375a00cef4016fda6151f24b906f0d9589a6a114fa4d2003383b881454f7e8',
      transactionIndex: 3,
      transactionLogIndex: '0x4',
      type: 'mined',
      id: 'log_cf512309'
    }
  ],
  logsBloom: '0x00000000000000000000000000000000000080000000000800000000000000000100800000000000080001000000000000200400000000000000000000000000000400000000000000060008000000000000000000000000000000004002000000400800000000000014000000000000000000000000000000000010000000000000000000000000000000000000008000020000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100002000000000000000000000008000000000100000800000000000000000000000000000040001000040000000000000000000000000000000000000000',
  root: null,
  status: true,
  to: '0x580d4fdc4bf8f9b5ae2fb9225d584fed4ad5375c',
  transactionHash: '0xde375a00cef4016fda6151f24b906f0d9589a6a114fa4d2003383b881454f7e8',
  transactionIndex: 3
}
Transaction done.
undefined
Done
```
## Token Transfer Flow
https://kovan.etherscan.io/tx/0xde375a00cef4016fda6151f24b906f0d9589a6a114fa4d2003383b881454f7e8

<img src="https://github.com/cryptopixelfrog/flashloaner/blob/master/doc/img/tokenflow.png">

1. Borrow 0.0001 DAI and transfer from 0x95d1189ed88b380e319df73ff00e479fcc4cfa45(<a href="https://developers.aave.com/#smart-contracts" target="_blank">LendingPoolCore</a>)
2. to 0xb7d66c0f997a1c61b46c94aeccb7496450807d2d(my <a href="https://kovan.etherscan.io/address/0xb7d66c0f997a1c61b46c94aeccb7496450807d2d#internaltx" target="_blank">Smart Contract</a>)
3. then repay 0.00010035 DAI to 0x95d1189ed88b380e319df73ff00e479fcc4cfa45(LendingPoolCore with fee)
4. then transfer to 0x971EFe90088F21dC6a36f610FFEd77Fc19710708(<a href="https://kovan.etherscan.io/address/0x971efe90088f21dc6a36f610ffed77fc19710708#tokentxns" target="_blank">DAI Smart Contract</a>) 

