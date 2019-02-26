const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d');


//resize canvas to fit the width and height of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; //Color
ctx.lineJoin = 'round'; //When a line meets another line it should be round
ctx.lineCap = 'round' //End of line type will be round
ctx.lineWidth = 50

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; // stop the function from running when they are not moused down.
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
  }

function increaseDoodle(){
     if(ctx.lineWidth <= 100 || ctx.lineWidth <= 1) {
        ctx.lineWidth += 20
     } else {
         return;
     }
     console.log(ctx.lineWidth)
}

function decreaseDoodle(){
    ctx.lineWidth -= 20
    console.log(ctx.lineWidth)
}

function eraseDoodle(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  })

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing =  false) 
canvas.addEventListener('mouseout', () => isDrawing =  false)

//Tool Bar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: false
      
    });
    instance.open();
  });

//Download image

function to_image(){
    var canvas = document.getElementById("draw");
    document.getElementById("theimage").src = canvas.toDataURL();
    Canvas2Image.saveAsPNG(canvas);
}
//


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });