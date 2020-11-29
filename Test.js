
//var num = window.prompt("Type some dumb shit");

//document.write("<h2 style='font-size:200px; color: lightblue'>"+num+"<h2>");

var box = document.getElementById("move-box");
box.innerHTML = "thisisabox";
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.verticalAlign = "center";

var button = document.getElementById("button");
box.style.position = "relative";
box.style.top = 0;
box.style.left = 0;
button.addEventListener("click", function(){
    OnClick(this);
});

var rY= 0;
var rX = 0;

var movespeed = 10;

document.addEventListener("keydown", function(event){
    var keycode = event.key.toLowerCase();

    if(keycode == 'w')
    {
        rY-= movespeed;
    }
    else if(keycode == "a")
    {
        rX-= movespeed;
    }
    else if(keycode == "s")
    {
        rY+= movespeed;
    }
    else if(keycode == "d")
    {
        rX+= movespeed;
    }
    box.style.top = rY +"px";
    box.style.left = rX + "px";
});

function OnClick(element)
{
    element.innerHTML="OHSHIT";
}