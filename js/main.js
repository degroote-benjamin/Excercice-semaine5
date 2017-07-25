var homme = {
    prenom: "ben",
    nom: "degroote",
    pays: "FRANCE",
    age: 24,
    payement: ["VISA", "MASTERCARD"],
    getprenom: function() {
        alert(this.prenom);
    },
    getnom: function() {
        alert(this.nom);
    },
    getnai: function() {
      alert(2017 - this.age);
    }
};

homme.getprenom()
homme.getnom()
homme.getnai()


var autoriser = {
  paysautoriser : ["FRANCE","BELGIQUE","SUISSE"],
  payementautoriser : ["VISA","CB","MASTERCARD"],
  agemin : 10,
  getage:function(){
    if(this.agemin < homme.age){
      alert("vous avez le bon age")
    }
    else{
      alert("vous êtes trop jeune")
    }
  },
  getpays:function(){
    for(let i=0;i<this.paysautoriser.length;i++){
      if(homme.pays.toUpperCase() === this.paysautoriser[i]){
        alert("votre pays est autoriser")
      }
    }
  },
  getpay:function(){
    var compt =0
    for(let i=0;i<homme.payement.length;i++){
      for(let y=0;y<this.payementautoriser.length;y++){
        if(this.payementautoriser[y] === homme.payement[i].toUpperCase()){
          compt++
        }
      }
    }
    if(compt >= 1){
      alert("vos moyen de payement sont autoriser")
    }
  }
}
autoriser.getage()
autoriser.getpays()
autoriser.getpay()
