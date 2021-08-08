var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    

    var width = screen.width;
    var newwidth = screen.width-100;
    var newheight = screen.height-200;
    if (width<992){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
    }
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("touchstart", my_touchstart);
    
    
    function my_touchstart(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("Width").value;
        console.log("my_touchstart")
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
    function Application(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }

