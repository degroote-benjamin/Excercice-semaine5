// exercice 1
// var homme = {
//     prenom: "ben",
//     nom: "degroote",
//     pays: "FRANCE",
//     age: 24,
//     payement: ["VISA", "MASTERCARD"],
//     getALL: function() {
//         alert(this.prenom);
//         alert(this.nom);
//         alert(2017 - this.age);
//     }
// };
//
// homme.getALL()
//
//
// var autoriser = {
//   paysautoriser : ["FRANCE","BELGIQUE","SUISSE"],
//   payementautoriser : ["VISA","CB","MASTERCARD"],
//   agemin : 10,
//   getage:function(){
//     if(this.agemin < homme.age){
//       alert("vous avez le bon age")
//     }
//     else{
//       alert("vous êtes trop jeune")
//     }
//
//     for(let i=0;i<this.paysautoriser.length;i++){
//       if(homme.pays.toUpperCase() === this.paysautoriser[i]){
//         alert("votre pays est autoriser")
//       }
//     }
//     var compt =0
//     for(let i=0;i<homme.payement.length;i++){
//       for(let y=0;y<this.payementautoriser.length;y++){
//         if(this.payementautoriser[y] === homme.payement[i].toUpperCase()){
//           compt++
//         }
//       }
//     }
//     if(compt >= 1){
//       alert("vos moyen de payement sont autoriser")
//     }
//   }
// }
// autoriser.getage()




// exercice 2

// function warrior (nom,va,def,pv) {
//   this.nom = nom;
//   this.va = va;
//   this.def = def;
//   this.pv = pv;
//   this.getattaque = function(wa2) {
//     alert(this.nom +" attaque " + wa2.nom + " il reste " + (wa2.pv = wa2.pv - this.va) + " pv");
//   };
// }
//
// var guerrier1 = new warrior("aaron", 50,60,70);
// var guerrier2 = new warrior("loup", 20,60,120);
//
//
//
// function magi (nom,va,def,pv,mana) {
//   this.nom = nom;
//   this.va = va;
//   this.def = def;
//   this.pv = pv;
//   this.mana = mana;
//   this.getattaque = function(wa2) {
//     alert(this.nom +" attaque " + wa2.nom + " il reste " + (wa2.pv - this.va) + " pv");
//   };
//   this.getsoin= function(){
//     if(this.mana > 9){
//     alert(this.nom +" se soigne " + (this.pv = this.pv + 10))
//   }
//   else{
//     alert("le magicien trébuche")
//   }
//   }
// }
//
// var magicien1 = new magi("mathieu", 50,60,500,10);
//
// guerrier1.getattaque(magicien1)
// guerrier2.getattaque(magicien1)
// magicien1.getsoin()


// exercice 3
var bonjour = document.getElementById("bonjour")
var tab = []
var i = 0
var produit = function(titre, phrase, description) {
    this.titre = titre;
    this.phrase = phrase;
    this.description = description
}
$('.click').on('click', function() {
    var formulaire = {
        titre: $(".titre").val(),
        phrase: $(".phrase").val(),
        description: $(".descri").val(),
        getProduit: function() {
            tab[i] = new produit(this.titre, this.phrase, this.description)
            bonjour.innerHTML += "<div class='bonjour col-3'><p> Titre :<br>" + tab[i].titre + "</p>" + "<p> Phrase : <br>" + tab[i].phrase + "</p>" + "<p> description : <br>" + tab[i].description + "</p></div>";
        }
    }
    formulaire.getProduit()
    $(".titre").val("")
    $(".phrase").val("")
    $(".descri").val("")
    i++
});
