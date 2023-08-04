var promptSync =require('prompt-sync');
var myPrompt =promptSync();

function countCharacters(text:string): number
{
    const textwithoutspace= text.replace(/\s/g,'');
    return textwithoutspace.length;
}

function countWord(text:string):number
{
    const words =text.trim().split(/\s+/);
    return words.length;
}

function main()
{
    console.log("Word Counter");
    const paragraph=myPrompt('enter a paragraph');
    const characterCount=countCharacters(paragraph);
    const wordCount= countWord(paragraph);
    
    console.log(`character count : ${characterCount} `);
    console.log(`word count ${wordCount}`);
}

main();

