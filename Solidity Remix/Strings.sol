pragma solidity ^0.4.22 <0.7.0;

contract StringsContract{
     
  string  myStoredData =  'Muhammed Essa Hameed';
  string  myStoredData2 =   "Muhammed Essa Hameed";
  bytes32 myStoredData3 =   "Muhammed Essa Hameed";
  
   function getStoredData() public view returns (bytes32 ){ 
        return myStoredData3;
    }
 
  function setStoredData(bytes32 value) public  { 
        myStoredData3 = value;
    }
    
}