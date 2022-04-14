let position;

function replaceStuff(str, regex) {
    while ((position = str.search(regex)) != -1) {
        let start = position - 5; // position is nth letter where IF starts.. -5 because that's what they want (5 chars in front)
        if (start < 0) start = 0; // no negative index, start is start!
        let end = position + 2 + 5; // +2 for 'if', and 5 chars after
        if (end >= text.length) end = text.length - 1; // don't go beyond the string length.. bad 
        //console.log("Replacing between " + start + " and " + end);

        str = str.slice(0, start) + str.slice(end, text.length - 1); // get before part, and after part, and make new string out of it, so new string doesn't have the word + 5 symbols in front and after
    }
    return str; // return new string without all the words we replaced!
}

let replaced = replaceStuff(text, /\bif\b/i); // replace if. 
replaced = replaceStuff(replaced, /\bas\b/i);
replaced = replaceStuff(replaced, /\band\b/i);
console.log(replaced);
// THIS COMPLETES PART 3! good luck :p