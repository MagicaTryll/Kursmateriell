console.log('Oppgave 3')
    //3. finn ordene "if", "as", "and"
    //i teksten du valgte og kutt ut de ordene pluss 5 tegn på hver side av ordene.
let tekst = "Somtimes if writing can be a challenge as singing, and no matter what be most people’ s say...";

let nytekst = " "

console.log()
console.log('Jeg bruker en løkke til å ta vekk en og en bokstav - men det er flere måter å gjøre dette på')
console.log()

function fjernOrd(words) {
    let indexOfWords = tekst.indexOf(words);
    console.log(words, " finner du i posisjon: ", indexOfWords);


    for (let i = indexOfWords - 5; i < indexOfWords + 6; i++) {

        nytekst += tekst.substring(i);
        return nytekst
    }

}
fjernOrd("and")
fjernOrd("as")
fjernOrd("if")


//console.log(nytekst)
console.log("Oppgave 4")

//ctrl k+c
//4. sett sammen de nye stringene dine.
tekst1 = fjernOrd("and")
tekst2 = fjernOrd("as")
tekst3 = fjernOrd("if")
let tekstene = tekst1 + ' ' + tekst2 + ' ' + tekst3
console.log(tekstene)




//5. bytt ut de ordene med norske ord.


//6. lag et lite spill hvor spilleren har 3 liv.Hint: while loops


//7. lag en array med 10 ord og en med 10 tall.

//8. sett alle tallene utenom det første og siste til å være det samme tallet et tall om gangen