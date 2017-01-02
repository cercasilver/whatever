function va(){
    var a=document.getElementById("nombre").value;
    var b=document.getElementById("hola");
    if(a==="ItsFreezyHD"||a==="erikgamer07"||a==="AlexLordFire"||a==="cerca_silver22"||a==="Damian"||a==="Erik"||a==="Alejandro"||a==="Adrian"){
        alert("Eres uno de los creadores. Bienvenido " + a + " " + "a Mad Cat. Tienes accesos especiales que ");
        document.getElementById("hola").innerHTML = "Que tal estas " + a +  "?";
        $(document).ready(function(){
           $("#areaVip").show(); 
        });
    }
    else{
        alert("No eres uno de los creadores de Mad Cat. Bienvenido" + " " + a + " a Mad Cat"); 
        document.getElementById("hola").innerHTML = "Hola" + " " + a;
        document.getElementById("hola").innerHTML = "No puedes hacer todo las cosas que los vips pueden hacer";
        $(document).read(function(){
            $("#vip").hide();
        });
    }
}
