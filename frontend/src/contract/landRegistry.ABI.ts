export const ABI = [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ERC1155InsufficientBalance",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "balance",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "needed",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC1155InvalidApprover",
    "inputs": [
      {
        "type": "address",
        "name": "approver",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC1155InvalidArrayLength",
    "inputs": [
      {
        "type": "uint256",
        "name": "idsLength",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "valuesLength",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC1155InvalidOperator",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC1155InvalidReceiver",
    "inputs": [
      {
        "type": "address",
        "name": "receiver",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC1155InvalidSender",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC1155MissingApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved",
        "internalType": "bool",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DeclarationInvalide",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NouveauTitreFoncier",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NouvelUtilisateur",
    "inputs": [
      {
        "type": "address",
        "name": "utilisateur",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NouvelleVente",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "prix",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ParcelleDeclaree",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ParcelleVendue",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "address",
        "name": "vendeur",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "address",
        "name": "acheteur",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferBatch",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids",
        "internalType": "uint256[]",
        "indexed": false
      },
      {
        "type": "uint256[]",
        "name": "values",
        "internalType": "uint256[]",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferSingle",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "URI",
    "inputs": [
      {
        "type": "string",
        "name": "value",
        "internalType": "string",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "id",
        "internalType": "uint256",
        "indexed": true
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "VenteRetiree",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "utilisateurSupprime",
    "inputs": [
      {
        "type": "address",
        "name": "utilisateur",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "date",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "acheterParcelle",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "administrateur",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "ajouterUtilisateur",
    "inputs": [
      {
        "type": "uint256",
        "name": "numID",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "user",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "nom",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "prenom",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "id",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "inputs": [
      {
        "type": "address[]",
        "name": "accounts",
        "internalType": "address[]"
      },
      {
        "type": "uint256[]",
        "name": "ids",
        "internalType": "uint256[]"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "declarerParcelle",
    "inputs": [
      {
        "type": "tuple",
        "name": "infosParcelle",
        "internalType": "struct GestionDeTerre.Declaration",
        "components": [
          {
            "type": "uint256",
            "name": "NUP",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "ilot",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "superficieEnM2",
            "internalType": "uint256"
          },
          {
            "type": "bytes32",
            "name": "commune",
            "internalType": "bytes32"
          },
          {
            "type": "bytes32",
            "name": "quartier",
            "internalType": "bytes32"
          },
          {
            "type": "bytes32",
            "name": "arrondissement",
            "internalType": "bytes32"
          },
          {
            "type": "bytes32",
            "name": "departement",
            "internalType": "bytes32"
          },
          {
            "type": "bytes32",
            "name": "description",
            "internalType": "bytes32"
          }
        ]
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "dernierID",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "estEnVente",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "isApprovedForAll",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "name": "listerParcellesEnVente",
    "inputs": [
      {
        "type": "uint256",
        "name": "debut",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "nombre",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "mettreEnVente",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "prix",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "nupEstDeclare",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "NUP",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "ilot",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "numTitreFoncier",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "superficieEnM2",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "dateDelivrenceTitreFoncier",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "proprietaire",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "commune",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "quartier",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "departement",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "arrondissement",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "description",
        "internalType": "bytes32"
      },
      {
        "type": "bool",
        "name": "enVente",
        "internalType": "bool"
      },
      {
        "type": "uint8",
        "name": "validation",
        "internalType": "enum GestionnaireDeParcelles.StatusValidation"
      }
    ],
    "name": "parcelles",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "rejeterDeclaration",
    "inputs": [
      {
        "type": "uint256",
        "name": "IDParcelle",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "retirerDeLaVente",
    "inputs": [
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeBatchTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256[]",
        "name": "ids",
        "internalType": "uint256[]"
      },
      {
        "type": "uint256[]",
        "name": "values",
        "internalType": "uint256[]"
      },
      {
        "type": "bytes",
        "name": "data",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "iDParcelle",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "surface",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "donnees",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "internalType": "bool"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "supportsInterface",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "supprimerUtilisateur",
    "inputs": [
      {
        "type": "address",
        "name": "utilisateur",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "name": "uri",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "estAuthentifie",
        "internalType": "bool"
      },
      {
        "type": "uint256",
        "name": "uId",
        "internalType": "uint256"
      },
      {
        "type": "bytes32",
        "name": "nom",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "prenom",
        "internalType": "bytes32"
      }
    ],
    "name": "utilisateurs",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "validerDeclaration",
    "inputs": [
      {
        "type": "uint256",
        "name": "IDParcelle",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "idParcelle",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "prix",
        "internalType": "uint256"
      }
    ],
    "name": "ventes",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ]
  }
]