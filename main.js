const reader = require('readline-sync');
const utils = require('./converter');

const num = reader.questionInt("Please enter a number = ");
const opt = reader.questionInt("Please choose an option: \n 1:Binary \n 2:Hexadecimal =");

if(opt === 1){
  console.log(utils.convertToBinary(num));
}else if(opt === 2){
  console.log(utils.convertToHexa(num));
}else if(typeof opt === "number"){
  console.log("There are no options! ");
}else{
  console.log("Import a number!");
}
