function ToggleFunction(){
    if(document.getElementById('sidebar-right').style.display === "none"){
        document.getElementById('left').style.marginRight = "370px";
        document.getElementById('sidebar-right').style.display = "block";
    }else{
        document.getElementById('left').style.marginRight = "30px";
        document.getElementById('sidebar-right').style.display = "none";
    }
}

function RightToggleFunction(){
    if(document.getElementById('sidebar-left').style.display === "none"){
        document.getElementById('right').style.marginLeft = "170px";
        document.getElementById('sidebar-left').style.display = "flex";
    }else{
        document.getElementById('right').style.marginLeft = "30px";
        document.getElementById('sidebar-left').style.display = "none";
    }
}
