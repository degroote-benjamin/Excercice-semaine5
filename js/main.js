// exercice 1
var homme = {
    prenom: "ben",
    nom: "degroote",
    pays: "FRANCE",
    age: 24,
    payement: ["VISA", "MASTERCARD"],
    getALL: function() {
        alert(this.prenom);
        alert(this.nom);
        alert(2017 - this.age);
    }
};


var autoriser = {
    paysautoriser: ["FRANCE", "BELGIQUE", "SUISSE"],
    payementautoriser: ["VISA", "CB", "MASTERCARD"],
    agemin: 10,
    getage: function() {
        if (this.agemin < homme.age) {
            alert("vous avez le bon age")
        } else {
            alert("vous êtes trop jeune")
        }

        for (let i = 0; i < this.paysautoriser.length; i++) {
            if (homme.pays.toUpperCase() === this.paysautoriser[i]) {
                alert("votre pays est autoriser")
            }
        }
        var compt = 0
        for (let i = 0; i < homme.payement.length; i++) {
            for (let y = 0; y < this.payementautoriser.length; y++) {
                if (this.payementautoriser[y] === homme.payement[i].toUpperCase()) {
                    compt++
                }
            }
        }
        if (compt >= 1) {
            alert("vos moyen de payement sont autoriser")
        }
    }
}

$('.exo1').on('click', function() {
    homme.getALL()
    autoriser.getage()
});



// exercice 2

function warrior(nom, va, def, pv) {
    this.nom = nom;
    this.va = va;
    this.def = def;
    this.pv = pv;
    this.getattaque = function(wa2) {
        alert(this.nom + " attaque " + wa2.nom + " il reste " + (wa2.pv = wa2.pv - this.va) + " pv");
    };
}

var guerrier1 = new warrior("aaron", 50, 60, 70);
var guerrier2 = new warrior("loup", 20, 60, 120);



function magi(nom, va, def, pv, mana) {
    this.nom = nom;
    this.va = va;
    this.def = def;
    this.pv = pv;
    this.mana = mana;
    this.getattaque = function(wa2) {
        alert(this.nom + " attaque " + wa2.nom + " il reste " + (wa2.pv = wa2.pv - this.va) + " pv");
    };
    this.getsoin = function() {
        if (this.mana > 9) {
            alert(this.nom + " se soigne " + (this.pv = this.pv + 10))
        } else {
            alert("le magicien trébuche")
        }
    }
}

var magicien1 = new magi("mathieu", 50, 60, 500, 10);



$('.exo2').on('click', function() {
  guerrier1.getattaque(magicien1)
  guerrier2.getattaque(magicien1)
  magicien1.getsoin()
});

// exercice 3
var bonjour = document.getElementById("bonjour")
var tab = []
var i = 0

var produit = function(titre, phrase, description) {
    this.titre = titre;
    this.phrase = phrase;
    this.description = description
}


var formulaire = function(titre, phrase, description) {
    this.titre = titre;
    this.phrase = phrase;
    this.description = description;
    this.Produit = function() {
        tab[i] = new produit(this.titre, this.phrase, this.description)
        bonjour.innerHTML += "<div class='bonjour col-3'><p> Titre :<br>" + tab[i].titre + "</p>" + "<p> Phrase : <br>" + tab[i].phrase + "</p>" + "<p> description : <br>" + tab[i].description + "</p></div>";
    }
}

$('.click').on('click', function() {
    var form = new formulaire($(".titre").val(), $(".phrase").val(), $(".descri").val())
    form.Produit()
    $(".titre").val("")
    $(".phrase").val("")
    $(".descri").val("")
    i++
});


// exercice 4
// var table = []
// var table1 = []
// var b = "";
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {}
// };
//
// xmlhttp.open("GET", "bonjour.json", true);
// xmlhttp.send();
//
// $.getJSON('bonjour.json', function(data) {
//     $.each(data, function(index, d) {
//         table[index] = d.Prenom + " " + d.Nom + " " + d.Age
//     });
//     for (i = 0; i < table.length; i++) {
//         table1[i] = table[i].split(" ");
//     }
// });
//
//
// var html = {
//     creation: function() {
//         bonjour = "<table>"
//         for (let i = 0; i < table1.length; i++) {
//             b += "<tr>" + "<td></td>".repeat(table1.length) + "</tr>";
//         }
//         b += "</table>"
//         // bonjour = "<table>" + ("<tr>" + "<td></td>".repeat(table1.length) + "</tr>").repeat(table1.length) + "</table>"
//     },
//     affichage: function() {
//         $("#demo").append(b)
//     }
// };
//
//
// $(window).load(function() {
//     html.creation();
//     html.affichage();
//     for (let i = 1; i < table1.length + 1; i++) {
//         for (let y = 1; y < table1.legnth + 1; y++) {
//             $("tr:nth-child(i) > td:nth-child(y)").append(table1[i - 1][y - 1])
//         }
//     }
//     $("tr:nth-child(1) > td:nth-child(2)").append(table1[1][1])
// });
