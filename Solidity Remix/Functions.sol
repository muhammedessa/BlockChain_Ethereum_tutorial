pragma solidity ^0.4.22 <0.7.0;
 
contract FunctionContract {

uint num1 = 10; //state variable

function setNumber(uint num) public returns(uint){
      num1 = num;
    return num1;
}

function changeNum1() private returns(uint ){
     num1 = 2 ;
   return num1;
}

function getSum() public view returns(uint sub , uint sum){
    changeNum1();
    uint num2 =20;  //local variable
   sub = num2 - num1;
   sum = num1 + num2;
}

function getSum(uint a) public pure returns(uint ){
    uint num2 =20;  //local variable
  return  num2 + a; 
}



function getSum(uint a, uint b) public pure returns(uint ){
  return  b + a; 
}


function getSum2() public pure returns(uint sub1 , uint sum1){
     
    uint num2 =20;  //local variable
     uint num3 =20;  //local variable
   
   sub1 = num2 - num3;
   sum1 = num3 + num2;
    
}


    
}