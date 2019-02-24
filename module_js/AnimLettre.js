import {
    Util
} from './Util.js'

export class AnimLettre {
    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {String} chaine - contient les lettres
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elmParent, fonction) {
        this.tabCouleur = ['#ffffff','#a5a5a5', '#8c6c6c', '#c7a3a3', '#d8a2a0', '#1d1c1c'];
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
            'mot')
        let i = 0 
        for (let uneLettre of lesLettres)
        {
            let elmlettre = this.creerElement(elmConteneur,
                'div',
                uneLettre,
                '')
            elmlettre.style.animationDelay = (i * 0.2) + "s";
            elmlettre.style.color = this.tabCouleur[(i++) % 6]
        }
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





