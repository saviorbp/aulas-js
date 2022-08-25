//o que são vetores e arrays

//declarando um array
let array = ['diana', 1, true];
console.log(array);

//pode ser usado para armazenar qualquer tipo de dado
let array2 = ['maria', 2, true, ['array1'],['array2']];
console.log(array2);

//foreach para percorrer o array
array.forEach(function(item, index){console.log(item,index)} );
array2.forEach(function(item, index){console.log(item,index)} );

//length para saber o tamanho do array
console.log(array.length);
console.log(array2.length);

//indexOf para saber o indice de um elemento no array
console.log(array.indexOf('diana'));
console.log(array2.indexOf(2));

//push para adicionar elementos no array
array.push('novo item');
console.log(array);

//pop para remover elementos no array
array.pop();
console.log(array);

//unshift para adicionar elementos no inicio do array
array.unshift('novo item');
console.log(array);

//shift para remover elementos no inicio do array
array.shift();
console.log(array);

//splice para adicionar e remover elementos no array
array.splice(1,0,'novo item');
console.log(array);

//slice para copiar um array
let array3 = array.slice(0,2);
console.log(array3);

//reverse para inverter o array
let array4 = array.reverse();
console.log(array4);

//concat para concatenar dois arrays
let array5 = array.concat(array2);
console.log(array5);

//join para transformar um array em string
let array6 = array.join(' - ');
console.log(array6);

//sort para ordenar um array
let array7 = array.sort();
console.log(array7);

let object = {string: 'string', number: 1, boolean: true, array:["array"], 
objectInterno:{objectInterno: 'objectInterno'}};

console.log(object);
console.log(object.string);
console.log(object.objectInterno.objectInterno);
console.log(object.array[0]);