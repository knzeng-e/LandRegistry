import { defineStore } from 'pinia'
import { MetaMaskSDK } from '@metamask/sdk'
import { ethers } from 'ethers'
import {ABI} from '../contract/landRegistry.ABI'

const SMART_CONTRACT_ADDRESS = "0xfCDbc9e9B97cE970DA0D14C5d0d1F322b6175ADA"

export const useAccountStore = defineStore('account', {
  state: () => {
    return {
      address: '',
      provider: undefined as ethers.providers.Web3Provider | undefined,
      signer: undefined as ethers.providers.JsonRpcSigner | undefined,
      contract: undefined as ethers.Contract | undefined
    }
  },

  actions: {
    setUserAddress(address: string) {
      this.address = address
    },

    async init() {
      const MMSDK = new MetaMaskSDK()
      await MMSDK.init()
      const ethereum = MMSDK.getProvider()
      const accounts = await ethereum.request({ method: 'eth_requestAccounts', params: [] })

      if (accounts) {
        this.address = accounts[0]
      }
      //
      if (ethereum == null) {
        return;
      } else {
        this.provider = new ethers.providers.Web3Provider(ethereum as any)
        this.signer = this.provider.getSigner()
        // create contract
        this.contract = new ethers.Contract(SMART_CONTRACT_ADDRESS, ABI, this.provider.getSigner());
        // this.contract.connect(this.signer);
        // console.log(await this.contract.administrateur());
        console.log('Result ---', this.contract)
      }
    }
  }
})
