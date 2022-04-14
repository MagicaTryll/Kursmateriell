//1. sjekk om en lengre tekst du finner på nettet er over en wordcount(antall tegn) du velger selv.
let text = "How do you make pink lemonade ? Pink lemons!"

console.log(text.length)
const students = ["student1", "student2", "student3", "student4", "student5", "student6"]
students.splice(1, 2, "secret student")

console.log("Oppgave 1")
console.log(students)

//map
const numbArray = [4, 9, 25, 36, 49];

root = numbArray.map(Math.sqrt);
console.log("Røttene til" +
    root);
console.log()
console.log('Oppgave 2, denne oppgaven teller til og med 10')
    //2. lag en loop som teller til 10
for (i = 0; i < 11; i++) {

    console.log(": ", i)
}

console.log()
console.log('Oppgave 3')
    //3. finn ordene "if", "as", "and"
    //i teksten du valgte og kutt ut de ordene pluss 5 tegn på hver side av ordene.
let tekst = "If Writing is a challenge as singing, and no matter what be most people’ s say...";

let nytekst = " "

console.log()
console.log('Jeg bruker en løkke til å ta vekk en og en bokstav - men det er flere måter å gjøre dette på')
console.log()

function fjernOrd(words) {
    let indexOfWords = tekst.indexOf(words);
    console.log(words, " finner du i posisjon: ", indexOfWords);


    for (let i = indexOfWords - 5; i < indexOfWords + 6; i++) {

        //nytekst += tekst.splice(1);
        nytekst += tekst.substring(i);
        return nytekst
    }
}
fjernOrd("and")
console.log(nytekst)





//4. sett sammen de nye stringene dine.

//5. bytt ut de ordene med norske ord.

//6. lag et lite spill hvor spilleren har 3 liv.Hint: while loops

//7. lag en array med 10 ord og en med 10 tall.

//8. sett alle tallene utenom det første og siste til å være det samme tallet et tall om gangen