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
    "background-color": "#ebf0e1",
    "display": "flex",
    "flex-direction": "column",
    "padding": "1.5% 0",
    "border-radius": "2px",
    "z-index": "999",
    "overflow-x": "hidden",
}

var styles_nts = {
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
sidebar.style.width = width + 200;

//EIA
var sidebar_close_button = document.getElementById("left_close_sidebar");

//NTS
var sidebar_close_button_nts = document.getElementById("left_close_sidebar_nts");

var sidebar_left_small = document.getElementById("sidebar-left-small");
var sidebar_left = document.getElementById("sidebar-left");
var sidebar_small = document.getElementsByClassName("sidebar_small");
var content = document.getElementById("about");
var sidebar_open_button = document.getElementById("left_open_sidebar");

var image_collapse = document.getElementById("image_collapse");
var image_full_screen = document.getElementById("image_full_screen");
var image_content = document.getElementById("image_content");
var bgimage = document.getElementById("bgimage");

var dropdown = document.getElementById("dropdown");
var dropdown_eia = document.getElementById("dropdown_eia");

// LVIA
var lvia_sidebar = document.getElementById("sidebar");
var lvia_map = document.getElementById("map");

//Popup
var popup = document.getElementById("popup_");

if(document.body.contains(image_collapse)){
    image_collapse.addEventListener("click",function(){
        if(image_content.style.width == '40%'){
            if(document.body.contains(bgimage)){
                image_content.style.width = width - 250;
                image_content.style.marginLeft = "250px";
                image_content.style.float = "none";
                content.style.display = "none";
                document.getElementById("image_collapse").src = "/static/Image_collapse_icon.png";
            }else{
                if(document.body.contains(lvia_sidebar)){
                    lvia_sidebar.style.marginLeft = "250px";
                    lvia_map.style.width = width - 250;
                }
                image_content.style.width = width - 250;
                image_content.style.marginLeft = "250px";
                image_content.style.float = "none";
                content.style.display = "none";
                document.getElementById("image_collapse").src = "/static/Image_collapse_icon.png";
            }
        }else{
            if(document.body.contains(bgimage)){
                bgimage.style.minWidth = "40%";
            }
            if(document.body.contains(lvia_sidebar)){
                lvia_sidebar.style.marginLeft = "60%";
            }
            image_content.style.width = "40%";
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
    content.style.marginLeft = "280px";
});

if(document.body.contains(sidebar_close_button)){
    sidebar_close_button.addEventListener("click",function(){
        Object.assign(sidebar_left_small.style,styles);
        sidebar_left.style.display = "none";
        for(var s = 0; s < sidebar_small.length; s++){
            sidebar_small[s].style.width = "35px";
            sidebar_small[s].style.height = "40px";
        }
        content.style.marginLeft = "90px";
    });
}

if(document.body.contains(sidebar_close_button_nts)){
    sidebar_close_button_nts.addEventListener("click",function(){
        Object.assign(sidebar_left_small.style,styles_nts);
        sidebar_left.style.display = "none";
        for(var s = 0; s < sidebar_small.length; s++){
            sidebar_small[s].style.width = "35px";
            sidebar_small[s].style.height = "40px";
        }
        content.style.marginLeft = "90px";
    });
}


if(document.body.contains(dropdown)){
    dropdown.addEventListener("click",function(event){
        event.preventDefault();
        if(dropdown_eia.style.display == "none"){
            dropdown_eia.style.display ="block";
        }else{
            dropdown_eia.style.display ="none";
        }
    })
}



//Cookies
/* common fuctions */
function el(selector) { return document.querySelector(selector) }
function els(selector) { return document.querySelectorAll(selector) }
function on(selector, event, action) { els(selector).forEach(e => e.addEventListener(event, action)) }
function cookie(name) { 
  let c = document.cookie.split('; ').find(cookie => cookie && cookie.startsWith(name+'='))
  return c ? c.split('=')[1] : false; 
}


/* popup button hanler */
on('.cookie-popup button', 'click', () => {
  el('.cookie-popup').classList.add('cookie-popup--accepted');
  document.cookie = `cookie-accepted=true`
});

/* popup init hanler */
if (cookie('cookie-accepted') !== "true") {
  el('.cookie-popup').classList.add('cookie-popup--not-accepted');
}
  
var userAgent = navigator.userAgent;

if(userAgent.match(/chrome|chromium|crios/i)){
    popup.style.display = "none";
}       

function ShowPassword(){
    var input = document.getElementById("password");
    if(input.type == "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }
}