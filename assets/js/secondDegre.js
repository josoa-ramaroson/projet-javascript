const input1 = document.querySelector('#inp1');
const input2 = document.querySelector('#inp2');
const input3 = document.querySelector('#inp3');
const solve = document.querySelector('.b1');
const reset = document.querySelector('.b2');
const solution = document.querySelector('.solution');

//UTILISATION DU REGEX

// Execute a function when the user presses a key on the keyboard



clickInsideInput(input1, solve);
clickInsideInput(input2, solve);
clickInsideInput(input3, solve);


function clickInsideInput(input, btn)
{
    input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          btn.click();
        }
      });
}


reset.addEventListener('click', () => {
    input1.value = "";
    input2.value = "";
    input3.value = "";    
    solution.textContent = "";

    
})

solve.addEventListener('click', () => {
    //  contrôle de saisie
    if(input1.value === "")
    {
        input1.style.border = "2px solid rgba(200, 0, 0, .9)";
        return;
    }
    else
        input1.style.border = "none";
    if(input2.value === "")
    {
        input2.style.border = "2px solid rgba(200, 0, 0, .9)";
        return; 
    }
    else
        input2.style.border = "none";

    if(input3.value === "")
    {
        input3.style.border = "2px solid rgba(200, 0, 0, .9)";
        return;
    }
    else
        input3.style.border = "none";
    // fin contrôle de saisie 


    let A = Number(input1.value);
    let B = Number(input2.value);
    let C = Number(input3.value);
    let sol = "";
    let x1 = 0, x2 = 0;
    if(A === 0 && B === 0)
    {
        alert("Oups ! Impossible");
        return;
    }
    if(A === 0 && B === 0 && C === 0)
    {
        sol += "S = { " + 0 + " }";
        solution.textContent = sol;
        return;
    }
    if(C === 0)
    {
        alert("Oups! Impossible");
        return;
    }
    if(A === 0)
    {
        x1 = - C / B;
        sol += "S = { " + x1 + " }";
        solution.textContent = sol;
        return;
        
    }
    const DELTA  = Math.pow(B, 2) - 4 * A * C;
    if(DELTA > 0)
    {
        
        x1 = ((-1) * B + Math.sqrt(DELTA)) / (2 * A);
        x2 = ((-1) * B - Math.sqrt(DELTA)) / (2 * A);
        
            if(!Number.isInteger(x1)) 
            x1 = x1.toFixed(2);
    
            if(!Number.isInteger(x2)) 
            x2 = x2.toFixed(2);
           
        sol += "S = { " + x1 + ", " + x2 + " }";
    }
    else if(DELTA === 0)
    {
        x1 = (-1) * B / (2 * A);
        if(typeof x1 === 'float')
            x1.toFixed(2);
        sol += "S = { " + x1 + " }";
    }
    else
    {
        sol += "S = { } (Solution vide)";
    }
    solution.textContent = sol;
})
