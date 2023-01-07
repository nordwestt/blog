# Building this website

After a good year and coming up to my last semester of University, I thought I'd finally set up my my GitHub website.

To build this, I'm using the following technologies:
- [Bootstrap](https://getbootstrap.com/) for the pretty UI
- [Showdown](https://showdownjs.com/) for converting Markdown to HTML
- [HighlightJS](https://highlightjs.org/) for syntax highlighting
- [DraculaJS](https://draculatheme.com/highlightjs) for syntax highlight themeing   
   

## Why I'm converting Markdown to HTML
I'm very lazy.    
I want to be able to write a few hashes, dashes and doodlidoots and have an entire post appear. That's what I can do with Markdown, so it seemed obvious to just convert it to HTML and load it in to save myself a bit of time and hopefully end up writing some more. 

### How I did it
Pretty simple.    
Just fetch the markdown file, convert to text, pass to the converter and BAM! Sweet sweet HTML that I can inject into my page. 

Here's the function used to load the page you're seeing right now: 

```JavaScript
async function loadMarkdownPage(url){
    let res = await fetch(url); 
    let md = await res.text();
    let html = converter.makeHtml(md);
    $("#content").empty();
    $("#content").append(html);
    hljs.highlightAll();
}
```

To get it working, a few steps are required: 
1. Copy the function into your page
2. Add JQuery to your page
3. Create a div with an ID of 'content'
4. Instantiate the showdown converter using: var converter = new showdown.Converter();


