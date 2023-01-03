{
let posts = [
    {name:'Website', description:'How I built this website', img:'/images/web.jpg'},
    {name:'Linux', description:'My journey into Linux', img:'/images/penguin.jpg'}
];

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

    let container = $("<div>",{class:"row row-cols-1 row-cols-md-3 g-4"});
    
    for(let post of posts){
        let col = $('<div>', {class:"col"});
        let card = createCard(post.img, post.name, post.description);
        card.click(() => loadPage("/posts/"+post.name+".md"));
        card.css("cursor","pointer");
        col.append(card);
        container.append(col);
    }
    $("#posts").append(container);
}

showPosts();
}