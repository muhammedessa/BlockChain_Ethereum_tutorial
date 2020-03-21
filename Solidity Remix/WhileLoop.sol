pragma solidity ^0.4.22 <0.7.0;

contract WhileContract{
     
  uint myStoredData =  1;
  
   function getStoredData() public view returns (uint ){ 
       do{
            myStoredData++;
       }while(myStoredData != 4);
        
        return myStoredData;
    }
   
    
}