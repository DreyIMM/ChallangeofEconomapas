var age = prompt("Digite sua idade");

ageSoccer(age)

function ageSoccer(age){
  if(age>= 3 && age<=9){
    console.log("Categoria Chupeta: " +age);
  }else 
    if(age>=10 && age<=14){
      console.log("Categoria Junior: " +age);
    }
  else 
    if(age>=15 && age<=18){
      console.log("Categoria Amador: " +age);
    }
   else 
    if(age<=30){
      console.log("Categoria Pro: " +age);
    }else{
      console.log("Categoria invalida")
    }
}