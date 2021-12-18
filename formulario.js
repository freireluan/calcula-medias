 
var formresults = document.querySelector(".tabelaM");
var mediaartes = formresults.querySelector(".mediaArtes");
var somaartes = formresults.querySelector(".somaartes");
var somaBiologia = formresults.querySelector(".somaBio");
var mediaBiologia = formresults.querySelector(".mediaBio");
var somaEFisica = formresults.querySelector(".somaefisicae");
var mediaEFisica = formresults.querySelector(".mediafisicae");
var mediafilosofia = formresults.querySelector(".mediafil");
var somafiloosfia = formresults.querySelector(".somfil");
var somafisica = formresults.querySelector(".somafisica");
var mediafisica = formresults.querySelector(".mediafisica");
var somageografia = formresults.querySelector(".somageo");
var mediageografia = formresults.querySelector(".mediageo");
var somahistoria = formresults.querySelector(".somahist");
var mediahistoria = formresults.querySelector(".mediahist");
var mediaportugues = formresults.querySelector(".meidaport");
var somaportugues = formresults.querySelector(".somaport");
var somamatematica = formresults.querySelector(".somamate");
var mediamatematica = formresults.querySelector(".mediamate");
var mediaquimica = formresults.querySelector(".mediaq");
var somaqumica = formresults.querySelector(".somaq");
var somasociologia = formresults.querySelector(".somass");
var mediasociologia = formresults.querySelector(".mediass");
var mediaeFinanceira = formresults.querySelector(".mediafinan");
var somaEFinanceira = formresults.querySelector(".somafinan");
var somaingles = formresults.querySelector(".somain");
var mediaingles = formresults.querySelector(".mediain");









var botao = form.querySelector(".botao");
botao.addEventListener("click",function(event){
    event.preventDefault();
     
     
    artes(form);
    Biologia(form);
    EFisica(form);
    Filosofia(form);
    fisica(form);
    geografia(form);
    historia(form);
    portugues(form);
    matematica(form);
    quimica(form);
    Sociologia(form);
    Efinanceira(form);
    ingles(form);
    
      
    


     
})



function calculaMédiaM(np, ns , nt){
    var mediaatt = (np+ns+nt)/3;
   
   //  console.log(mediaatt);
    return mediaatt.toFixed(2);
   
};
function calculasoma(np, ns, nt){
    var calculasoma =  np + ns + nt;
   //  console.log(calculasoma);
    return calculasoma;
  
}

function artes (form){
    var artes11 = form.arteprimeirorte.value;
    var artes22 = form.artesegundo.value;
    var artes33 = form.arteterceiro.value;
    var artes1 = parseInt(artes11);
    var artes2 = parseInt(artes22);
    var artes3 = parseInt(artes33);
    soma = calculasoma(artes1, artes2, artes3);
    mediaa = calculaMédiaM(artes1, artes2, artes3);
    somaartes.textContent = soma;
    mediaartes.textContent = mediaa;
    return mediaa;
 }

 function Biologia (form){
    var Biologia11 = form.Biologiaprimeiro.value;
    var Biologia22 = form.Biologiasegundo.value;
    var Biologia33 = form.Biologiaterceiro.value;
    var Biologia1 = parseInt(Biologia11);
    var Biologia2 = parseInt(Biologia22);
    var Biologia3 = parseInt(Biologia33);
    
    soma = calculasoma(Biologia1, Biologia2, Biologia3);
    mediab = calculaMédiaM(Biologia1, Biologia2, Biologia3);
    somaBiologia.textContent = soma;
    mediaBiologia.textContent = mediab;
    return mediab;
 }
 function EFisica (form){
   var EFisica11 = form.EFisicaprimeiro.value;
   var EFisica22 = form.EFisicasegundo.value;
   var EFisica33 = form.EFisicaterceiro.value;
   var EFisica1 = parseInt(EFisica11);
   var EFisica2 = parseInt(EFisica22);
   var EFisica3 = parseInt(EFisica33);
   
   soma = calculasoma(EFisica1, EFisica2, EFisica3);
   mediac = calculaMédiaM(EFisica1, EFisica2, EFisica3);
   somaEFisica.textContent = soma;
   mediaEFisica.textContent = mediac;
   return mediac;

    
}
 
 function Filosofia (form){
    var Filosofia11 = form.Filosofiaprimeiro.value;
    var Filosofia22 = form.Filosofiasegundo.value;
    var Filosofia33 = form.Filosofiaterceiro.value;
    var Filosofia1 = parseInt(Filosofia11);
    var Filosofia2 = parseInt(Filosofia22);
    var Filosofia3 = parseInt(Filosofia33);
    calculasoma(Filosofia1, Filosofia2, Filosofia3);
    calculaMédiaM(Filosofia1, Filosofia2, Filosofia3);
    soma = calculasoma(Filosofia1, Filosofia2, Filosofia3);
    mediad = calculaMédiaM(Filosofia1, Filosofia2, Filosofia3);
    somafiloosfia.textContent = soma;
    mediafilosofia.textContent = mediad;
    return mediad;
     
 }
 function fisica (form){
    var fisica11 = form.fisicaprimeiro.value;
    var fisica22 = form.fisicasegundo.value;
    var fisica33 = form.fisicaterceiro.value;
    var fisica1 = parseInt(fisica11);
    var fisica2 = parseInt(fisica22);
    var fisica3 = parseInt(fisica33);
    calculasoma(fisica1, fisica2, fisica3);
    calculaMédiaM(fisica1, fisica2, fisica3);
    var soma = calculasoma(fisica1, fisica2, fisica3);
    var mediae = calculaMédiaM(fisica1, fisica2, fisica3);
    somafisica.textContent = soma;
    mediafisica.textContent = mediae;
    return mediae;
 }
 function geografia (form){
    var geografia11 = form.geografiaprimeiro.value;
    var geografia22 = form.geografiasegundo.value;
    var geografia33 = form.geografiaterceiro.value;
    var geografia1 = parseInt(geografia11);
    var geografia2 = parseInt(geografia22);
    var geografia3 = parseInt(geografia33);
    soma = calculasoma(geografia1, geografia2, geografia3);
    mediaf = calculaMédiaM(geografia1, geografia2, geografia3);
    somageografia.textContent = soma;
    mediageografia.textContent = mediaf;
    return mediaf;
 }
 function historia (form){
    var historia11 = form.historiaprimeiro.value;
    var historia22 = form.historiasegundo.value;
    var historia33 = form.historiaterceiro.value;
    var historia1 = parseInt(historia11);
    var historia2 = parseInt(historia22);
    var historia3 = parseInt(historia33);
    calculasoma(historia1, historia2, historia3);
    calculaMédiaM(historia1, historia2, historia3);
    var soma = calculasoma(historia1, historia2, historia3);
    var mediag = calculaMédiaM(historia1, historia2, historia3);
    somahistoria.textContent = soma;
    mediahistoria.textContent = mediag;
    return mediag;
 }
  function portugues (form){
     var portugues11 = form.portuguesprimeiro.value;
     var portugues22 = form.portuguessegundo.value;
     var portugues33 = form.portuguesterceiro.value;
     var portugues1 = parseInt(portugues11);
     var portugues2 = parseInt(portugues22);
     var portugues3 = parseInt(portugues33);
     soma = calculasoma(portugues1, portugues2, portugues3);
     mediah = calculaMédiaM(portugues1, portugues2, portugues3);
     somaportugues.textContent = soma;
     mediaportugues.textContent = mediah;
     return mediah;
  }
 function matematica (form){
    var matematica11 = form.matematicaprimeiro.value;
    var matematica22 = form.matematicasegundo.value;
    var matematica33 = form.matematicaterceiro.value;
    var matematica1 = parseInt(matematica11);
    var matematica2 = parseInt(matematica22);
    var matematica3 = parseInt(matematica33);
   
    var soma = calculasoma(matematica1, matematica2, matematica3);
    var mediai = calculaMédiaM(matematica1, matematica2, matematica3);
    somamatematica.textContent = soma;
    mediamatematica.textContent = mediai;
    return mediai;
 }
 function quimica (form){
    var quimica11 = form.quimicaprimeiro.value;
    var quimica22 = form.quimicasegundo.value;
    var quimica33 = form.quimicaterceiro.value;
    var quimica1 = parseInt(quimica11);
    var quimica2 = parseInt(quimica22);
    var quimica3 = parseInt(quimica33);
    soma = calculasoma(quimica1, quimica2, quimica3);
    mediaj = calculaMédiaM(quimica1, quimica2, quimica3);
    somaqumica.textContent = soma;
    mediaquimica.textContent = mediaj;
    return mediaj;
 }
 function Sociologia (form){
    var Sociologia11 = form.Sociologiaprimeiro.value;
    var Sociologia22 = form.Sociologiaegundo.value;
    var Sociologia33 = form.arteterceiro.value;
    var Sociologia1 = parseInt(Sociologia11);
    var Sociologia2 = parseInt(Sociologia22);
    var Sociologia3 = parseInt(Sociologia33);
    soma = calculasoma(Sociologia1, Sociologia2, Sociologia3);
    mediak = calculaMédiaM(Sociologia1, Sociologia2, Sociologia3);
    somasociologia.textContent = soma;
    mediasociologia.textContent = mediak;
    return mediak;
 }
 function Efinanceira (form){
    var Efinanceira11 = form.Efinanceiraprimeiro.value;
    var Efinanceira22 = form.Efinanceirasegundo.value;
    var Efinanceira33 = form.Efinanceiraterceiro.value;
    var Efinanceira1 = parseInt(Efinanceira11);
    var Efinanceira2 = parseInt(Efinanceira22);
    var Efinanceira3 = parseInt(Efinanceira33);
    calculasoma(Efinanceira1, Efinanceira2, Efinanceira3);
    calculaMédiaM(Efinanceira1, Efinanceira2, Efinanceira3);
    var soma = calculasoma(Efinanceira1, Efinanceira2, Efinanceira3);
    var medial = calculaMédiaM(Efinanceira1, Efinanceira2, Efinanceira3);
    somaEFinanceira.textContent = soma;
    mediaeFinanceira.textContent = medial;
    return medial;
 }
 function ingles (form){
   var ingles11 = form.inglesprimeiro.value;
   var ingles22 = form.inglessegundo.value;
   var ingles33 = form.inglesterceiro.value;
   var ingles1 = parseInt(ingles11);            
   var ingles2 = parseInt(ingles22);           
   var ingles3 = parseInt(ingles33);            
   calculasoma(ingles1, ingles2, ingles3);
   calculaMédiaM(ingles1, ingles2, ingles3);
   var soma = calculasoma(ingles1, ingles2, ingles3);
   var mediay = calculaMédiaM(ingles1, ingles2, ingles3);
   somaingles.textContent = soma;
   mediaingles.textContent = mediay;
   return mediay;
}
 
 

   








//13
























