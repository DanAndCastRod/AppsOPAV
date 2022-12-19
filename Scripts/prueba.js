function pokayoke(){

    var conteos_fecha = document.getElementById("container-details").children.length;

    const children = document.getElementById("poka-yoke").children
        
    for (var i = 0; i < conteos_fecha ; i++){
        children.item(children.length-i-1).style.background= "#53c04f";
        console.log(i, children)

    }
}

