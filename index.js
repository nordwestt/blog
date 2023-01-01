let posts = ['Website','Linux'];

var converter = new showdown.Converter();

async function setupCodeCopy(){
    const copyButtonLabel = "📋 Copy";

    // use a class selector if available
    let blocks = document.querySelectorAll("pre");
    console.log({blocks});

    blocks.forEach((block) => {
        block.className = "code-block";
        // only add button if browser supports Clipboard API
        if (navigator.clipboard) {
            let button = document.createElement("button");
            button.className = "code-button btn btn-secondary";
            button.type = "button";
            button.innerText = copyButtonLabel;
            block.appendChild(button);

            button.addEventListener("click", async () => {
                await copyCode(block, button);
            });
        }
    });
}


async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);
    button.innerText = "✔ Copied";
    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
}

async function loadMarkdownPage(url){
    let res = await fetch(url); 
    let md = await res.text();
    let html = converter.makeHtml(md);
    $("#content").empty();
    $("#content").append(html);
    hljs.highlightAll();
    setupCodeCopy();
}

async function showPosts(){
    let ul = document.createElement("div");
    ul.className = "list-group";
    for(let post of posts){
        let li = document.createElement("button");
        li.type = "button";
        li.className = "list-group-item list-group-item-action";
        li.onclick = () => loadMarkdownPage("posts/"+post+".md");
        li.innerText = post;
        ul.appendChild(li);
    }
    $("#posts").append(ul);
}
showPosts();
//loadMarkdownPage("posts/website.md")

window.onload = function() {
    Particles.init({
        selector: '.background',
        connectParticles : true,
        speed : 0.3,
        minDistance : 170
    });
};