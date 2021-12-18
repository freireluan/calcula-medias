var form = document.querySelector(".formulario");
media1 = 0;
media2 = 0;
media3 = 0;
var media1tri = document.querySelector(".cla1tri");
var media2tri = document.querySelector(".cla2tri");
var media3tri = document.querySelector(".cla3tri");
var mediageral = document.querySelector(".mediadatotal");

// console.log(media2tri,media1tri,media3tri,mediageral);

var botao = form.querySelector(".botao");
botao.addEventListener("click",function(event){
    event.preventDefault();

     calculaptri(form);
     calculastri(form);
     calcuttri(form);


     calculageral();


})








function calculaptri(form){
       
     var artes11 = form.arteprimeirorte.value;
     var artes1 = parseInt(artes11);               
              
     
     
     var Biologia11 = form.Biologiaprimeiro.value;
     var Biologia1 = parseInt(Biologia11);                 
                 
 
 
     var Filosofia11 = form.Filosofiaprimeiro.value;
     var Filosofia1 = parseInt(Filosofia11);
                 
 
    
     var EFisica11 = form.EFisicaprimeiro.value;
     var EFisica1 = parseInt(EFisica11);                  
              
 
     var fisica11 = form.fisicaprimeiro.value;
     var fisica1 = parseInt(fisica11);             
                
 
     var geografia11 = form.geografiaprimeiro.value;
     var geografia1 = parseInt(geografia11);
                    
 
     var historia11 = form.historiaprimeiro.value;
    
    
     var historia1 = parseInt(historia11);
            
              
 
     var portugues11 = form.portuguesprimeiro.value;
     var portugues1 = parseInt(portugues11);
                       
 
      var matematica11 = form.matematicaprimeiro.value;
      var matematica1 = parseInt(matematica11);
                 
           
 
      var quimica11 = form.quimicaprimeiro.value;
     var quimica1 = parseInt(quimica11);
              
 
     var Sociologia11 = form.Sociologiaprimeiro.value;
     var Sociologia1 = parseInt(Sociologia11);
                  
 
     var Efinanceira11 = form.Efinanceiraprimeiro.value;
     var Efinanceira1 = parseInt(Efinanceira11);
              
             
 
     var ingles11 = form.inglesprimeiro.value;
     var ingles1 = parseInt(ingles11);  
     
     
     var media1 = (ingles1 + Sociologia1 + portugues1 + matematica1 + Biologia1 +
     artes1 + EFisica1 + Efinanceira1 + geografia1 + Filosofia1 + fisica1 + quimica1 + historia1)/13;
     media1tri.textContent = media1.toFixed(2);
     return media1;                                     
 }
 

 function calculastri (form){
    var artes22 = form.artesegundo.value;
    var artes2 = parseInt(artes22);      
     
    var Biologia22 = form.Biologiasegundo.value;
    var Biologia2 = parseInt(Biologia22);

    var Filosofia22 = form.Filosofiasegundo.value;
    var Filosofia2 = parseInt(Filosofia22); 
    
    var EFisica22 = form.EFisicasegundo.value;
    var EFisica2 = parseInt(EFisica22);       

    var fisica22 = form.fisicasegundo.value;
    var fisica2 = parseInt(fisica22);       

    var geografia22 = form.geografiasegundo.value;
    var geografia2 = parseInt(geografia22);        

    var historia22 = form.historiasegundo.value;
    var historia2 = parseInt(historia22);       
    
    var portugues22 = form.portuguessegundo.value;
    var portugues2 = parseInt(portugues22);       
    
    var matematica22 = form.matematicasegundo.value;
    var matematica2 = parseInt(matematica22);       

    var quimica22 = form.quimicasegundo.value;
    var quimica2 = parseInt(quimica22);       

    var Sociologia22 = form.Sociologiaegundo.value;
    var Sociologia2 = parseInt(Sociologia22);      
    

    var Efinanceira22 = form.Efinanceirasegundo.value;
    var Efinanceira2 = parseInt(Efinanceira22);       
    
    var ingles22 = form.inglessegundo.value;
    var ingles2 = parseInt(ingles22);  
    

    var media2 = (ingles2 + Sociologia2 + portugues2 + matematica2 + Biologia2 +
        artes2 + EFisica2 + Efinanceira2 + geografia2 + Filosofia2 + fisica2 + quimica2 + historia2)/13;
        media2tri.textContent = media2.toFixed(2);
        return media2;
    
 }

 function calcuttri(form){
    var artes33 = form.arteterceiro.value;
    var artes3 = parseInt(artes33); 
    
    var Biologia33 = form.Biologiaterceiro.value;
    var Biologia3 = parseInt(Biologia33);  
    
    var Filosofia33 = form.Filosofiaterceiro.value;
    var Filosofia3 = parseInt(Filosofia33); 
    
    var EFisica33 = form.EFisicaterceiro.value;
    var EFisica3 = parseInt(EFisica33); 

    var fisica33 = form.fisicaterceiro.value;
    var fisica3 = parseInt(fisica33); 

    var geografia33 = form.geografiaterceiro.value;
    var geografia3 = parseInt(geografia33);  

    var historia33 = form.historiaterceiro.value;
    var historia3 = parseInt(historia33);    

    var portugues33 = form.portuguesterceiro.value;
    var portugues3 = parseInt(portugues33);  

    var matematica33 = form.matematicaterceiro.value;
    var matematica3 = parseInt(matematica33); 

    var quimica33 = form.quimicaterceiro.value;
    var quimica3 = parseInt(quimica33); 

    var Sociologia33 = form.arteterceiro.value;
    var Sociologia3 = parseInt(Sociologia33);  

    var Efinanceira33 = form.Efinanceiraterceiro.value;
    var Efinanceira3 = parseInt(Efinanceira33); 

    var ingles33 = form.inglesterceiro.value;
    var ingles3 = parseInt(ingles33);   
    
    var media3 = (ingles3 + Sociologia3 + portugues3 + matematica3 + Biologia3 +
        artes3 + EFisica3 + Efinanceira3 + geografia3 + Filosofia3 + fisica3 + quimica3 + historia3)/13;
        media3tri.textContent = media3.toFixed(2); 
        return media3;

 }

 function calculageral(){
      media3 = calcuttri(form);
      media2 = calculastri(form);
      media1 = calculaptri(form);
      var mediaGeral = (media3+media1+media2)/3;
      mediageral.textContent = mediaGeral.toFixed(2);
 }