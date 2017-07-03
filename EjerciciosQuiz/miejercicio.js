// Primer Ejercicio
var oneNum = 11;
var twoNum = 2;
var thNum = 1;

//----Calculo del menor
if(oneNum < twoNum && oneNum < thNum){
  //console.log(oneNum);
} else if (twoNum < oneNum && twoNum < thNum ){
  //console.log(twoNum);
}else{
  //console.log(thNum);
};
//----Calculo del mayor
if(oneNum > twoNum && oneNum > thNum){
  //console.log(oneNum);
} else if (twoNum > oneNum && twoNum > thNum ){
  //console.log(twoNum);
}else{
 // console.log(thNum);
};

//Segundo Ejercicio
var arr = [5, 10, 8, 55];

function calculoPar(arr){
  var pares=[];
  var imPares=[];
  for(var i = 0; i < arr.length; i++){
    if(i%2==0){
      pares.push(arr[i]);
    } else {
      imPares.push(arr[i]);
    }
  }
  return "Esto son: "+ pares + " y estos son: " + imPares;
}
//console.log(calculoPar(arr));

//Ejercicio 3
var superArr = [1, 2, 3, 4, 5];

function alReves(superArr){
  return superArr.reverse();
}
//console.log(alReves(superArr));


//Ejercicio 4;
var n = 5;
function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

for (var i = 0; i < n; i++) {
  var sp = espacios (n - (i+1));
  var content = "";
  for (j = 0; j < i+i; j++)
    content +=  j;
  console.log(sp + content);
}