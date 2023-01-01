var current_page = '';

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

async function loadPage(url){
    if(url==current_page) return;
    let filetype = url.split('.').at(-1);

    current_page = url;
    let res = await fetch(url); 
    let html = await res.text();

    if(filetype=='md') {
        html = converter.makeHtml(html);
    }

    $("#content").empty();
    $("#content").append(html);
    hljs.highlightAll();
    setupCodeCopy();
}

window.onload = function() {
    Particles.init({
        selector: '.background',
        connectParticles : true,
        speed : 0.3,
        minDistance : 170,
        color : "F0F00F"
    });
};

loadPage('/pages/home.html');