//Declaração de 
var primeiro = parseInt(prompt("Informe o primeiro valor: "));
var segundo = parseInt(prompt("Informe o segundo valor: "));
var escolha;

// Menu de Opções
escolha = prompt("A. Soma de dois números" + "\n" +
                 "B. Diferença entre dois números" + "\n" +
                 "C. Produto entre dois números" + "\n" +
                 "D. Divisão entre dois números" + "\n" + 
                 "Escolha uma opção em número: ").toUpperCase();

// Casos do Switch
switch(escolha) {
  case "A":
    alert((primeiro) + (segundo));
    break;
    
  case "B":
    if (primeiro > segundo){
       alert((primeiro) - (segundo));
    } else {
        alert((segundo) - (primeiro));
        }
    break;
    
  case "C":
    alert((primeiro) * (segundo));
    break;
    
  case "D":
    if (primeiro > segundo){
      alert((primeiro) / (segundo));
    } else{
       alert((segundo) / (primeiro));
       }
    break;
    
  default:
    alert("A opção digitada não é válida!");
    break;
}