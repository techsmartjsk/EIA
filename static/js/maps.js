function ToggleFunction(){
    if(document.getElementById('sidebar-right').style.display === "none"){
        document.getElementById('left').style.marginRight = "73vw";
        document.getElementById('sidebar-right').style.display = "block";
        document.getElementById('ntsinfo').style.marginLeft = "73vw"
    }else{
        document.getElementById('left').style.marginRight = "3vw";
        document.getElementById('sidebar-right').style.display = "none";
        document.getElementById('ntsinfo').style.marginLeft = "0vw"
    }
}

function RightToggleFunction(){
    if(document.getElementById('sidebar-left').style.display === "none"){
        document.getElementById('right').style.marginLeft = "37vw";
        document.getElementById('sidebar-left').style.display = "flex";
    }else if(document.getElementById('sidebar-left').style.display === "flex"){
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('sidebar-left').style.display = "none";
    }else{
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('sidebar-left').style.display = "none";
    }
}
