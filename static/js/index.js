var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight )

var sidebar = document.getElementById("menu");
var title = document.getElementById("title");
var styles = {
    "display":"flex",
    "position": "absolute",
    "height": "100%",
    "width": "65px",
    "max-width": "65px",
    "background-color": "#f5faff",
    "display": "flex",
    "flex-direction": "column",
    "padding": "1.5% 0",
    "border-radius": "2px",
    "z-index": "999",
    "overflow": "auto",
}
sidebar.style.height = height;

var sidebar_close_button = document.getElementById("left_close_sidebar");
var sidebar_left_small = document.getElementById("sidebar-left-small");
var sidebar_left = document.getElementById("sidebar-left");
var sidebar_small = document.getElementsByClassName("sidebar_small");
var content = document.getElementById("about");


var sidebar_open_button = document.getElementById("left_open_sidebar");

sidebar_open_button.addEventListener("click",function(){
    sidebar_left.style.display = "flex";
    sidebar_left_small.style.display = "none";
    content.style.marginLeft = "260px";
});


sidebar_close_button.addEventListener("click",function(){
    Object.assign(sidebar_left_small.style,styles);
    sidebar_left.style.display = "none";
    for(var s = 0; s < sidebar_small.length; s++){
        sidebar_small[s].style.width = "35px";
        sidebar_small[s].style.height = "40px";
    }
    content.style.marginLeft = "70px";
});