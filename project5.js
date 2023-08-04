var promptSync = require('prompt-sync');
var myPrompt = promptSync();
function countCharacters(text) {
    var textwithoutspace = text.replace(/\s/g, '');
    return textwithoutspace.length;
}
function countWord(text) {
    var words = text.trim().split(/\s+/);
    return words.length;
}
function main() {
    console.log("Word Counter");
    var paragraph = myPrompt('enter a paragraph');
    var characterCount = countCharacters(paragraph);
    var wordCount = countWord(paragraph);
    console.log("character count : ".concat(characterCount, " "));
    console.log("word count ".concat(wordCount));
}
main();
