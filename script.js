 const name = prompt("Enter your name");
 const weigth = prompt("Enter your weight");
 const heigth = prompt("Enter your heigth ");

alert("Calculating, press OK");

const BMR = parseFloat(weigth) / (Math.pow(parseFloat(heigth), 2));

console.log(BMR);

if(BMR < 18.5){
    console.log("Dear" + name +  "you are underweight, please be careful")
}
else if(BMR >= 18.5 && BMR <= 24.9){
    console.log("Dear" + name +  "you are normal")
}
else if(BMR >= 25 && BMR <= 29.9){
    console.log("Dear" + name + "you are overweight")
}
else if(BMR >= 30 && BMR <= 34.9){
    console.log("SOS... Dear" + name +  "you are obese")
}
else{
    console.log("SOS... Dear" + name + "you are extremely obese")
}