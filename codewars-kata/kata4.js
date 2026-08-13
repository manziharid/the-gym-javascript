function text(letters){
    return letters
         .toLowerCase()
         .replace(/[^a-z]/g, "")
         .split("")
         .map(char => char.charCodeAt(0)-96)
         .join(" ");
}
console.log(text("The sunset sets at twelve o' clock."));