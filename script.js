function maVariable1(){
    var nemo = 1
    console.log('Ma variable 1',nemo);
};
maVariable1();

function maVariable2(int){
    
    console.log("Ma Variable 2",int);
};
maVariable2(1);

var eleves = [{
    nom: 'Mayline',
    moyenne: 14,
    age: 7,
    present: true
}, {
    nom: 'Ezéchiel',
    moyenne: 15,
    age: 3,
    present: true
}, {
    nom: 'Julien',
    moyenne: 9,
    age: 37,
    present: false
}
]
function afficheQuiALaMoyenne(eleves) {
    for (var i = 0; i < eleves.length; i++) {
        var eleve = eleves[i]
        if (eleve.moyenne >= 10) {
            console.log(eleve.nom + " A la Moyenne")
        }
        for (var j in eleve){
            
            console.log('j',j)
            console.log('j',eleve[j])
        }
        
    }
    eleves.forEach((eleve) => {
        console.log("eleve", eleve);
        console.log("age", eleve.age);

    });
 
}
afficheQuiALaMoyenne(eleves)
console.log(eleves[0])
console.log(eleves[1])
console.log(eleves[2])
console.log(eleves[0].nom + ' Je suis un String')
console.log(eleves[1].age + ' Je suis un Entier')
console.log(eleves[2].present + ' Je suis un Boolean')
console.log(eleves)
//Côté console
//Ajouter un élément à la fin du tableau:
//eleves.push('adresse');
//Ajouter un élément au début du Tableau:
//elves.unshift('1234');
//Supprimer un élément au début du Tableau:
//let removedItem = eleves.shift();
//Supprimer un élément à la fin du Tableau:
//eleves.pop();


//Incrémenter
var toto = 0
while (toto < 1) {
    toto = toto + 1
}
console.log(toto)

var tata = 0
while (tata < 1) {
    
    tata++
}
console.log(tata)

var titi = 0
while (titi < 1) {
    if (titi == 1) {
        break
    }
    titi++
}
console.log(titi)
var tutu = 0
for (var tutu = 0; tutu < 1; tutu++) {
}
console.log(tutu)

var juju = 0
++juju
console.log(juju)

//Décrémenter:

var lili = 1
for (var lili = 1; lili > 0 ; lili--) {    
}
console.log(lili)

var lulu = 1
while (lulu > 0) {
    if (lulu == 0){
        break
    }
    lulu--
}
console.log(lulu)

var lala = 1
while (lala > 0) {
    
    lala--
}
console.log(lala)

var lolo = 1
while (lolo > 0) {
    lolo = lolo - 1
}
console.log(lolo)

var jojo = 1
--jojo
console.log(jojo)

let projet = {
    nom:"Organizator",
    date: new Date(),
    client:"Jenn Suipressé",
    acteurs: ["développeurs", "chef de projets"]
}
let {nom, date, client, acteurs} = projet
//Ajouter une clé et une valeur 
//projet.reunionDeCrise = "Faites Vos Taches!!!!!!!";
projet.equipementDeSurvie = "Solde sur les armures Réunions";
console.log(projet.reunionDeCrise);
console.log(projet.equipementDeSurvie);
//delete projet.equipementDeSurvie;

function ajouter(projet) {
    projet.reunionDeCrise = 'Abandon de poste'
    console.log(projet.reunionDeCrise)
}
ajouter(projet);

function supprimer(projet) { 
    console.log(projet)
    if (projet && projet.reunionDeCrise){
    delete projet.reunionDeCrise
    console.log(projet)
    console.log('yes')
}else{
    console.log('no')
}
}
supprimer(projet);
supprimer();

