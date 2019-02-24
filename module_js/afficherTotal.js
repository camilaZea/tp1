
export class AfficherTotal { 

    constructor( titrePiece, prenom, nom, rue, ville, codePostale, total) {
        
        this.titrePiece = titrePiece;
        this.prenom = prenom;
        this.nom = nom;
        this.rue = rue;
        this.ville = ville;
        this.codePostale = codePostale;
        this.total = total;
        
        this.cacherForm();
        this.afficherNom();
        this.afficherAdress();
        this.afficherTotalPayer();
       
        document.getElementById("revenirAcceul").addEventListener("click", this.revenirAcceuil.bind(this) );
                      
    }

  
///// function cache le formulaire /////
    cacherForm() {

        let elementForm = document.getElementsByClassName("form");

        document.getElementById("infoCompletes").classList.remove('CinfoCompletes');
        document.getElementById("formulaire").classList.add('uneColonne');

        for (let i = 0; i < elementForm.length; i++) {

        elementForm[i].classList.add('cacherElement');
        }
    }
    
    ///// function afficher le nom /////
    afficherNom() {

        let elmH4 = document.createElement('h4');
        let elmH3 = document.createElement('h3');

        let texteContenu = this.prenom + " " + this.nom;
        let titreTextContenu =  " Nom Complet : " 

        let texte = document.createTextNode(texteContenu);
        let titreTexte = document.createTextNode(titreTextContenu);

        elmH4.appendChild(texte);
        elmH3.appendChild(titreTexte);

        document.getElementById('iNomComplet').appendChild(elmH3);
        document.getElementById('iNomComplet').appendChild(elmH4);
    }

    ///// function afficher l'adresse /////
    afficherAdress() {

        let elmH4 = document.createElement('h4');
        let elmH3 = document.createElement('h3');

        let texteContenu = this.rue + " " + this.ville + " " + this.codePostale;
        let titreTextContenu =  " Votre adresse : " 

        let texte = document.createTextNode(texteContenu);
        let titreTexte = document.createTextNode(titreTextContenu);

        elmH4.appendChild(texte);
        elmH3.appendChild(titreTexte);

        document.getElementById('iAdresseComplet').appendChild(elmH3);
        document.getElementById('iAdresseComplet').appendChild(elmH4);
   }

   ///// function afficher total $$ /////
    afficherTotalPayer() {

        let elmH4 = document.createElement('h4');
        let elmH3 = document.createElement('h3');

        let texteContenu = this.total ;
        let titreTextContenu =  " Total : " 

        let texte = document.createTextNode(texteContenu);
        let titreTexte = document.createTextNode(titreTextContenu);

        elmH4.appendChild(texte);
        elmH3.appendChild(titreTexte);

        document.getElementById('iTotal').appendChild(elmH3);
        document.getElementById('iTotal').appendChild(elmH4);
    }
    
    revenirAcceuil(){

        window.open('./billets.html', '_self');

    }

}