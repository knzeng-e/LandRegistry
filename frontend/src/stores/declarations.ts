import { defineStore } from 'pinia'
import { ethers } from "ethers";
import { useAccountStore } from './account'

const useDeclarationStore = defineStore('declaration', {

    state: () => {
        return {
            declarations: [],
            declaration: {

            }
        }
    },

    actions: {
        sendDeclaration() {
            const accountStore = useAccountStore()
            console.log(ethers)
            const provider = new ethers.Providers.Web3Provider(window.ethereum)
        },
        fetchDeclaration() {}
    }
})