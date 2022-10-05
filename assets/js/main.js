const navBarNav = document.querySelector('.navbar-nav');
const navbarToggle = document.querySelector(".nav-toggle-btn")
navbarToggle.addEventListener('click', ()=>{
   navBarNav.classList.toggle("active");
   navbarToggle.classList.toggle("active");
}) 




function sectionSuivant(declencheur,sectionCible,navCible){
   let elementCourant = document.querySelector(sectionCible),
   declencheurEvenement = document.querySelector(declencheur),
   nav = document.querySelector(navCible);

   declencheurEvenement.addEventListener('click',function(){
     
     
      document.querySelectorAll('section').forEach(function(element){
         if(element.classList.contains("section-active")){
          element.classList.remove("section-active")
         }
       
          })
          elementCourant.classList.add("section-active");


document.querySelectorAll(".nav-item").forEach(function(element){
   if(element.classList.contains("page-courant")){
      element.classList.remove("page-courant");
   }
})


nav.classList.add("page-courant")
   })
   
   
}


$(document).ready(function(){
   $(".nav-item").click(function(element){
      $(".nav-item").removeClass("page-courant");
      $(this).addClass("page-courant");
      $("section").removeClass("section-active");
      document.querySelectorAll("section")[$(this).index()].classList.add("section-active")
   })

   $(".btn-vers-le-projet").click(function(){
      $("section").removeClass("section-active");
      $(".liste-de-projet").addClass("section-active");
      $(".nav-item").removeClass("page-courant");
      $(".nav-item:nth-child(3)").addClass("page-courant");
   })

  //bouton pour le projet 3
  $(".btn-depuis-circuit").click(function(){
   $("section").removeClass("section-active");
   $(".projet-2").addClass("section-active");
   $(".nav-item").removeClass("page-courant");
   $(".nav-item:nth-child(5)").addClass("page-courant");
})

$(".vers-projet-4").click(function(){
   $("section").removeClass("section-active");
   $(".projet-4").addClass("section-active");
   $(".nav-item").removeClass("page-courant");
   $(".nav-item:nth-child(7)").addClass("page-courant");
})
  //bouton pour le projet 2


  $(".btn-vers-second").click(function(){
   $("section").removeClass("section-active");
   $(".projet-1").addClass("section-active");
   $(".nav-item").removeClass("page-courant");
   $(".nav-item:nth-child(4)").addClass("page-courant");
})

$(".vers-projet-3").click(function(){
   $("section").removeClass("section-active");
   $(".projet-3").addClass("section-active");
   $(".nav-item").removeClass("page-courant");
   $(".nav-item:nth-child(6)").addClass("page-courant");
})

  //bouton pour le projet 1


  



sectionSuivant(".vers-projet-2",".projet-2",".nav-item:nth-child(5)");
  //FIN DES BOUTONS

   $(".btn-vers-le-groupe").click(function(){
      $("section").removeClass("section-active");
      $(".groupe").addClass("section-active");
      $(".nav-item").removeClass("page-courant");
      $(".nav-item:nth-child(2)").addClass("page-courant");
   })

   $(".vers-projet").click(function(){
      $("section").removeClass("section-active");
      $(".nav-item").removeClass("page-courant");
      console.log("couco");
      document.querySelectorAll("section")[2].classList.add("section-active");
      document.querySelectorAll(".nav-item")[2].classList.add("page-courant");
   })

//LES BOUTONS DEPUIS LE PROJET PUBLICITE

   $(".btn-depuis-publicity").click(function(){
      $("section").removeClass("section-active");
      $(".projet-3").addClass("section-active");
      $(".nav-item").removeClass("page-courant");
      $(".nav-item:nth-child(6)").addClass("page-courant");
   })


   $(".vers-fin").click(function(){
      $("section").removeClass("section-active");
      $(".remerciment").addClass("section-active");
      $(".nav-item").removeClass("page-courant");
      $(".nav-item:last-child").addClass("page-courant");
   })

   

   $(".fin-vers-accueil").click(function(){
      $("section").removeClass("section-active");
      $("section:first-child").addClass("section-active");
      $(".nav-item").removeClass("page-courant");
      $(".nav-item:first-child").addClass("page-courant");
   })

   // $(".en-arriere").click(function(){
   //    $("section").removeClass("section-active");
   //    $(".nav-item").removeClass("page-courant");

   //    console.log("le preview  "+((numeroPageCourant>0)?(numeroPageCourant-1):0));
   //    document.querySelectorAll("section")[(numeroPageCourant>0)? (numeroPageCourant-1):0].classList.add("section-active");
   //    document.querySelectorAll(".nav-item")[(numeroPageCourant>0)? (numeroPageCourant-1):0].classList.add("page-courant");
   //    numeroPageCourant--;
   // })


   $(".projet-item").click(function(){
      let numeroDeProjet = leProjet($(this).index());

      $(".nav-item").removeClass("page-courant");
      $("section").removeClass("section-active");
      document.querySelectorAll("section")[numeroDeProjet].classList.add("section-active");
      document.querySelectorAll(".nav-item")[numeroDeProjet].classList.add("page-courant");

   })
})

function leProjet(index){
   return index + 3;
}




var changement=0;
 function apparition(){
    var x;
    const img = document.querySelectorAll(".img-publicity");
    for(x=0;x<img.length;x++){
        img[x].style.display= "none";
    }
    changement++;
    if(changement> img.length){changement=1}
     img[changement - 1].style.display = "block";
    setTimeout(apparition,1500)

 }
 apparition();









//=======================================================================================

// méthode de cramer pour résoudre une équation à trois inconnue

function detDeMat2(matrice2){
   return (matrice2[0][0] * matrice2[1][1]) -(matrice2[1][0] * matrice2[0][1]);
}
//pour le numéro de ligne , on commence par 0, de même pour les colonnes
//fonction qui va enlever les lignes au numLigne et colonne au numColonne donnée
function retirerLigneColonne(matrice,numLigne,numColonne){
   var matriceResult = matrice.slice(0,matrice.length);
   for(let j=0;j<matriceResult.length;j++){
       matriceResult[j] = matrice[j].slice();
   }
   matriceResult.splice(numLigne,1);
   for(let i=0;i<matriceResult.length;i++){
       matriceResult[i].splice(numColonne,1);
   }
   return matriceResult;
}

//determinant de matrice 3x3
function determinantMatrice(matricedet)
{
   let detMat =0;
   for(let j=0;j<matricedet.length;j++){
       detMat += (Math.pow(-1,j+2) *matricedet[0][j] * detDeMat2(retirerLigneColonne(matricedet,0,j)));
   }
   return detMat;
}
function replaceJColumn(matrice,column,index){
   var Result = matrice.slice(0,matrice.length);
   let n=0;
   for(let j=0;j<Result.length;j++){
       Result[j] = matrice[j].slice();
   }
   for(let j=0;j<Result.length;j++){
       Result[j][index] = column[n];
       n++;
   }
   return Result;
}

function resolution(coefficient,secondMembre){
   let det = determinantMatrice(coefficient);
   let detx1 = determinantMatrice(replaceJColumn(coefficient,secondMembre,0));
   let detx2 = determinantMatrice(replaceJColumn(coefficient,secondMembre,1));
   let detx3 = determinantMatrice(replaceJColumn(coefficient,secondMembre,2));
   if(det === 0)
   {
      document.getElementById("resultatCramer").innerHTML = "Le système n'admet aucune solution";
      return;
   }
   
   let x1, x2, x3;
   x1 = detx1 / det;
   x2 = detx2 / det;
   x3 = detx3 / det;
   document.getElementById("resultatCramer").innerHTML = "S = {( " + x1 + ", " + x2 + ", " + x3 + ")}";
   // document.getElementById("resultatCramer").innerHTML = `Solutions: <br> x1= ${(resultat[0])?resultat[0]:"n'existe pas"}  <br> x2= ${(resultat[1])?resultat[1]:"n'existe pas"}  <br> x3= ${(resultat[2])?resultat[2]:"n'existe pas"}` ;
   return;
  
}


//========================ce qui concerner le DOM=======================
const resoudre = ()=>{
   let repere = 0;//pour se repérer dans la création du tableau
   let ligne1=[],ligne2=[],ligne3=[],deuxiemeMembre=[];
let coefficientGlobal=[];

   //ligne<i>: coeficient du i-ème ligne
   //le deuxièmeMembre est fait pour les nombres du deuxième parti de l'égalité


   //la fonction suivante est utilisé pour générer le tableau contenant les coefficients du system d'équation
   allInput.forEach((element)=>{
       repere++;
       if(!element.value) element.value = 0;
       if(repere<4){
           ligne1.push(parseFloat(element.value));
       }
       else if((repere%4) == 0) deuxiemeMembre.push(parseFloat(element.value));
       else if(repere<8){
           ligne2.push(parseFloat(element.value));
       }
       else{
           ligne3.push(parseFloat(element.value));
       }
   });

   coefficientGlobal.push(ligne1,ligne2,ligne3);

   resolution(coefficientGlobal,deuxiemeMembre);
}

let reInitialiserInput = () =>{
   allInput.forEach(element => element.value = ' ');
   document.getElementById("resultatCramer").innerHTML = " ";
   document.getElementById("resultatCramer").innerHTML = " ";
}

let allInput = document.querySelectorAll('#a'),resoudreBtn = document.querySelector("#resoudreSecond");
resoudreBtn.addEventListener("click",resoudre),reInitialiser = document.querySelector("#reinitialiserSecond");
reInitialiser.addEventListener("click", reInitialiserInput);


/*=======================================================

       FIN DU METHODE DE CRAMER

=========================================================*/




     document.addEventListener("keypress", function(event) {
         if (event.key === "Enter") {
           
            resoudreBtn.click();
         }
       });