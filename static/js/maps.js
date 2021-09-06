function ToggleFunction(){
    if(document.getElementById('sidebar-right').style.display === "none"){
        document.getElementById('left').style.marginRight = "51vw";
        document.getElementById('sidebar-right').style.display = "block";
        if(document.getElementById('left-icon').classList.contains("fa-chevron-left")){
            document.getElementById('left-icon').classList.remove("fa-chevron-left");
            document.getElementById('left-icon').classList.add("fa-chevron-right");
        }
    }else{
        document.getElementById('left').style.marginRight = "3vw";
        document.getElementById('sidebar-right').style.display = "none";
        document.getElementById('left-icon').classList.remove("fa-chevron-right");
        document.getElementById('left-icon').classList.add("fa-chevron-left");
    }
}

function RightToggleFunction(){
    if(document.getElementById('sidebar-left').style.display === "none"){
        document.getElementById('right').style.marginLeft = "20vw";
        document.getElementById('sidebar-left').style.display = "flex";
        
    }else if(document.getElementById('sidebar-left').style.display === "flex"){
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('sidebar-left').style.display = "none";
        
    }else{
        document.getElementById('right').style.marginLeft = "3vw";
        document.getElementById('sidebar-left').style.display = "none";
    }
}
