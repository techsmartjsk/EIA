var left_section = document.getElementById('left');
var sidebar_right = document.getElementById('sidebar-right');
var sidebar_left = document.getElementById('sidebar-left');
var right_section = document.getElementById('right');

left_section.onclick = function(){
    if(sidebar_right.style.display === "none"){
        left_section.style.marginRight = "370px";
        sidebar_right.style.display = "block";
    }else{
        left_section.style.marginRight = "30px";
        sidebar_right.style.display = "none";
    }
}

right_section.onclick = function(){
    if(sidebar_left.style.display === "none"){
        right_section.style.marginLeft = "170px";
        sidebar_left.style.display = "flex";
    }else{
        right_section.style.marginLeft = "30px";
        sidebar_left.style.display = "none";
    }
}

function ToggleFunction(){
    if(sidebar_right.style.display === "none"){
        left_section.style.marginRight = "370px";
        sidebar_right.style.display = "block";
    }else{
        left_section.style.marginRight = "30px";
        sidebar_right.style.display = "none";
    }
}

function RightToggleFunction(){

    if(sidebar_left.style.display === "none"){
        right_section.style.marginLeft = "170px";
        sidebar_left.style.display = "flex";
    }else{
        right_section.style.marginLeft = "30px";
        sidebar_left.style.display = "none";
    }
}
