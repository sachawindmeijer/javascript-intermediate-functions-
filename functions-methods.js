// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
console.log("opdr 1")
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// function getEmailDomain(email) {
//     // stap 1 zoekt naar @
//     const atIndex = email.indexOf("@");
//     //deze geeft nummer 7
//
//     // als @ word gevonden
//     if (atIndex !== -1) {
//         // substring-functie om het deel na "@" op te halen
//         const domain = email.substring(atIndex + 1);
//         return domain;
//     } else {
//         return "";
//     }
// }
//
// console.log(getEmailDomain("n.eeken@novi-education.nl"))
// console.log(getEmailDomain("t.mellink@novi.nl"))
// console.log(getEmailDomain("a.wiersma@outlook.com"))


/* Opdracht  2 */
console.log("opdr 2")
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
// function typeOfEmail(emailAddress) {

//wat moet het doen
function typeOfEmail(email) {
    const noviadress = ["novi.nl", "novi-education"];

    const atIndex = email.indexOf("@");
    if (atIndex === -1) {
        return "ongeldig";
    }

    const domein = email.substring(atIndex + 1);

    // deze checkt of het emailadres een novi domein heeft (medewerker),
    if (noviadress.includes(domein)) {
        return "Medewerker";
    }

    // deze checkt of het emailadres Novi-education-domeinen heeft (studenten)
    if (domein === "novi-education.nl") {
        return "Student";
    }

    // Als het domein niet overeenkomt, wordt het extern
    return "Extern";
}

console.log(typeOfEmail("n.eeken@novi-education.nl"))
console.log(typeOfEmail("t.mellink@novi.nl"))
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"))
console.log(typeOfEmail("a.wiersma@outlook.com"))


/* Opdracht  3 */
console.log('opdr 3')
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
function checkEmailValidity(email) {
    // Controleer of er een @ in het e-mailadres voorkomt
    if (email.indexOf('@') === -1) {
        return false;
    }

    // Controleer of er een ',' in het e-mailadres voorkomt
    if (email.indexOf(',') !== -1) {
        return false;
    }

    // Controleer of het laatste karakter geen '.' is
    if (email.endsWith('.')) {
        return false;
    }

    // Als aan alle voorwaarden is voldaan, is het e-mailadres geldig
    return true;
}

// Voorbeeldgebruik:
const email1 = "n.eeken@novi.nl";
const email2 = "tessmellink@novi.nl";
const email3 = "n.eekenanovi.nl";
const email4 = "n.eeken@novinl.";
const email5 = "tessmellink@novi,nl";


console.log(checkEmailValidity(email1));
console.log(checkEmailValidity(email2));
console.log(checkEmailValidity(email3));
console.log(checkEmailValidity(email4));
console.log(checkEmailValidity(email5));
