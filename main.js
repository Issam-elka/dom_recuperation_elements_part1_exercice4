//#1
console.log("Affiche le contenu textuel du second h1 :");
let secondH1 = document.getElementsByTagName('h1')[1].innerText;
console.log(secondH1);

//#2
console.log("Affiche le contenu textuel du dernier li :");
let li = document.getElementsByTagName('li')[3];
let dernierLi = li.lastElementChild;
console.log(li.innerText);

//#3
console.log("Affiche le contenu textuel du premier p en majuscule :");
let p = document.getElementsByTagName('p')[0].innerText.toUpperCase();
console.log(p);

//#4
console.log("Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule :");

let liBoucle = Array.from(document.getElementsByTagName('li'));
console.log("Ma liste: " );

liBoucle.forEach(element => {
    console.log(element.innerText.toUpperCase());
});

