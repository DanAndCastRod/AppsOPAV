function ShowSelected(){
    var cod = document.getElementById("Tipo-corte").value;
    

    var combo = document.getElementById("Tipo-corte");
    var selected = combo.options[combo.selectedIndex].text;

    switch (selected[0]) {
        case "C": 
            document.getElementById("Contra_1").style.display = "block";
            document.getElementById("Contra_2").style.display = "block";
            document.getElementById("Muslo_1").style.display = "block";
            document.getElementById("Muslo_2").style.display = "block";
            document.getElementById("Pernil_1").style.display = "none";
            document.getElementById("Pernil_2").style.display = "none";
            break;
        case "P": 
            document.getElementById("Contra_1").style.display = "none";
            document.getElementById("Contra_2").style.display = "none";
            document.getElementById("Muslo_1").style.display = "none";
            document.getElementById("Muslo_2").style.display = "none";
            document.getElementById("Pernil_1").style.display = "block";
            document.getElementById("Pernil_2").style.display = "block";
            break;
    }
    if (selected[1] == "C"){
        document.getElementById("Rabadilla").style.display = "none";
    }else{
        document.getElementById("Rabadilla").style.display = "block";
    }

    if (selected[selected.length - 1] == "P") {
        document.getElementById("Ala_1").style.display = "block";
        document.getElementById("Ala_2").style.display = "block";
        document.getElementById("Costillar").style.display = "block";
        document.getElementById("ACC").style.display = "none";
    }else{
        document.getElementById("Ala_1").style.display = "none";
        document.getElementById("Ala_2").style.display = "none";
        document.getElementById("Costillar").style.display = "none";
        document.getElementById("ACC").style.display = "block";
    }
}