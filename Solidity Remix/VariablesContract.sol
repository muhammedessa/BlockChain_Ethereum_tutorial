pragma solidity ^0.4.22 <0.7.0;

contract VariablesContract{
    
  int myData  ; 
  
  uint myStoredData;
 
  constructor() public {
      myStoredData = 20; // State Variable
  }
  
         function getStoredData() public view returns (uint ){ 
        return myStoredData;
    }
  
       function getNum() public view returns (uint ){
           uint x = 10;  //local Variable
           uint y = 10;  //local Variable
           
           uint myResult = x + y + myStoredData ;
        return myResult;
    }
    
}