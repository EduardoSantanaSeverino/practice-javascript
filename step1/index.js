// get the main div to insert content to...
let element = document.getElementById('mainDivContent');

// create a new element into the page...
let div = document.createElement('div');
div.innerHTML = "<span>Hello World!</span>";
element.appendChild(div);

// shows a message into the page...
alert('Hello world was added..');





