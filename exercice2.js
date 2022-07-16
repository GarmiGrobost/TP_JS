
/**
* Crée un élément du DOM et le retourne
* @param {String} markupname 
* @param {String} text 
* @param {DomElement} parent 
* @param {Array} attributes
* @return {DomElement}
*/
function createDOMElement(markupname, text, parent, attributes = []) {
    const dom_element = document.createElement(markupname);
    dom_element.textContent = text;
    parent.appendChild(dom_element);
  
    if (attributes.length) {
      attributes.forEach((attribute => {
        if (attribute.name && attribute.value) {
          dom_element.setAttribute(attribute.name, attribute.value);
        }
      }))
    }
    return dom_element;
  }

// Création de la balise header
const header = createDOMElement("header", "", document.body, [{name: "style", value: "display: flex; flex-direction: column"}]);

// Création des boutons
for(let i = 0; i < 3; i++){
    if(i == 0) createDOMElement("boutton", "Compétences", header, [{name: "id", value: "btn-skills"}]);
    if(i == 1) createDOMElement("boutton", "Expériences", header, [{name: "id", value: "btn-experience"}]);
    if(i == 2) createDOMElement("boutton", "Formation", header, [{name: "id", value: "btn-training"}]);
}


const buttonSkills = document.getElementById("btn-skills");
buttonSkills.style.cursor = "pointer";
// Création de la balise main
const main = createDOMElement("main", "", document.body,);
// Evénement au click sur le bouton Compétences
buttonSkills.onclick = function(){
    // On ajoute un titre dans la balise main
    const title1 = createDOMElement("h1", "Compétences", main, [{name: "class", value: "content-skills"}]);
    // On ajoute un paragraphe dans la balise main
    const competence = createDOMElement("p", "Competence ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", main,[{name: "class", value: "content-skills"}]);
    competence.style.textAlign = "justify";

    const contentTraining = document.querySelectorAll(".content");
    contentTraining.forEach((element)=>{
        if(!element.hidden){
            element.hidden = true;
        }
    })
    const contentExperience = document.querySelectorAll(".content-experience");
    contentExperience.forEach((element)=>{
        if(!element.hidden){
            element.hidden = true;
        }
    })
}

const buttonExperience = document.getElementById("btn-experience");
buttonExperience.style.cursor = "pointer";
// Evénement au click sur le bouton Expériences
buttonExperience.onclick = function(){
    // On ajoute un titre dans la balise main
    const title2 = createDOMElement("h1", "Expériences", main, [{name: "class", value: "content-experience"}]);
    // On ajoute un paragraphe dans la balise main
    const experience = createDOMElement("p", "Experience sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", main, [{name: "class", value: "content-experience"}]);
    experience.style.textAlign = "justify";
    
    const contentSkills = document.querySelectorAll(".content-skills");
    contentSkills.forEach((element)=>{
        if(!element.hidden){
           element.hidden = true;
        }
    })
    const content = document.querySelectorAll(".content");
    content.forEach((element)=>{
        if(!element.hidden){
            element.hidden = true;
        }
    })
    
}

const buttonTraining = document.getElementById("btn-training");
buttonTraining.style.cursor = "pointer";
// Evénement au click sur le bouton Formation
buttonTraining.onclick = function(){
    // On ajoute un titre dans la balise main
    const title3 = createDOMElement("h1", "Formation", main, [{name: "class", value: "content"}]);
    // On ajoute un paragraphe dans la balise main
    const Formation = createDOMElement("p", "Formation adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", main, [{name: "class", value: "content"}]);
    Formation.style.textAlign = "justify";
    
    const contentExperience = document.querySelectorAll(".content-experience");
    contentExperience.forEach((element)=>{
        if(!element.hidden){
            element.hidden = true;
        }
    })
    const contentSkills = document.querySelectorAll(".content-skills");
    contentSkills.forEach((element)=>{
        if(!element.hidden){
            element.hidden = true;
        }
    })  
}




