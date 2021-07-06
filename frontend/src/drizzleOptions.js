import CustomStorage from './contracts/CustomStorage.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545',
    },
  },
  events: {
    CustomStorage: ['DataChanged'],
  },
  contracts: [CustomStorage],
  polls: {
    accounts: 15000,
  },
}

export default options
