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
        document.getElementById('right').style.marginLeft = "28vw";
        document.getElementById('sidebar-left').style.display = "flex";
        document.getElementById('ntsinfo').style.marginLeft = "28vw";
    }else if(document.getElementById('sidebar-left').style.display === "flex"){
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('ntsinfo').style.marginLeft = "0vw";
        document.getElementById('sidebar-left').style.display = "none";
    }else{
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('sidebar-left').style.display = "none";
    }
}
