var homme = {
    prenom: "ben",
    nom: "degroote",
    pays: "france",
    age: 24,
    payement: ["visa", "mastercard"],
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
