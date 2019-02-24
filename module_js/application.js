import {AfficherTotal} from './AfficherTotal.js'
import {AnimLettre} from './AnimLettre.js'
import {AnimAccueil} from './AnimAccueil.js'

let titrePiece;
let titreAcceuil = 'Théâtre de Walt Disney';

let elmHeader = document.getElementById('header');
let elmHeaderAcceuil = document.getElementById('headerAcceuil');

document.getElementById("contenuBillets").classList.add('cacherElement');

let  monAnimLettre = new AnimAccueil(titreAcceuil, elmHeaderAcceuil, finAnim);

var elementsArray = document.querySelectorAll('img');

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
		document.getElementById("contenuBillets").classList.remove('cacherElement');
		document.getElementById("contenuAcceuil").classList.add('cacherElement');
		titrePiece = this.id;
		
	
			/*let titre = document.createElement('h1');
			let t = document.createTextNode(this.id);
			titre.appendChild(t);
			document.getElementById('header').appendChild(titre);*/

			let  monAnimLettre = new AnimLettre(titrePiece, elmHeader, finAnim);

			
    });
});

function finAnim() {
	console.log('animation terminée')
}






//////////////////// écouteurs + et - pour adultes ///////////////////////////////////////////////////////////////

document.getElementById("bttMoinsA").addEventListener("click", moinsAdultes);
document.getElementById("bttPlusA").addEventListener("click", plusAdultes);

//////////////////// écouteurs + et - pour enfants ///////////////////////////////////////////////////////////////

document.getElementById("bttMoinsE").addEventListener("click", moinsEnfants);
document.getElementById("bttPlusE").addEventListener("click", plusEnfants);

//////////////////// écouteur pour courrier //////////////////////////////////////////////////

document.getElementById("courrier").addEventListener("click", courrier);

//////////////////// écouteur pour total //////////////////////////////////////////////////

document.getElementById("totalFinal").addEventListener("click", confirmerTotal);

//////////////////// écouteur pour cendrillon //////////////////////////////////////////////////





//////////////////// functions - et + pour adultes ///////////////////////////////////////////////////////////////
function moinsAdultes()
{
	if (document.getElementById("adultes").value>0) {
		   var plus=window.parseFloat(document.getElementById("adultes").value)
		window.parseFloat(document.getElementById("adultes").value=--plus);
		document.getElementById("commande").value=window.parseInt(document.getElementById("adultes").value)*20-(window.parseFloat(document.getElementById("enfants").value)*7.50)+"$"
	}

	else {
		document.getElementById("adultes")==0
	};

 };

function plusAdultes(){ 

	var plus=window.parseFloat(document.getElementById("adultes").value)
	window.parseFloat(document.getElementById("adultes").value=++plus);
	document.getElementById("commande").value=window.parseInt(document.getElementById("adultes").value)*20+(window.parseFloat(document.getElementById("enfants").value)*7.50)+"$"
};

 //////////////////// functions - et + pour enfants ///////////////////////////////////////////////////////////////

function moinsEnfants() {

	if (document.getElementById("enfants").value>0) {
		var plus=window.parseFloat(document.getElementById("enfants").value)
		window.parseFloat(document.getElementById("enfants").value=--plus);
		document.getElementById("commande").value=window.parseInt(document.getElementById("adultes").value)*20+(window.parseFloat(document.getElementById("enfants").value)*7.50)+"$"
	}

	else {
		document.getElementById("enfants")==0
	};
}; 

function plusEnfants() {

	var plus=window.parseFloat(document.getElementById("enfants").value)
	window.parseFloat(document.getElementById("enfants").value=++plus);
	document.getElementById("commande").value=window.parseInt(document.getElementById("adultes").value)*20+(window.parseFloat(document.getElementById("enfants").value)*7.50)+"$"
};

function courrier() {

	if (document.getElementById("courrier").checked) {	

		document.getElementById("commande").value=window.parseFloat(document.getElementById("commande").value)+5+"$"
	}

	else{

		document.getElementById("commande").value=window.parseFloat(document.getElementById("commande").value)-5+"$"
	}
};

function confirmerTotal() { 

	let prenom, nom, rue, ville, codePostale, carte, adul, comm, total, valid=true;
	
	document.getElementById("erreurprenom").innerHTML=" "
	document.getElementById("erreurnom").innerHTML=" "
	document.getElementById("erreurrue").innerHTML=" "
	document.getElementById("erreurville").innerHTML=" "
	document.getElementById("erreurCode").innerHTML=" "
	document.getElementById("erreurnmbr").innerHTML=" "
	document.getElementById("erreurcourrier").innerHTML=" "
	

	/* les erreurs */

	if (document.getElementById("prenom").value=="")
	{
		valid=false
		document.getElementById("erreurprenom").innerHTML=" *! Prénom absent";
	};

	if (document.getElementById("nom").value=="")
	{
		valid=false
		document.getElementById("erreurnom").innerHTML=" *! Nom absent";
	}; 

	if (document.getElementById("rue").value=="")
	{
		valid=false
		document.getElementById("erreurrue").innerHTML=" *! Rue absente";
	};

	if (document.getElementById("ville").value=="")
	{
		valid=false
		document.getElementById("erreurville").innerHTML=" *! Ville absente";
	};

	if (document.getElementById("codePostale").value=="")
	{
		valid=false 
		document.getElementById("erreurCode").innerHTML=" *! Code postale absent";
	};
	
	if (document.getElementById("adultes").value==0)
	{
		valid=false
		document.getElementById("erreurnmbr").innerHTML=" *! Vous devez commander au moins 1 billet";
	};

	
		/*case a choche*/

	if (document.getElementById("payment").checked&&valid==true) 
	{
		//window.alert("Transaction confirmée...une facture vous sera postée")
	}
		else if (document.getElementById("courrier").checked&&valid==true) 
		{
			//carte= prompt("Entrez votre numero de carte de credit","");
			//window.alert("Transaction confirmée...porté à la carte "+carte)
		}
		
		else
		{   valid=false
			document.getElementById("erreurcourrier").innerHTML=" *! Vous devez chocher une case";
		};   


	if (valid==true)
	{
		prenom = document.getElementById("prenom").value;
		nom = document.getElementById("nom").value;
		rue = document.getElementById("rue").value;
		ville = document.getElementById("ville").value;
		codePostale = document.getElementById("codePostale").value;
		total = document.getElementById("commande").value;
		//adul=parseInt(document.getElementById("adultes")).value 
		//location.reload()
		;

		let  lePrenom = new AfficherTotal(titrePiece, prenom, nom, rue, ville, codePostale, total);


		
		

	};
};






