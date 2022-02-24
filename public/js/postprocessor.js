



// makes any and every h2 or less element collapsible
function makeCollapsible(children){

    var collapsible_tags = ['H2','H3','H4']

    var last_tag = '';
    for(var i=0; i<children.length; i++){

        var child = children[i];

        if(collapsible_tags.find(child.tagName)){
            child.className="collapsible";
            last_tag = child.tagName;
            continue;
        }
    }
}

function collapseContents(parent){
    // make a note of parent tag
    var parent_tag = parent.tagName;

    var sibling = parent.nextElementSibling;
    while(sibling.tagName != parent_tag){
        collapseContents(sibling);
        
    }
}


// get the posts on the page
var posts = document.getElementsByClassName("post");

for(var i=0; i<posts.length; i++){
    var post = posts[i];
    makeCollapsible(post.children);
}




