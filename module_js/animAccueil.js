import {
    Util
} from './Util.js'

export class AnimAccueil {
    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {String} chaine - contient les lettres
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elmParent, fonction) {
        this.tabCouleur = ['#CC231E', '#235E6F', '#009900', '#34A65F', '#0F8A5F', '#F5624D'];
        this.lesLettres = lesLettres
        this.elmParent = elmParent;
        this.fonction = fonction
        console.log('debut')
        this.animerLettre(this.lesLettres)
    }


    animerLettre(lesLettres) {
        console.log('lettre = ' +lesLettres)
       let elmConteneur = this.creerElement(this.elmParent,
           'section',
           '',
           'rubberBand')

        let elmlettre = this.creerElement(elmConteneur,
            'div',
            this.lesLettres,
            '')

            //elmlettre.style.animationDelay = 5 + "s";
   }



    creerElement(elmParent, balise, contenu, classCSS) {
        console.log('creerElement' + balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        if (classCSS != ''){
            noeud.classList.add(classCSS)
        }
        elmParent.appendChild(noeud)
        return noeud
    }

}    





