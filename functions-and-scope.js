// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */
console.log('opdr 1')

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// * Hoe kan ik iedere waarde van de array checken op deze conditie?
const filterArray = grades.filter((waarde) => waarde > 7);

// 'gefilterdeArray' bevat nu alleen waarden die groter zijn dan 5
console.log(filterArray);

// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
grades.forEach((waarde) => {
    if (waarde > 7) {
        // Doe iets met de waarde die aan de voorwaarde voldoet
        console.log(waarde);
    }
});


const cumLaudes = grades.filter((waarde) => waarde > 7);

// Log het totale aantal cijfers hoger dan 7
console.log(cumLaudes.length);


// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
console.log('opdr 1b')
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
function cumLaude(grades) {
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8)
        {
    count = count + 1;
}
}
return count;
}

const diplomaOne = cumLaude(grades);
const diplomaTwo =cumLaude([6, 4, 5]);
const diplomaThree = cumLaude([8, 9, 4, 6, 10]);


// Log het totale aantal cijfers hoger dan 7
console.log(diplomaOne, diplomaTwo, diplomaThree);


/* Opdracht  2: Gemiddeld cijfer */
console.log('opdr 2a')
/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// deze variabele geïnitialiseerd met de waarde 0
let total = 0;

for (let i = 0; i < grades.length; i++) {

    total = total + grades[i];
}

console.log(total / grades.length);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
console.log('opdr 2b')
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
function averageGrades(average) {
    let total = 0;

    for (let i = 0; i < average.length; i++) {
        total = total + average[i];

    }
    return total / average.length;
}

const averageOnne = averageGrades(grades);
const averagetwwo = averageGrades([6, 4, 5]);
const averagethrree = averageGrades([8, 9, 4, 6, 10]);


console.log(averageOnne, averagetwwo, averagethrree);

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
console.log('opdr 2c')

// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
function averageGradess(averages) {
    let total = 0;

    for (let i = 0; i < averages.length; i++) {
        total = total + averages[i];

    }
    const gemiddelde = total / averages.length;

    const afgerondGemiddelde = gemiddelde.toFixed(2);

    return afgerondGemiddelde;
}

const averageOne = averageGradess(grades);
const averagetwo = averageGradess([6, 4, 5]);
const averagethree = averageGradess([8, 9, 4, 6, 10]);


console.log(averageOne, averagetwo, averagethree);

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
