function ToggleFunction(){
    if(document.getElementById('sidebar-right').style.display === "none"){
        document.getElementById('left').style.marginRight = "51vw";
        document.getElementById('sidebar-right').style.display = "block";
    }else{
        document.getElementById('left').style.marginRight = "3vw";
        document.getElementById('sidebar-right').style.display = "none";
    }
}

function RightToggleFunction(){
    if(document.getElementById('sidebar-left').style.display === "none"){
        document.getElementById('menu_top').style.display = "none";
        document.getElementById('sidebar-left').style.display = "flex";
    }else if(document.getElementById('sidebar-left').style.display === "flex"){
        document.getElementById('menu_top').style.display = "block";
        document.getElementById('sidebar-left').style.display = "none";
    }else{
        document.getElementById('menu_top').style.display = "block";
        document.getElementById('sidebar-left').style.display = "none";
    }
}
