function color(){
                    var a=document.getElementById("color").value;
                    if(a==="Amarillo"||a==="amarillo"){
                        $(document).ready(function(){
                           $("#begining").css("background-color", "yellow"); 
                        });
                    }
                    else if(a==="Rojo"||a==="rojo"){
                        $(document).ready(function(){
                           $("#begining").css("background-color", "red"); 
                        });
                    }
                    else if(a==="Verde"||a==="verde"){
                        $(document).ready(function(){
                            $("#begining").css("background-color", "green");
                        });
                    }
                    else if(a==="Azul"||a==="azul"){
                        $(document).ready(function(){
                           $("#begining").css("background-color", "blue"); 
                        });
                    }
                    else if(a==="Negro"||a==="negro"){
                        $(document).ready(function(){
                           $("#begining").css("background-color", "black"); 
                        });
                    }
                    else if(a==="Naranja"||a==="naranja"){
                        $(document).ready(function(){
                           $("#begining").css("background-color", "orange"); 
                        });
                    }
                    else if(a==="Normal"||a==="normal"){
                        $(document).ready(function(){
                           $("#begining").css("background-color", "#cef442"); 
                        });
                    }
                    else{
                        alert("Ese color todavía no esta disponible");
                    }
                }