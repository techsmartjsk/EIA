function ToggleFunction(){
    if(document.getElementById('sidebar-right').style.display === "none"){
        document.getElementById('left').style.marginRight = "51vw";
        document.getElementById('sidebar-right').style.display = "block";
        if(document.getElementById('left-icon').classList.contains === "fas fa-chevron-right"){
            document.getElementById('left-icon').classList.remove = "fas fa-chevron-right";
            document.getElementById('left-icon').classList.add = "fas fa-chevron-left";
        }
    }else{
        document.getElementById('left').style.marginRight = "3vw";
        document.getElementById('sidebar-right').style.display = "none";
        document.getElementById('left-icon').classList.remove = "fas fa-chevron-left";
        document.getElementById('left-icon').classList.add = "fas fa-chevron-right";
    }
}

function RightToggleFunction(){
    if(document.getElementById('sidebar-left').style.display === "none"){
        document.getElementById('right').style.marginLeft = "28vw";
        document.getElementById('sidebar-left').style.display = "flex";
        
    }else if(document.getElementById('sidebar-left').style.display === "flex"){
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('sidebar-left').style.display = "none";
        
    }else{
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('sidebar-left').style.display = "none";
    }
}
