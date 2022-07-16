// Déclaration et affectation de la variable paragraphe
const paragraphe = document.querySelector("p");
// On crée un événement au chargement de la page qui cache le paragraphe et qui fait apparaître une boite de dialogue
window.onload = function(){
    paragraphe.hidden = true;
    let answer = window.prompt("Voulez-vous voir le contenu de cette page (o/n) ? \n" + "Si oui, veuillez saisir o ou O.");
    if(answer == "o" || answer == "O"){
        paragraphe.hidden = false;
    }else{
        paragraphe.hidden = true;
    } 
}