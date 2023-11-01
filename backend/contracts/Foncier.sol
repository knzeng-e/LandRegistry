// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Supposons que nous avons une interface ERC1155 préexistante 
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract GestionDeTerre is ERC1155("") {
    
    struct Utilisateur {
      bool estAuthentifie;
      uint256 uId;
      string nom;
      string prenom;
    }

    struct Parcelle {
      uint256 NUP;
      uint256 ilot;
      uint256 numTitreFoncier;
      uint256 superficieEnM2;
      uint256 dateDelivrenceTitreFoncier;
      address proprietaire;
      string commune;
      string quartier;
      string departement;
      string arrondissement;
      string description;
      bool enVente;
      StatusValidation validation;
    }

    struct Declaration {
      uint256 NUP; //TODO: check NUP provider
      uint256 ilot;
      uint256 superficieEnM2;
      string commune;
      string quartier;
      string arrondissement;
      string departement;
      string description;
    }

    struct Vente {
      uint256 idParcelle;
      uint256 prix; // prix en wei
    }

    enum StatusValidation {
      EnAttente,
      Valide,
      Rejete
    }

    mapping(uint256 => Vente) public ventes;
    mapping(address => Utilisateur) public utilisateurs;
    mapping(uint256 => Parcelle) public parcelles;
    mapping(uint256 => bool) public nupEstDeclare;
    
    uint256[] listeParcellesEnVentes;

    address public administrateur;
    uint256 public dernierID;


    event NouveauTitreFoncier(uint256 iDParcelle, uint256 date);
    event NouvelUtilisateur(address utilisateur, uint256 date);
    event utilisateurSupprime(address utilisateur, uint256 date);
    event TerrainDeclare(uint256 iDParcelle, uint256 date);
    event DeclarationInvalide(uint256 iDParcelle, uint256 date);
    event nouvelleVente(uint256 iDParcelle, uint256 prix, uint256 date);
    event VenteRetiree(uint256 iDParcelle, uint256 date);
    event ParcelleVendue(uint256 iDParcelle, address vendeur,  address acheteur, uint256 date);
    
    // Modificateurs
    modifier estAdmin() {
      require(msg.sender == administrateur, "Seul l'administrateur peut effectuer cette operation");
      _;
    }

    modifier estAuthentifie() {
        require(utilisateurs[msg.sender].estAuthentifie, "Utilisateur inconnu");
        _;
    }

    modifier estProprietaire(uint256 iDParcelle) {
        require(parcelles[iDParcelle].proprietaire == msg.sender, "Seul le proprietaire du terrain peut effectuer cette operation");
        _;
    }

    constructor() {
        administrateur = msg.sender;
    }

    // Fonctions d'administrateur

    function ajouterUtilisateur(uint256 numID, address user, string memory nom, string memory prenom) public estAdmin {
        require(utilisateurs[user].estAuthentifie == false, "Cet utilisateur existe deja");
        utilisateurs[user].estAuthentifie = true;
        utilisateurs[user].nom = nom;
        utilisateurs[user].prenom = prenom;
        utilisateurs[user].uId = numID;
        emit NouvelUtilisateur(user, block.timestamp);
    }

    function supprimerUtilisateur(address utilisateur) public estAdmin {
        utilisateurs[utilisateur].estAuthentifie = false;
        emit utilisateurSupprime(utilisateur, block.timestamp);
    }

    // Fonctions ERC1155 pour la gestion de terrain

    // function declarerTerrain(uint256 surface, string memory description) public estAuthentifie {
    function declarerParcelle(Declaration memory infosParcelle) public estAuthentifie {
        dernierID++;
        uint256 nup = infosParcelle.NUP;

        require(nupEstDeclare[nup] == false, "Ce Terrain est deja attribue");

        parcelles[dernierID] = Parcelle({
            NUP: infosParcelle.NUP,
            ilot: infosParcelle.ilot,
            numTitreFoncier: dernierID,
            superficieEnM2: infosParcelle.superficieEnM2,
            dateDelivrenceTitreFoncier: 0,
            proprietaire: msg.sender,
            commune: infosParcelle.commune,
            quartier: infosParcelle.quartier,
            arrondissement: infosParcelle.arrondissement,
            departement: infosParcelle.departement,
            description: infosParcelle.description,
            enVente: false,
            validation: StatusValidation.EnAttente
        });
        emit TerrainDeclare(dernierID, block.timestamp);
    }

    // valider declaration de Terrain
    function validerDeclaration(uint256 IDParcelle) public estAdmin {
        require(parcelles[IDParcelle].validation != StatusValidation.Valide, "Cette declaration est deja traitee");
        parcelles[IDParcelle].validation = StatusValidation.Valide;
        parcelles[IDParcelle].dateDelivrenceTitreFoncier = block.timestamp;
        nupEstDeclare[parcelles[IDParcelle].NUP] = true;
        _mint(parcelles[IDParcelle].proprietaire, dernierID, parcelles[dernierID].superficieEnM2, "");
        emit NouveauTitreFoncier(IDParcelle, block.timestamp);
    }

    // rejeter declaration de Terrain
    function rejeterDeclaration(uint256 IDParcelle) public estAdmin {
        require(parcelles[IDParcelle].validation != StatusValidation.Valide, "Cette declaration est deja traitee");
        parcelles[IDParcelle].validation = StatusValidation.Rejete;
        emit DeclarationInvalide(IDParcelle, block.timestamp);
    }

    // permet de transferer la propriete d'un terrain sans passer par une vente
    function safeTransferFrom(address from, address to, uint256 iDParcelle, uint256 surface, bytes memory donnees) public override estAuthentifie {
        require(parcelles[iDParcelle].proprietaire == from, "Seul le proprietaire du terrain peut autoriser cette operation");
        parcelles[iDParcelle].proprietaire = to;
        super.safeTransferFrom(from, to, iDParcelle, surface, donnees);
    }

    // Fonctions pour gérer la mise en vente

    function mettreEnVente(uint256 iDParcelle, uint256 prix) public estAuthentifie estProprietaire(iDParcelle) {
        require(parcelles[iDParcelle].validation == StatusValidation.Valide, "Terrain non valide");
        require(parcelles[iDParcelle].enVente == false, "Terrain deja en vente");
        
        ventes[iDParcelle] = Vente({
            idParcelle: iDParcelle,
            prix: prix
        });
        parcelles[iDParcelle].enVente = true;
        listeParcellesEnVentes.push(iDParcelle);
        emit nouvelleVente(iDParcelle, prix, block.timestamp);
    }

    function retirerDeLaVente(uint256 iDParcelle) public estAuthentifie estProprietaire(iDParcelle) {
        require(parcelles[iDParcelle].enVente, "Terrain n'est pas en vente");
        
        //reset de la vente
        delete ventes[iDParcelle];
        parcelles[iDParcelle].enVente = false;
        _retirerDeLaListe(iDParcelle);
        emit VenteRetiree(iDParcelle, block.timestamp);
    }

    function acheterParcelle(uint256 iDParcelle) public payable estAuthentifie {
        require(msg.value == ventes[iDParcelle].prix, "Montant incorrect");
        require(parcelles[iDParcelle].enVente, "Cette parcelle n'est pas en vente");
        
        address ancienProprietaire = parcelles[iDParcelle].proprietaire;
        uint256 surface = balanceOf(ancienProprietaire, iDParcelle);
        
        // Transférer la propriété au nouvel acheteur
        parcelles[iDParcelle].proprietaire = msg.sender;
        _safeTransferFrom(ancienProprietaire, msg.sender, iDParcelle, surface, "");
        
        // Retirer le terrain de la vente
        parcelles[iDParcelle].enVente = false;
        _retirerDeLaListe(iDParcelle);

        emit ParcelleVendue(iDParcelle, ancienProprietaire, msg.sender, block.timestamp);
        // Transférer l'argent au propriétaire actuel
        payable(ancienProprietaire).call{value: msg.value}("");
    }

    // Fonctions de consultation
    function estEnVente(uint256 iDParcelle) public view returns(bool, uint256) {
        return (parcelles[iDParcelle].enVente, ventes[iDParcelle].prix);
    }

    function listerParcellesEnVente(uint256 debut, uint256 nombre) public view returns (uint256[] memory) {
    require(debut < listeParcellesEnVentes.length, "Debut hors limites");

    uint256 fin = debut + nombre;
    if (fin > listeParcellesEnVentes.length) {
        fin = listeParcellesEnVentes.length;
    }

    uint256[] memory resultats = new uint256[](fin - debut);

    for (uint256 i = debut; i < fin; i++) {
        resultats[i - debut] = listeParcellesEnVentes[i];
    }

    return resultats;
}


    function _retirerDeLaListe(uint256 iDParcelle) private {
        uint256 nbTerrainsEnVentes = listeParcellesEnVentes.length;
        for (uint i; i < nbTerrainsEnVentes; i++) {
            if (listeParcellesEnVentes[i] == iDParcelle) {
                listeParcellesEnVentes[i] = listeParcellesEnVentes[nbTerrainsEnVentes - 1];
                listeParcellesEnVentes.pop();
                break;
            }
        }
    }

}
