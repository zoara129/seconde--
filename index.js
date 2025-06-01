function solvethis(){ 
       let a = parseFloat(document.getElementById("a").value);
       let b = parseFloat(document.getElementById("b").value);
       let c = parseFloat(document.getElementById("c").value);

       let  x1, x2;
       let resultText = "";

       let delta = (b * b) - (4 * a * c);
        if (delta >  0){
           x1 = (-b - Math.sqrt(delta))/(2*a);
           x2 = (-b + Math.sqrt(delta))/(2*a);
           resultText = `x1 = ${x1}, x2= ${x2}`;
        }
        else if (delta === 0){
           x1 = x2 = (-b) / (2*a);
           resultText =  `x1 = ${x1}, x2 = ${x2}`;
        }
        else if (isNaN(a) || isNaN(b) || isNaN(c)){
          resultText = "entrer les valeurs!"
        }
        else{
           resultText = "pas de solution.";
        }

      document.getElementById("result").innerText = resultText;
}