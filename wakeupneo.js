function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function neoText(element, text){
    for(let letter of text){
        element.append(letter);
        await sleep(30);
    }
}

async function loadPs(){
    let paragraphs = $('p');
    let paragraphTexts = [];

    for(let paragraph of paragraphs){
        paragraphTexts.push(paragraph.innerText);
        paragraph.innerHTML = "";
    }

    for(let i=0; i<paragraphs.length; i++){
        await neoText(paragraphs[i], paragraphTexts[i]);
        await sleep(200);
    }
}