function solutionCircuit(U,R1,R2,R3,R4){
    if(U == 0)
    {
        return {
            'I1': 0,
            'I2': 0,
            'I3':0 ,
            'I4':0,
            'U1': 0,
            'U2':0,
            'U3': 0
        };
    }

    let Req1 = (R3 == 0 && R2 == 0)? 0 : (R3*R2)/(R2+R3), Req = (Req1+R1+R4);
    let I = U/Req;

    return {
        'I1': I,
        'I2': (R3 == 0 && R2 == 0)? I : (R3*I)/(R2+R3),
        'I3':(R3 == 0 && R2 == 0)? I : (R2*I)/(R2+R3), 
        'I4':I,
        'U1': R1*I,
        'U2': Req1*I,
        'U3': R4*I
    };
}


// function solutionCircuit(U,R1,R2,R3,R4){
//     let Req1 = (R3*R2)/(R2+R3), Req = (Req1+R1+R4);
//     let I = U/Req;
//     return {
//         'I1': I,
//         'I2': (R3*I)/(R2+R3),
//         'I3':(R2*I)/(R2+R3), 
//         'I4':I,
//         'U1': R1*I,
//         'U2': Req1*I,
//         'U3': R4*I
//     };
//}


let boutonResoudre = document.getElementById("resoudre");
let boutonReinitialiser = document.getElementById("reinitialiser");
let lesInputs = document.querySelectorAll(".projet-3 input");
let divResultat = document.getElementById("resultatCircuit");

boutonResoudre.addEventListener("click",resoudreCircuit);

function resoudreCircuit(){
let valeur = [];
lesInputs.forEach((element)=> valeur.push((element.value == "" || element.value == " ")?0:parseFloat(element.value)));


let resultatCircuit = solutionCircuit(valeur[0],valeur[1],valeur[2],valeur[3],valeur[4],valeur[5]);


divResultat.innerHTML= ` I4 = I1 = ${(resultatCircuit.I1).toFixed(3)}A | \tI2 = ${(resultatCircuit.I2).toFixed(3)}A | I3 = ${(resultatCircuit.I3).toFixed(3)}A   \t<br>
U1 = ${(resultatCircuit.U1).toFixed(3)}V |  \tU2 = ${(resultatCircuit.U2).toFixed(3)}V  | \tU3 = ${(resultatCircuit.U3).toFixed(3)}V`
}





function vide()
{
    const rin= document.getElementById('U')
    rin.value=""
    const aaa= document.getElementById('R1')
    aaa.value=""
    const bbb= document.getElementById('R2')
    bbb.value=""
    const ccc= document.getElementById('R3')
    ccc.value=""
    const ddd= document.getElementById('R4')
    ddd.value=""
    const result= document.getElementById('resultatCircuit')
    result.innerHTML=""  
}