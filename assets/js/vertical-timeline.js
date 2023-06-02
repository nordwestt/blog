class VerticalTimeline {
  constructor(options) {
    this.id = options.id;
    this.dark_mode = options.dark_mode;
    this.alignment = options.alignment;
    this.items = options.items;
    this.line_color = options.line_color;
    this.bubble_color = options.bubble_color;
    this.init();
  }

  init() {
    let timelineElement = document.getElementById(this.id);
    timelineElement.classList.add('vertical-timeline');

    //let afterElement = window.getComputedStyle(element, '::after')
    //afterElement.setProperty("background-color","red");

    let line = document.createElement("div");
    line.style=`position:absolute;background-color:${this.line_color};top:0;bottom:0;left:0;margin-left:${this.alignment?'0px':'3px'};width:6px;left:${this.alignment?this.alignment:'50%'};`;
    timelineElement.appendChild(line);

    if (this.dark_mode) {
      timelineElement.style.backgroundColor = '#474e5d00';
    } else {
      timelineElement.style.backgroundColor = 'white';
    }

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      
      const container = document.createElement('div');
      if(this.alignment){
        container.className= `container ${this.alignment}`;
        container.style="width:100%;left:3px;";
      }
      else{
        container.className = `container ${i % 2 === 0 ? 'left' : 'right'}`;
      }

      let bubble = document.createElement("div");
      bubble.style=`content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -13px;
        background-color: white;
        border: 4px solid ${this.bubble_color};
        top: 15px;
        border-radius: 50%;
        z-index: 1;
        left:-13px;`;

      const content = document.createElement('div');
      content.className = 'content';

      const title = document.createElement('h2');
      title.innerHTML = item.title;
      title.style = "color:black;";

      let image = null;
      if(item.image){
        let imageTemplate = document.createElement('template');
        imageTemplate.innerHTML = item.image.trim(); // Never return a text node of whitespace as the result
        image = imageTemplate.content.firstChild;
      }
      

      const text = document.createElement('p');
      text.style = "color:black;"; 
      text.innerHTML = item.text;

      const time = document.createElement('p');
      time.style = "color:black;";
      time.innerHTML = item.time;

      content.appendChild(title);
      if(image) content.appendChild(image);
      content.appendChild(text);
      content.appendChild(time);

      container.appendChild(content);
      container.appendChild(bubble);

      timelineElement.appendChild(container);
    }
  }
}
