pragma solidity ^0.4.22 <0.7.0;

contract ArraysContract{
     
    uint[4] salary = [1000,2000,3000,4000];
    uint[] ages = [1,2,3,4,6,7];
      uint[] dyAges = new uint[](4) ;
    
    uint public muhammedSalary =  salary[2];
  
   function getSalary() public view returns (uint[4] ){ 
        return salary ;
    }
 
//   function setStoredData(bytes32 value) public  { 
//         myStoredData3 = value;
//     }
    
}