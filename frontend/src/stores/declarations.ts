import { defineStore } from 'pinia'
import { ethers } from 'ethers'
import { useAccountStore } from './account'

export const useDeclarationStore = defineStore('declaration', {
  state: () => {
    return {
      declarations: [],
      declaration: {}
    }
  },

  actions: {
    async sendDeclaration(data: {
      NUP: number
      ilot: number
      superficieEnM2: number
      commune: string
      quartier: string
      arrondissement: string
      departement: string
      description: string
    }) {
      try {
        console.log('DATA DECLARATIONS ---- ', data);
        const accountStore = useAccountStore()
        accountStore.init()

        const result = await accountStore.contract?.declarerParcelle({
          ...data,
          commune: ethers.utils.parseBytes32String(data.commune),
          quartier: ethers.utils.parseBytes32String(data.quartier),
          arrondissement: ethers.utils.parseBytes32String(data.arrondissement),
          departement: ethers.utils.parseBytes32String(data.departement),
          description: ethers.utils.parseBytes32String(data.description)
        })
        console.log("SUBMIT RESULT --- ", result);
      } catch (error) {
        console.error({error})
      }
    },
    fetchDeclaration() {}
  }
})
