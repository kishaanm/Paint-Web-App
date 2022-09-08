var last_position_of_x, last_position_of_y;

var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;
    
    if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").width = new_height;
        document.body.style.overflow = "hidden";
    }

    function my_touchstart(e){
        console.log("my_touchstart");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
     
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    color = "";
    width_of_line = 0;

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        //Addictonal Activity ends

        mouseEvent = "mousedown";
    }

    //Create the addEventListener() function for mouseup(). 
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
        mouseEvent="mouseleave";
    }
    

    //Create the addEventListener() function for mouseleave(). 
    canvas.addEventListener("mouseup",my_mouseUP)
    function my_mouseUP(e){
        mouseEvent="mouseUP"
    }
    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    canvas.addEventListener("mousemove",my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_touch_x = e.clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width_of_line;
        //If yes call "beginPath()".
        
        // Assign values to strokeStyle and lineWidth of canvas "ctx".
        

        //print the current x and y coordinate.
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        //Call moveTo() with parameters last_position_of_x  and last_position_of_y.
        // The drawing begins from these points.
        

        //print the current x and y coordinate.
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        //Call "lineTo()" function with 'current_position_of_mouse_x' and 'current_position_of_mouse_y'.
        //Creation if lines end at these points
        

        //Now we will draw the line using the stroke() function.
        
    
         }
     // "last_position_of_x" and "last_position_of_y" is updated with current mouse position of x and y.
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
function my_touchmove(e){
        console.log("my_touchmove");
        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width_of_line;
        //If yes call "beginPath()".
        
        // Assign values to strokeStyle and lineWidth of canvas "ctx".
        

        //print the current x and y coordinate.
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        //Call moveTo() with parameters last_position_of_x  and last_position_of_y.
        // The drawing begins from these points.
        

        //print the current x and y coordinate.
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        //Call "lineTo()" function with 'current_position_of_mouse_x' and 'current_position_of_mouse_y'.
        //Creation if lines end at these points
        

        //Now we will draw the line using the stroke() function.
        
    
         
     // "last_position_of_x" and "last_position_of_y" is updated with current mouse position of x and y.
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }