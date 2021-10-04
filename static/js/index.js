var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight )
var width = Math.max(body.scrollWidth, body.offsetWidth, 
                        html.clientWidth, html.scrollWidth, html.offsetWidth);

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
    "overflow-x": "hidden",
}
sidebar.style.height = height;

var sidebar_close_button = document.getElementById("left_close_sidebar");
var sidebar_left_small = document.getElementById("sidebar-left-small");
var sidebar_left = document.getElementById("sidebar-left");
var sidebar_small = document.getElementsByClassName("sidebar_small");
var content = document.getElementById("about");
var sidebar_open_button = document.getElementById("left_open_sidebar");

var image_collapse = document.getElementById("image_collapse");
var image_full_screen = document.getElementById("image_full_screen");
var image_content = document.getElementById("image_content");
var bgimage = document.getElementById("bgimage");

if(document.body.contains(image_collapse)){
    image_collapse.addEventListener("click",function(){
        if(image_content.style.width == '30%'){
            if(document.body.contains(bgimage)){
                bgimage.style.width = "100%";
                image_content.style.width = width - 250;
                image_content.style.marginLeft = "250px";
                image_content.style.float = "none";
                content.style.display = "none";
                document.getElementById("image_collapse").src = "/static/Image_collapse_icon.png";
            }else{
                image_content.style.width = width - 250;
                image_content.style.marginLeft = "250px";
                image_content.style.float = "none";
                content.style.display = "none";
                document.getElementById("image_collapse").src = "/static/Image_collapse_icon.png";
            }
        }else{
            if(document.body.contains(bgimage)){
                bgimage.style.width = "30%";
            }
            image_content.style.width = "30%";
            image_content.style.marginLeft = "0px";
            image_content.style.float = "right";
            content.style.display = "block";
            document.getElementById("image_collapse").src = "/static/left_icon_image.png";
        }
    });
}




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