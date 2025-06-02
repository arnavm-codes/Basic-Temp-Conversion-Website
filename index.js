const textBox = document.getElementById("textBox");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
let temperature;



function convert()
{
    if(toFah.checked){
        result.textContent = "You selected toFahrenheit.";
        
        temperature = Number(textBox.value);
        temperature = temperature* 9/5 + 32;
        result.textContent = temperature.toFixed(1) + " *F";
    }
    else if(toCel.checked){
        result.textContent = "You selected toCelsius.";
        
        temperature= Number(textBox.value);
        temperature = (temperature - 32) * 5/9 ;
        result.textContent = temperature.toFixed(2) +  " *C";
    }
    else{
        result.textContent = "Select a unit !";    
    }
}