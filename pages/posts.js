
function createCard(imgSrc, title, text){
    let card = $('<div>', {class:"card"});

    let img = $('<img>', {class:"card-img-top", src:`${imgSrc}`});
    img.css('object-fit','cover');
    img.css('height','200px');


    let body = $('<div>', {class:"card-body"});

    let h5 = $('<h5>', {class:"card-title"});
    h5.text(title);
    let p = $('<p>', {class:"card-text"});
    p.text(text);
    body.append(h5);
    body.append(p);
    card.append(img);
    card.append(body);

    return card;
}



async function showPosts(){

    let cols = 2;

    let container = $("<div>",{class:"row row-cols-1 row-cols-md-3 g-4"});
    
    for(let post of posts){
        let col = $('<div>', {class:"col"});
        let card = createCard("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2F2XA95C1P0Bd_NKIHrGnNJpmeHtk%3D%2F1280x1024%2Ffilters%3Afill(auto%2C1)%2Flinux-573e3f5f5f9b58723dace939.jpg&f=1&nofb=1&ipt=a3fc822e3298b5886bbf5c04a50d675a21e0019c43dd9565010e1994ff0f25c7&ipo=images",post, "DSJAOIJDSAOIDJSA:JDLSANDLSKJAN");
        card.click(() => loadPage("/posts/"+post+".md"));
        card.css("cursor","pointer");
        col.append(card);
        container.append(col);
    }
    $("#posts").append(container);
}

showPosts();
