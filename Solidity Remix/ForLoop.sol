
pragma solidity ^0.4.22 <0.7.0;

contract ForLoopContract{
     
  uint public myStoredData =  0;
  
   function getStoredData() public view returns (uint ){ 
      
      for( uint i = 0 ; i != 10 ; i++  ){
          myStoredData++ ;
      }
        return myStoredData;
    }
   
    
}