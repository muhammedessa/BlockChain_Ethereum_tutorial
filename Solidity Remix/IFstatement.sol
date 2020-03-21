pragma solidity ^0.4.22 <0.7.0;

contract IFstatementContract{
     
  uint public myStoredData =  20;
  
   function getStoredData() public view returns (uint ){ 
      
     if(myStoredData == 0){
         myStoredData = 0;
     }else{
         myStoredData = 20;
     }
        return myStoredData;
    }
}